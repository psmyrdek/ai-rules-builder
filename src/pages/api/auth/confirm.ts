import { type APIRoute } from 'astro';

import { createSupabaseAdminInstance } from '@/db/supabase.client';

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const requestUrl = new URL(request.url);
  const token = requestUrl.searchParams.get('token');
  const email = requestUrl.searchParams.get('email');
  const next = requestUrl.searchParams.get('next') || '/';

  if (token && email) {
    const supabaseAdmin = createSupabaseAdminInstance({ cookies, headers: request.headers });

    console.log('Initializing OTP verification from', email);

    const {
      error,
      data: { user },
    } = await supabaseAdmin.auth.verifyOtp({
      token,
      email,
      type: 'email',
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
