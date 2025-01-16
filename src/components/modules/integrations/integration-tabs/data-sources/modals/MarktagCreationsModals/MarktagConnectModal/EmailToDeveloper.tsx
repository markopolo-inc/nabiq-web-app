import { FiMail01 } from '@nabiq-icons';
import { Button, Group, Stack, Text, TextArea, TextInput, useGetColors } from '@nabiq-ui';
import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { MarkTagContext, MarktagContextType } from 'src/context/MarkTagContext';
import { useAppSelector } from 'src/store/hooks';
import { useSendEmailInstructionMutation } from 'src/store/marktag/analyticsMarktagApi';

const EmailToDeveloper = ({ setOpened }) => {
  const { t } = useTranslation();
  const { gray600, gray900, primary500, primary700 } = useGetColors();
  const { setStep } = useContext<MarktagContextType>(MarkTagContext);
  const { userName } = useAppSelector((state) => state.user);
  const [recipientEmail, setRecipientEmail] = useState<string>('');
  const [sendEmailInstruction, { isLoading, isSuccess }] = useSendEmailInstructionMutation();

  const handleSendInstructions = () => {
    if (!recipientEmail) {
      toast(t('home_page.valid_email_required'), {
        icon: '⚠️',
      });
      return;
    }

    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/i.test(recipientEmail)) {
      sendEmailInstruction({
        email: recipientEmail,
        username: userName,
      });
    } else {
      toast.error(t('home_page.invalid_email'), { id: 'invalid-email' });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setOpened(false);
    }
  }, [isSuccess, setOpened]);

  return (
    <>
      <div style={{ width: '100%' }}>
        <Group gap={8} style={{ paddingBottom: 20 }}>
          <FiMail01 color={primary500} />
          <Text size='16px' weight={600} color={primary700}>
            {t('home_page.email_to_developer')}
          </Text>
        </Group>
      </div>

      <Stack gap={32}>
        <Stack gap={24}>
          <Text color={gray900} size='18px' weight={600}>
            {t('home_page.email_details')}
          </Text>

          <TextInput
            label={t('home_page.to')}
            placeholder={t('home_page.add_recipient_email')}
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
          />

          <TextArea
            label={t('home_page.draft_message')}
            placeholder={t('home_page.write_message')}
            autosize
            value={t('home_page.marktag_setup_instructions')}
          />

          <Stack gap={12} mt={8}>
            <Text color={gray900} size='18px' weight={600}>
              {t('home_page.email_setup_instructions')}
            </Text>
            <Stack gap={12}>
              <Text color={gray600} size='14px' className='leading-5'>
                {t('home_page.marktag_event_collection')}
              </Text>
              <Text color={gray600} size='14px' className='leading-5'>
                {t('home_page.complete_marktag_setup')}
              </Text>
              <Text color={gray600} size='14px' className='leading-5'>
                {t('home_page.send_setup_instructions')}
              </Text>
            </Stack>
          </Stack>
        </Stack>

        <Stack align='end'>
          <Group gap={12}>
            <Button variant='secondary' onClick={() => setStep('choose')}>
              {t('campaign_details.back')}
            </Button>
            <Button
              style={{ marginTop: '16px' }}
              loading={isLoading}
              onClick={handleSendInstructions}
            >
              {t('campaign_details.send_instructions_to_developer')}
            </Button>
          </Group>
        </Stack>
      </Stack>
    </>
  );
};

export default EmailToDeveloper;
