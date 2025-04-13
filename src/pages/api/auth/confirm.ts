import { type APIRoute } from 'astro';

import { createSupabaseAdminInstance } from '@/db/supabase.client';

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  console.log('Confirming OTP');

  const requestUrl = new URL(request.url);
  const tokenHash = requestUrl.searchParams.get('token_hash');

  console.log('Token:', tokenHash);

  if (tokenHash) {
    const supabaseAdmin = createSupabaseAdminInstance({ cookies, headers: request.headers });

    console.log('Initializing OTP verification with hash', tokenHash);

    const {
      error,
      data: { user },
    } = await supabaseAdmin.auth.verifyOtp({
      token_hash: tokenHash,
      type: 'recovery',
    });

    if (error) {
      console.error('Error verifying OTP:', error);
      return redirect('/auth/reset-password?error=invalid-token');
    }

    if (!error) {
      console.log('OTP verified successfully - user:', user?.email);
      return redirect('/auth/update-password');
    }
  }

  // return the user to an error page with some instructions
  return redirect('/auth/reset-password?error=invalid-token');
};
