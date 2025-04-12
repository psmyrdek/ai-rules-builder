import type { APIRoute } from 'astro';
import { createSupabaseAdminInstance } from '../../../db/supabase.client';
import { isFeatureEnabled } from '../../../features/featureFlags';

export const POST: APIRoute = async ({ request, cookies, url }) => {
  // Check if auth feature is enabled
  if (!isFeatureEnabled('resetPassword')) {
    return new Response(JSON.stringify({ error: 'Password reset is currently disabled' }), {
      status: 403,
    });
  }

  try {
    const { email } = await request.json();

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
      });
    }

    const supabase = createSupabaseAdminInstance({ cookies, headers: request.headers });

    const redirectTo = `${url.origin}/auth/update-password`;

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: redirectTo,
    });

    // Don't disclose whether the email exists or not for security reasons.
    // Always return a success response.
    if (error) {
      console.error('Password reset error:', error.message);
    }

    return new Response(
      JSON.stringify({ message: 'Password reset instructions sent if email is valid' }),
      { status: 200 },
    );
  } catch (err) {
    console.error('Reset password endpoint error:', err);
    // Handle JSON parsing errors or other unexpected issues
    if (err instanceof SyntaxError) {
      return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });
    }
    return new Response(JSON.stringify({ error: 'An unexpected error occurred' }), { status: 500 });
  }
};
