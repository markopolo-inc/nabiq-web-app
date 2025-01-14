import { FiPlus } from '@nabiq-icons';
import { Button, Checkbox, GatewayLogo, Group, Stack } from '@nabiq-ui';
import { useState } from 'react';
import { pricingPlans } from 'src/lib/billing';

import { PriceSummary, WhatsAppAddOnModal } from './pricing-plans';

export const PricingPlans = () => {
  const [showWhatsAppAddOnModal, setShowWhatsAppAddOnModal] = useState(false);
  return (
    <Stack>
      <WhatsAppAddOnModal
        showModal={showWhatsAppAddOnModal}
        setShowModal={setShowWhatsAppAddOnModal}
      />
      <div className='grid grid-cols-3 gap-6'>
        {pricingPlans.map((plan) => (
          <Stack
            key={plan.id}
            className='border border-gray-200 rounded-lg p-6 shadow-sm bg-white'
            gap={48}
          >
            <Stack gap={24}>
              <Stack gap={16}>
                <Group justify='space-between'>
                  <p className='text-[36px] font-semibold text-gray-900'>{plan.name}</p>
                  <Checkbox variant='radio' />
                </Group>
                <p className='text-sm text-gray-600 font-normal !whitespace-pre-wrap'>
                  {plan.description}
                </p>
              </Stack>
              <Stack gap={12}>
                <p className='text-sm text-gray-600'>You will pay</p>
                <Group gap={8}>
                  <p className='text-[24px] font-semibold text-gray-900'>{plan.price}</p>
                  <p className='text-sm text-gray-600'>{plan.range}</p>
                </Group>
              </Stack>
              <p className='text-sm text-gray-600 font-semibold'>{plan.userLimit}</p>
            </Stack>
            {plan.features.whatsapp.unlimited ? (
              <Group>
                <p className='text-sm text-gray-600'>Unlimited WhatsApp usage</p>
                <GatewayLogo app='whatsapp' width={20} />
              </Group>
            ) : (
              <Button
                variant='secondary'
                trailingIcon={<GatewayLogo app='whatsapp' width={20} />}
                leadingIcon={<FiPlus size={20} />}
                onClick={() => setShowWhatsAppAddOnModal(true)}
              >
                WhatsApp add-on
              </Button>
            )}
          </Stack>
        ))}
        <PriceSummary />
      </div>
    </Stack>
  );
};
