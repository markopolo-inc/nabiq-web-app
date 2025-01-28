import { Image } from '@mantine/core';
import { Stack } from '@nabiq-ui';
import { HeaderTitle } from 'layouts';
import NabiqLogo from 'src/assets/logo/logo-landmark.png';
import { ResetPassForm } from 'src/components/modules/reset-pass';

const ResetPass = () => {
  return (
    <>
      <HeaderTitle>Reset Pass</HeaderTitle>
      <div className='min-h-screen pt-14 w-full flex items-center justify-center'>
        <Stack className='max-w-[468px] w-full mx-auto' align='center' gap={24}>
          <Image src={NabiqLogo} alt='Nabiq' className='w-8 h-8' />

          <Stack align='center' gap={4}>
            <p className='text-gray-900 text-2xl font-semibold'>Reset password</p>
            <p className='text-gray-500 text-xl leading-[30px] font-normal text-center'>
              Enter your email address and we will send you instructions to reset your password.
            </p>
          </Stack>

          <ResetPassForm />
        </Stack>
      </div>
    </>
  );
};

export default ResetPass;
