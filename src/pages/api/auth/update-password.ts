import type { APIRoute } from 'astro';
import { createSupabaseAdminInstance } from '../../../db/supabase.client';
import { isFeatureEnabled } from '../../../features/featureFlags';

export const POST: APIRoute = async ({ request, cookies }) => {
  // Check if auth feature is enabled
  if (!isFeatureEnabled('resetPassword')) {
    return new Response(JSON.stringify({ error: 'Password update is currently disabled' }), {
      status: 403,
    });
  }

  try {
    const { password, confirmPassword } = await request.json();

    if (!password || !confirmPassword || password !== confirmPassword) {
      return new Response(JSON.stringify({ error: 'Password and confirm password must match' }), {
        status: 400,
      });
    }

    const supabase = createSupabaseAdminInstance({ cookies, headers: request.headers });

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }

    return new Response(JSON.stringify({ message: 'Password updated successfully' }), {
      status: 200,
    });
  } catch (err) {
    console.error('Reset password endpoint error:', err);
    // Handle JSON parsing errors or other unexpected issues
    if (err instanceof SyntaxError) {
      return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });
    }
    return new Response(JSON.stringify({ error: 'An unexpected error occurred' }), { status: 500 });
  }
};
