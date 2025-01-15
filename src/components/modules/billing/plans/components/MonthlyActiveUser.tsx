import { Slider } from '@mantine/core';
import { Group, Stack } from '@nabiq-ui';
import { usePlanDetails } from 'src/hooks/modules/billing';
import { monthlyActiveUser } from 'src/lib/billing';

export const MonthlyActiveUser = ({
  activeUsers,
  setActiveUsers,
  isMonthly,
}: {
  activeUsers: number;
  setActiveUsers: (value: number) => void;
  isMonthly: boolean;
}) => {
  const { activeUsersInText } = usePlanDetails({ activeUsers, isMonthly });
  return (
    <Stack className='p-6 shadow-sm bg-white border rounded-xl border-gray-200' gap={48}>
      <Stack gap={12}>
        <p className='text-gray-900 text-2xl font-semibold'>
          How many monthly active users do you have?
        </p>
        <p className='text-sm text-gray-600 font-normal'>
          With pro plan, you can have up to &lt;500K monthly active users.
        </p>
      </Stack>
      <Stack>
        <Stack className='border-b border-gray-300 pb-[48px]'>
          <Slider
            thumbSize={16}
            restrictToMarks
            styles={{
              bar: {
                color: '#2972f5',
                backgroundColor: '#2972f5',
              },
              label: {
                display: 'none',
              },
            }}
            value={activeUsers}
            onChange={setActiveUsers}
            max={500000}
            marks={monthlyActiveUser}
          />
        </Stack>

        <Group gap={48} className='grid grid-cols-[1fr_auto]'>
          <div className='w-[150px]'>
            <p className='text-2xl font-semibold text-gray-900'>{activeUsersInText}</p>
            <p className='text-sm text-gray-600 font-normal'>Monthly active users</p>
          </div>
          <Group>
            <p className='text-sm text-gray-600 font-normal'>
              The Pro plan starts with {activeUsersInText} MAU specific user plan, which can be used
              for emails, SMS, push notifications, WhatsApp messages, or other interactions.
            </p>
          </Group>
        </Group>
      </Stack>
    </Stack>
  );
};
