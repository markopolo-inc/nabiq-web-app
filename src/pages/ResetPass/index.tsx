import { Stack } from '@nabiq-ui';
import { HeaderTitle } from 'layouts';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckEmail, PassResetSuccess, ResetPass } from 'src/components/modules/reset-pass';
import { ResetPasswordStep } from 'src/interfaces/ResetPassStep.ts';

const ResetPassPage = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState<ResetPasswordStep>(ResetPasswordStep.EMAIL_INPUT);
  const [email, setEmail] = useState('');

  return (
    <>
      <HeaderTitle>{t('page_title.reset_pass')}</HeaderTitle>
      <div className='min-h-screen pt-14 w-full flex items-center justify-center'>
        <Stack className='max-w-[468px] w-full mx-auto' align='center' gap={24}>
          {step === ResetPasswordStep.EMAIL_INPUT && (
            <ResetPass setEmail={setEmail} onSetup={() => setStep(ResetPasswordStep.RESEND_CODE)} />
          )}
          {step === ResetPasswordStep.RESEND_CODE && (
            <CheckEmail email={email} onSetup={() => setStep(ResetPasswordStep.SUCCESS)} />
          )}
          {step === ResetPasswordStep.SUCCESS && <PassResetSuccess />}
        </Stack>
      </div>
    </>
  );
};

export default ResetPassPage;
