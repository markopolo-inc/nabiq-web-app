import { Button, OtpInput, Text } from '@nabiq-ui';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VerifyLogoComponent from './VerifyLogoComponent';

const VerifyForm = () => {
  const navigate = useNavigate();
  const [confirmationPin, setConfirmationPin] = useState<string>('');

  return (
    <div className='space-y-12 sm:mx-auto sm:w-full sm:max-w-md'>
      <VerifyLogoComponent email='john.doe@gmail.com' />

      <OtpInput value={confirmationPin} onChange={setConfirmationPin} />

      <div className='space-y-6 flex flex-col justify-center mx-auto sm:max-w-xs'>
        <Button
          type='primary'
          size='md'
          disabled={confirmationPin?.length === 0}
          onClick={() => navigate('/onboarding')}
        >
          Continue
        </Button>
        <div className='flex justify-center items-center gap-1'>
          <Text className='text-md text-gray-600'>
            Having trouble with the code?
          </Text>
          <Button type='link' size='md' className='px-0'>
            Resend
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerifyForm;
