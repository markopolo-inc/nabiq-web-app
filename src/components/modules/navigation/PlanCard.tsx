import { Button, Progress, Stack } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const PlanCard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const target = 30;
  return (
    <Stack className='px-4 py-5 bg-gray-50 rounded-lg' gap={16}>
      <Stack gap={8}>
        <p className='text-xs text-gray-900 font-semibold'>{t('plan_card.used_mau')}</p>
        <p className='text-xs text-gray-600'>{t('plan_card.target_notification', { target })}</p>
      </Stack>

      <Progress
        styles={{
          root: {
            background: '#E3E8EF',
          },
          section: {
            background: '#2972F5',
          },
        }}
        value={target}
      />
      <Button variant='link' onClick={() => navigate('/billing')}>
        {t('plan_card.plan_upgrade')}
      </Button>
    </Stack>
  );
};
