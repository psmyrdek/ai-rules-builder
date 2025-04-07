import { test as teardown } from '@playwright/test';
import { createClient } from '@supabase/supabase-js';

teardown('cleanup database', async () => {
  console.log('Starting database cleanup...');
  console.log('Environment variables check:');
  console.log('- SUPABASE_URL present:', !!process.env.SUPABASE_URL);
  console.log('- SUPABASE_PUBLIC_KEY present:', !!process.env.SUPABASE_PUBLIC_KEY);
  console.log('- E2E_USERNAME_ID present:', !!process.env.E2E_USERNAME_ID);
  console.log('- E2E_USERNAME_ID value:', process.env.E2E_USERNAME_ID);

  if (!process.env.SUPABASE_URL!.includes('ueardaqpl')) {
    throw new Error('Cannot run teardown on non-test database!');
  }

  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_PUBLIC_KEY!);

  try {
    // First, count how many records exist before deletion
    const { data: beforeCount, error: countError } = await supabase
      .from('collections')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', process.env.E2E_USERNAME_ID);

    if (countError) {
      console.error('Error counting collections:', countError);
    } else {
      console.log(
        `Found ${beforeCount?.length || 0} collections for user ID ${process.env.E2E_USERNAME_ID} before deletion`,
      );
    }

    // Perform the deletion
    const { error, count } = await supabase
      .from('collections')
      .delete({ count: 'exact' })
      .eq('user_id', process.env.E2E_USERNAME_ID);

    if (error) {
      console.error('Error cleaning up collections:', error);
      throw error;
    }

    console.log(
      `Successfully deleted ${count || 0} collections for E2E test user ID: ${process.env.E2E_USERNAME_ID}`,
    );

    // Check if any records still exist after deletion
    const { data: afterCount, error: afterCountError } = await supabase
      .from('collections')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', process.env.E2E_USERNAME_ID);

    if (afterCountError) {
      console.error('Error counting remaining collections:', afterCountError);
    } else {
      console.log(`Remaining collections after deletion: ${afterCount?.length || 0}`);
      if (afterCount && afterCount.length > 0) {
        console.warn('WARNING: Some collections were not deleted!');
      }
    }
  } catch (error) {
    console.error('Failed to clean up database:', error);
    throw error;
  }
});
