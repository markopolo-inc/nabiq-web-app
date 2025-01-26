import { Badge, Group, Progress, Stack } from '@nabiq-ui';
import { useTranslation } from 'react-i18next';

export const UsageCard = () => {
  const { t } = useTranslation();
  const target = 30;

  return (
    <Stack className='border border-gray-200 shadow-xs p-6 rounded-xl' gap={24}>
      <Stack gap={4}>
        <Group gap={8}>
          <p className='text-lg font-semibold text-gray-900'>{t('billing_page.usage')}</p>
          <Badge color={'success'}>{t('billing_page.target_used', { target })}</Badge>
        </Group>
        <p className='text-sm text-gray-600'>{t('billing_page.users_targeted', { target })}</p>
      </Stack>
      <Progress value={target} color='#2972F5' />
      <p className='text-sm text-gray-600'>{t('billing_page.credits_not_reset')}</p>
    </Stack>
  );
};
