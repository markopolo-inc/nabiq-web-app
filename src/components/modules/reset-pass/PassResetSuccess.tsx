import { FiCheck } from '@nabiq-icons';
import { Button, Stack } from '@nabiq-ui';

export const PassResetSuccess = () => {
  return (
    <>
      <div className='p-2 bg-success-600 rounded-full'>
        <FiCheck size={16} color='#fff' />
      </div>

      <Stack align='center' gap={4}>
        <p className='text-gray-900 text-2xl font-semibold'>Password changed!</p>
        <p className='text-gray-500 text-xl leading-[30px] font-normal text-center'>
          Your password has been changed successfully.
        </p>
      </Stack>

      <Button type='submit' fullWidth>
        Back to sign in
      </Button>
    </>
  );
};
