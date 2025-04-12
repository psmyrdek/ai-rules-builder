import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { transitions } from '../../styles/theme';
import AuthInput from './AuthInput';
import { updatePasswordSchema } from '../../types/auth';
import type { UpdatePasswordFormData } from '../../types/auth';
import { useAuth } from '../../hooks/useAuth';

export const UpdatePasswordForm: React.FC = () => {
  // Use the updatePassword function from the hook
  const { updatePassword, error: apiError, isLoading } = useAuth();
  const [isSuccess, setIsSuccess] = useState(false); // State for success message

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdatePasswordFormData>({
    resolver: zodResolver(updatePasswordSchema),
  });

  const onSubmit = async (data: UpdatePasswordFormData) => {
    setIsSuccess(false); // Reset success state on new submission
    try {
      await updatePassword(data);
      setIsSuccess(true);
    } catch (error) {
      console.error('Update password error:', error);
      // Error is handled by useAuth hook and displayed via apiError
    }
  };

  if (isSuccess) {
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

export default UpdatePasswordForm;
