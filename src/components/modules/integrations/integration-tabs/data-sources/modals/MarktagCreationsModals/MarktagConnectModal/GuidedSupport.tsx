import { Command } from '@nabiq-icons';
import { Button, Group, Stack, useGetColors } from '@nabiq-ui';
import posthog from 'posthog-js';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { MarkTagContext, MarktagContextType } from 'src/context/MarkTagContext';
import { usePosthogParams } from 'src/hooks/modules/usePosthogParams';

const GuidedSupport = () => {
  const { t } = useTranslation();
  const { primary500 } = useGetColors();
  const { setStep } = useContext<MarktagContextType>(MarkTagContext);
  const posthogParams = usePosthogParams();

  return (
    <Stack gap={64} align=''>
      <Stack align='flex-start' className='mr-auto' gap={8}>
        <div className='flex gap-4'>
          <div className='flex items-center justify-center w-8 h-8 border border-success-50 rounded-full bg-gray-100'>
            <Command size={12} color={primary500} fill={primary500} />
          </div>

          <Stack gap={8} className='pr-3'>
            <p className='text-gray-900 text-[24px] font-semibold'>
              {t('home_page.guided_implementation')}
            </p>
            <p className='text-gray-600 text-base font-normal'>{t('home_page.setup_marktag')}</p>
          </Stack>
        </div>
      </Stack>
      <Stack align='end'>
        <Group gap={12}>
          <Button variant='secondary' onClick={() => setStep('choose')}>
            {t('campaign_details.go_back')}
          </Button>
          <Button
            variant='primary'
            onClick={() => {
              posthog?.capture('CTA_Clicked', {
                button_text: t('home_page.book_call'),
                ...posthogParams,
              });
              setStep('calendly');
            }}
          >
            {t('home_page.book_call')}
          </Button>
        </Group>
      </Stack>
    </Stack>
  );
};

export default GuidedSupport;
