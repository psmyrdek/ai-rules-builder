import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, url, locals }) => {
  try {
    const { email } = await request.json();

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
      });
    }

    const { error } = await locals.supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${url.origin}/auth/update-password`,
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
