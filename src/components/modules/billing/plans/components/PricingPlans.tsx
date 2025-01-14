import { Checkbox, Group, Stack } from '@nabiq-ui';
import { pricingPlans } from 'src/lib/billing';

export const PricingPlans = () => {
  return (
    <Stack>
      <Group>
        {pricingPlans.map((plan) => (
          <div key={plan.id} className='border border-gray-200 rounded-lg p-6 shadow-sm bg-white'>
            <Group>
              <p className='text-[36px] font-semibold text-gray-900'>{plan.name}</p>
              <Checkbox variant='radio' />
            </Group>
            <p className='text-sm text-gray-600 font-normal break-words'>{plan.description}</p>
          </div>
        ))}
      </Group>
    </Stack>
  );
};
