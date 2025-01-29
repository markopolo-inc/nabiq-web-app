import { FiMail01 } from '@nabiq-icons';
import { Button, Stack } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';

type CheckEmailProps = {
  onSetup: () => void;
};

export const CheckEmail = ({ onSetup }: CheckEmailProps) => {
  const { t } = useTranslation();
  const resendEmail = () => {
    onSetup();
  };
  return (
    <>
      <div className='p-3.5 bg-gray-100 rounded-full'>
        <FiMail01 size={28} color='#697586' />
      </div>

      <Stack align='center' gap={4}>
        <p className='text-gray-900 text-2xl font-semibold'>
          {t('reset_pass.please_check_your_email')}
        </p>
        <p className='text-gray-500 text-xl leading-[30px] font-normal text-center'>
          {t('reset_pass.reset_password_instructions', { email: 'example@gmai.com' })}
        </p>
      </Stack>

      <Button type='submit' fullWidth onClick={resendEmail}>
        {t('reset_pass.resend_email')}
      </Button>
    </>
  );
};
