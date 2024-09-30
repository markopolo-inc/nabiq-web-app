import { Calendar } from '@nabiq-icons';
import { Badge, Breadcrumbs, Group, Select, Stack, TextInput } from '@nabiq-ui';
import { capitalize } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import GatewayLogo from 'src/components/UI/GatewayLogo';
import { useGetAudienceForCampaignQuery } from 'src/store/monitoring/monitoring.api';

export const TopPerformingCampaignBreakdown = () => {
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const [_pathData, setPathData] = useState('');
  const { name, campaignId } = useParams();
  const [timeRange, setTimeRange] = useState<'today' | 'last_week' | 'last_month'>('last_week');
  const { data } = useGetAudienceForCampaignQuery(campaignId);

  const audience = data?.data?.audience || [];

  useEffect(() => {
    const updatePathData = () => {
      if (div1Ref.current && div2Ref.current) {
        const div1Rect = div1Ref.current.getBoundingClientRect();
        const div2Rect = div2Ref.current.getBoundingClientRect();

        const x1 = div1Rect.right;
        const y1 = div1Rect.top + div1Rect.height / 2;
        const x2 = div2Rect.left;
        const y2 = div2Rect.top + div2Rect.height / 2;

        const midX = (x1 + x2) / 2;
        const controlY = y1;

        setPathData(`M ${x1} ${y1} Q ${midX} ${controlY}, ${x2} ${y2}`);
      }
    };

    updatePathData();
    window.addEventListener('resize', updatePathData);

    return () => {
      window.removeEventListener('resize', updatePathData);
    };
  }, []);

  return (
    <Stack>
      <Breadcrumbs />
      <Stack gap={4}>
        <p className='text-gray-900 text-3xl font-semibold'>
          {capitalize(name?.split('-').join(' '))} breakdown
        </p>
        <p className='text-gray-600 text-base font-normal'>
          List of audience and individual campaign funnel details.
        </p>
      </Stack>
      <Group justify='space-between' className='mt-[64px]'>
        <Group>
          <Select
            leftSection={<Calendar size={18} color='#697586' />}
            value={timeRange}
            onChange={(value) => setTimeRange(value as 'today' | 'last_week' | 'last_month')}
            data={[
              { label: 'Today', value: 'today' },
              {
                label: 'Last week',
                value: 'last_week',
              },
              {
                label: 'Last month',
                value: 'last_month',
              },
            ]}
          />
        </Group>
        <TextInput placeholder='Search audience' className='w-[264px]' />
      </Group>
      <div className='grid grid-cols-12 gap-20 relative mt-8'>
        <Stack className='col-span-6'>
          <p className='text-sm font-normal text-gray-600'>Audience</p>
          <Stack
            className='rounded-md border border-gray-20 p-1 max-h-[724px] overflow-y-auto max-w-[428px]'
            gap={8}
          >
            {audience.map((user, idx) => (
              <Stack
                className='rounded-md border border-gray-200 bg-white shadow-sm p-4 max-w-[418px]'
                ref={div1Ref}
                gap={16}
                key={idx}
              >
                <p className='text-gray-900 font-semibold'>ID: {user.id}</p>
                <Group>
                  <Badge color='gray'>{user.email}</Badge>
                  <Badge color='gray'>{user.phone}</Badge>
                </Group>
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Stack className='col-span-6'>
          <p className='text-sm font-normal text-gray-600'>Breakdown</p>
          <Stack gap={36}>
            <div
              className='rounded-md border border-gray-200 bg-white shadow-sm p-6 max-w-[360px]'
              ref={div2Ref}
            >
              <Group justify='space-between'>
                <GatewayLogo app='postmark' />
                <Badge color='gray'>Step 1</Badge>
              </Group>
              <Stack gap={0} className='mt-4'>
                <p className='text-gray-900 font-semibold'>E-mail</p>
                <p className='text-gray-600 font-normal text-sm'>Sent on Jul 4, 2024 at 12:13 am</p>
              </Stack>
              <Group className='mt-9 tex-sm text-gray-600' justify='space-between'>
                <p>Link click?</p>
                <p>Yes</p>
              </Group>
              <Group className='mt-9 tex-sm text-gray-600' justify='space-between'>
                <p>Revenue:</p>
                <p>$5.61</p>
              </Group>
            </div>
            <div
              className='rounded-md border border-gray-200 bg-white shadow-sm p-6 max-w-[360px]'
              ref={div2Ref}
            >
              <Group justify='space-between'>
                <GatewayLogo app='postmark' />
                <Badge color='gray'>Step 2</Badge>
              </Group>
              <Stack gap={0} className='mt-4'>
                <p className='text-gray-900 font-semibold'>E-mail</p>
                <p className='text-gray-600 font-normal text-sm'>Sent on Jul 4, 2024 at 12:13 am</p>
              </Stack>
            </div>
            <div
              className='rounded-md border border-gray-200 bg-white shadow-sm p-6 max-w-[360px]'
              ref={div2Ref}
            >
              <Group justify='space-between'>
                <GatewayLogo app='twilio' />
                <Badge color='gray'>Step 3</Badge>
              </Group>
              <Stack gap={0} className='mt-4'>
                <p className='text-gray-900 font-semibold'>E-mail</p>
                <p className='text-gray-600 font-normal text-sm'>Sent on Jul 4, 2024 at 12:13 am</p>
              </Stack>
            </div>
          </Stack>
        </Stack>
      </div>
      {/* <svg className='absolute top-0 left-0 w-full h-full pointer-events-none'>
        <path d={pathData} fill='none' stroke='#3B82F6' strokeWidth='2' />
      </svg> */}
    </Stack>
  );
};
