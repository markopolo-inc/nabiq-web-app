import { FiCreditCardPlus } from '@nabiq-icons';
import { Group } from '@nabiq-ui';
import moment from 'moment-timezone';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'src/store/hooks';
import { getDateDifference } from 'src/utils/date.uitils';

export const TrialDetails = () => {
  const { t } = useTranslation();
  const { payment } = useAppSelector((state) => state.company);

  return (
    <Group gap={16}>
      <Group
        className='rounded-lg border border-gray-200 shadow-xs p-[10px]'
        align='center'
        justify='center'
      >
        <FiCreditCardPlus size={20} color='#364152' />
      </Group>

      <p className='text-sm text-gray-700 font-semibold'>
        {t('billing_page.free_trial_days_left', {
          days: getDateDifference(payment?.subscriptionEndDate, moment().toISOString()),
        })}
      </p>
    </Group>
  );
};
