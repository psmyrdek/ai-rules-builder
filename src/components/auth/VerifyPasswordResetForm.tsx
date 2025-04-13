import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { transitions } from '../../styles/theme';
import AuthInput from './AuthInput';
import { updatePasswordSchema } from '../../types/auth';
import type { UpdatePasswordFormData } from '../../types/auth';
import { useAuth } from '../../hooks/useAuth';

export const VerifyPasswordResetForm: React.FC = () => {
  const { updatePassword, error: apiError, isLoading } = useAuth();
  const [verificationError, setVerificationError] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<UpdatePasswordFormData>({
    resolver: zodResolver(updatePasswordSchema),
  });

  useEffect(() => {
    const verifyToken = async () => {
      const tokenHash = new URLSearchParams(window.location.search).get('token_hash');
      if (!tokenHash) {
        setVerificationError('No reset token found');
        return;
      }

      try {
        const response = await fetch('/api/auth/verify-reset-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token_hash: tokenHash }),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Failed to verify token');
        }

        setIsVerified(true);
      } catch (error) {
        setVerificationError(error instanceof Error ? error.message : 'Failed to verify token');
        console.error('Token verification error:', error);
      }
    };

    verifyToken();
  }, []);

  const onSubmit = async (data: UpdatePasswordFormData) => {
    try {
      await updatePassword(data);
      window.location.href = '/auth/login?message=password-updated';
    } catch (error) {
      console.error(error);
      // Error is handled by useAuth hook
    }
  };

  if (verificationError) {
    return (
      <div className="text-center space-y-4">
        <div className="text-red-500">{verificationError}</div>
        <a
          href="/auth/reset-password"
          className={`
            inline-block text-blue-400 hover:text-blue-300
            transition-colors duration-${transitions.duration.medium}
          `}
        >
          Request new password reset
        </a>
      </div>
    );
  }

  if (!isVerified) {
    return (
      <div className="text-center">
        <div className="text-gray-400">Verifying your reset token...</div>
      </div>
    );
  }

  if (isSubmitSuccessful) {
    return (
      <div className="text-center space-y-4">
        <div className="text-green-400">Your password has been updated successfully.</div>
        <a
          href="/auth/login"
          className={`
            inline-block text-blue-400 hover:text-blue-300
            transition-colors duration-${transitions.duration.medium}
          `}
        >
          Return to login
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {apiError && (
        <div className="p-3 mb-4 text-sm text-red-500 bg-red-100 rounded-md dark:bg-red-900/20">
          {apiError}
        </div>
      )}

      <AuthInput
        id="password"
        label="New Password"
        type="password"
        error={errors.password?.message}
        autoComplete="new-password"
        disabled={isLoading}
        {...register('password')}
      />

      <AuthInput
        id="confirm-password"
        label="Confirm New Password"
        type="password"
        error={errors.confirmPassword?.message}
        autoComplete="new-password"
        disabled={isLoading}
        {...register('confirmPassword')}
      />

      <button
        type="submit"
        disabled={isLoading}
        className={`
          w-full flex justify-center py-2 px-4 border border-transparent rounded-md
          text-sm font-medium text-white bg-blue-600 hover:bg-blue-700
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
          transition-colors duration-${transitions.duration.medium} ${transitions.timing.default}
          disabled:opacity-50 disabled:cursor-not-allowed
        `}
      >
        {isLoading ? 'Updating Password...' : 'Update Password'}
      </button>
    </form>
  );
};

export default VerifyPasswordResetForm;
