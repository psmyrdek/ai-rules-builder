import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const { token_hash } = await request.json();

    if (!token_hash) {
      return new Response(JSON.stringify({ error: 'Token hash is required' }), {
        status: 400,
      });
    }

    const {
      error,
      data: { user },
    } = await locals.supabase.auth.verifyOtp({
      token_hash,
      type: 'recovery',
    });

    if (error) {
      console.error('Error verifying OTP:', error.message);
      return new Response(JSON.stringify({ error: 'Invalid or expired token' }), { status: 400 });
    }

    return new Response(JSON.stringify({ user }), { status: 200 });
  } catch (err) {
    console.error('Verify reset token error:', err instanceof Error ? err.message : err);
    if (err instanceof SyntaxError) {
      return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });
    }
    return new Response(JSON.stringify({ error: 'An unexpected error occurred' }), { status: 500 });
  }
};
