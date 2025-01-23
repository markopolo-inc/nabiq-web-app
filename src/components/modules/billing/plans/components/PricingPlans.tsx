import { Checkbox, Group, Stack } from '@nabiq-ui';
import cn from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { usePlanDetails } from 'src/hooks/modules/billing';

import { WhatsAppAddOnModal } from './pricing-plans';

export const PricingPlans = ({
  activeUsers,
  isMonthly,
  planCategory,
  setPlanCategory,
}: {
  activeUsers: number;
  isMonthly: boolean;
  setIsMonthly: (value: boolean) => void;
  planCategory: 'pro' | 'enterprise';
  setPlanCategory: (value: 'pro' | 'enterprise') => void;
}) => {
  const { t } = useTranslation();
  const [showWhatsAppAddOnModal, setShowWhatsAppAddOnModal] = useState(false);
  const { pricingPlans } = usePlanDetails({ activeUsers, isMonthly });
  return (
    <Stack>
      <WhatsAppAddOnModal
        showModal={showWhatsAppAddOnModal}
        setShowModal={setShowWhatsAppAddOnModal}
      />

      <div className='grid grid-cols-2 gap-6'>
        {pricingPlans.map((plan) => (
          <Stack
            key={plan.id}
            className={cn('border border-gray-200 rounded-xl p-6 shadow-sm bg-white', {
              'border-blue-500': planCategory === plan.id,
            })}
            gap={48}
          >
            <Stack gap={24}>
              <Stack gap={16}>
                <Group justify='space-between'>
                  <p className='text-[36px] font-semibold text-gray-900'>{plan.name}</p>
                  <Checkbox
                    variant='radio'
                    checked={planCategory === plan.id}
                    onChange={() => setPlanCategory(plan.id as 'pro' | 'enterprise')}
                  />
                </Group>
                <p className='text-sm text-gray-600 font-normal !whitespace-pre-wrap'>
                  {plan.description}
                </p>
              </Stack>
              <Stack gap={12}>
                <p className='text-sm text-gray-600'>{t('pricing_plan.you_will_pay')}</p>
                <Group gap={8}>
                  <p className='text-[24px] font-semibold text-gray-900'>{plan.price}</p>
                  <p className='text-sm text-gray-600'>{plan.range}</p>
                </Group>
              </Stack>
              <p className='text-sm text-gray-600 font-semibold'>{plan.userLimit}</p>
            </Stack>
          </Stack>
        ))}
      </div>
    </Stack>
  );
};
