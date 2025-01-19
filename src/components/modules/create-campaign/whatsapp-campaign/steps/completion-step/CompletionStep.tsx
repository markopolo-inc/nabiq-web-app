import { FiCheck } from '@nabiq-icons';
import { Stack } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';

export const CompletionStep = () => {
  const { t } = useTranslation();
  return (
    <Stack className='w-full' align='center'>
      <Stack gap={64} maw={744} className='p-8 border border-gray-200 rounded-xl shadow-lg'>
        <Stack gap={12}>
          <div className='h-8 w-8 rounded-full bg-success-600 flex items-center justify-center'>
            <FiCheck size={18} color='white' />
          </div>
          <p className='text-gray-900 text-lg font-semibold'>
            {t('create_campaign.captain_nabiq_sailing')}
          </p>
          <p className='text-gray-600 text-sm font-normal'>
            {t('create_campaign.captain_nabiq_working')}
          </p>
        </Stack>
      </Stack>
    </Stack>
  );
};
