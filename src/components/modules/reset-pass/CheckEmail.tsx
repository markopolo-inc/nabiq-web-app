import { FiMail01 } from '@nabiq-icons';
import { Button, Stack } from '@nabiq-ui';

export const CheckEmail = () => {
  return (
    <>
      <div className='p-3.5 bg-gray-100 rounded-full'>
        <FiMail01 size={28} color='#697586' />
      </div>

      <Stack align='center' gap={4}>
        <p className='text-gray-900 text-2xl font-semibold'>Please check your email </p>
        <p className='text-gray-500 text-xl leading-[30px] font-normal text-center'>
          We have sent you instructions to reset your password on johndoe@gmail.com
        </p>
      </Stack>

      <Button type='submit' fullWidth>
        Resend email
      </Button>
    </>
  );
};
