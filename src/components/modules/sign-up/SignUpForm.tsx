import { Button, Image, Stack, TextInput } from '@nabiq-ui';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GoogleLogo from 'src/assets/onboarding/google.svg';

export const SignUpForm = () => {
  return (
    <Stack gap={36}>
      <Stack gap={24}>
        <Stack gap={32}>
          <p className='text-gray-950 text-2xl font-semibold'>Create your Nabiq account</p>
          <Button
            variant='secondary-black'
            leadingIcon={<Image src={GoogleLogo} alt='' />}
            fullWidth
          >
            Sign up with Google
          </Button>
        </Stack>
        <div className='flex items-center gap-4'>
          <div className='h-[1px] flex-1 bg-gray-300' />
          <p className='text-gray-700 text-sm font-normal'>Or, sign up with email</p>
          <div className='h-[1px] flex-1 bg-gray-300' />
        </div>
      </Stack>
      <Stack gap={72}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='space-y-5'
        >
          <TextInput label='Full Name' placeholder='e.g John Doe' />
          <TextInput label='Email' placeholder='e.g johndoe@gmail.com' />
          <TextInput
            label='Password'
            placeholder='Set password'
            description='Password must contain at least 8 characters.'
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className='flex flex-col gap-8'
        >
          <Button fullWidth>Sign up</Button>
          <p className='text-gray-700 text-sm font-normal text-center'>
            Already have an account?{' '}
            <Link className='text-primary-600' to='/login'>
              Sign in
            </Link>
          </p>
        </motion.div>
      </Stack>
    </Stack>
  );
};
