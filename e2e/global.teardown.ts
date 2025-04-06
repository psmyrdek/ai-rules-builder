import { test as teardown } from '@playwright/test';
import { createClient } from '@supabase/supabase-js';

teardown('cleanup database', async () => {
  if (!process.env.SUPABASE_URL!.includes('ueardaqpl')) {
    throw new Error('Cannot run teardown on non-test database!');
  }

  if (!process.env.E2E_USERNAME_ID) {
    throw new Error('E2E_USERNAME_ID is not set!');
  }

  console.log(`Cleaning up test database ${process.env.SUPABASE_URL}...`);

  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_PUBLIC_KEY!, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  try {
    // Start transaction
    const { error: beginError } = await supabase.rpc('begin');
    if (beginError) {
      throw beginError;
    }

    // Delete collections
    const { error: deleteError } = await supabase
      .from('collections')
      .delete()
      .eq('user_id', process.env.E2E_USERNAME_ID);

    if (deleteError) {
      // Rollback on error
      await supabase.rpc('rollback');
      throw deleteError;
    }

    // Verify deletion was successful
    const { count, error: verifyError } = await supabase
      .from('collections')
      .select('*', { count: 'exact' })
      .eq('user_id', process.env.E2E_USERNAME_ID);

    if (verifyError) {
      await supabase.rpc('rollback');
      throw verifyError;
    }

    if (count && count > 0) {
      await supabase.rpc('rollback');
      throw new Error(`Failed to delete all records. ${count} records still remain.`);
    }

    // Commit transaction
    const { error: commitError } = await supabase.rpc('commit');
    if (commitError) {
      await supabase.rpc('rollback');
      throw commitError;
    }

    console.log('Successfully cleaned up collections for E2E test user');
  } catch (error) {
    console.error('Failed to clean up database:', error);
    throw error;
  } finally {
    // Ensure connection is properly closed
    await supabase.auth.signOut();
  }
});
