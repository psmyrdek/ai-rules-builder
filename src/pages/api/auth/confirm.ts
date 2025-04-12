import { type EmailOtpType } from '@supabase/supabase-js';
import { type APIRoute } from 'astro';

import { createSupabaseServerInstance } from '@/db/supabase.client';

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const requestUrl = new URL(request.url);
  const token_hash = requestUrl.searchParams.get('token_hash');
  const type = requestUrl.searchParams.get('type') as EmailOtpType | null;
  const next = requestUrl.searchParams.get('next') || '/';

  if (token_hash && type) {
    const supabase = createSupabaseServerInstance({ cookies, headers: request.headers });

    console.log('Initializing OTP verification');

    const {
      error,
      data: { user },
    } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });

    if (error) {
      console.error('Error verifying OTP:', error);
      return redirect('/auth/reset-password?error=invalid-token');
    }

    if (!error) {
      console.log('OTP verified successfully - user:', user?.email, 'redirecting to', next);
      return redirect(next);
    }
  }

  // return the user to an error page with some instructions
  return redirect('/auth/reset-password?error=invalid-token');
};
