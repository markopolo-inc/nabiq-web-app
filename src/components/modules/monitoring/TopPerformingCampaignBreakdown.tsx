import { FiChevronRight } from '@nabiq-icons';
import { Badge, Breadcrumbs, Button, Group, Pagination, Stack, useGetColors } from '@nabiq-ui';
import cn from 'classnames';
import { capitalize } from 'lodash';
import moment from 'moment-timezone';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Xarrow, { Xwrapper, useXarrow } from 'react-xarrows';
import GatewayLogo from 'src/components/UI/GatewayLogo';
import {
  useGetAudienceBreakdownQuery,
  useGetAudienceForCampaignQuery,
} from 'src/store/monitoring/monitoring.api';
import { formatMetricUnit } from 'src/utils/string.utils';

import ContentDrawer from './components/ContentDrawer';

const PAGE_SIZE = 10;

export const TopPerformingCampaignBreakdown = () => {
  const navigate = useNavigate();
  const { primary600, gray400 } = useGetColors();
  const updateXarrow = useXarrow();
  const [arrows, setArrows] = useState([]);
  const [subArrows, setSubArrows] = useState([{ start: 'breakdownElem0', end: 'breakdownElem1' }]);

  const addArrow = (start, end) => {
    setArrows([{ start, end }]);
  };

  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const { name, campaignId } = useParams();
  const [showDrawer, setShowDrawer] = useState(false);
  // const [timeRange, setTimeRange] = useState<'today' | 'last_week' | 'last_month'>('last_week');
  const [userId, setUserId] = useState<string>(null);
  const [selectedEmail, setSelectedEmail] = useState<string>(null);
  const [selectedContent, setSelectedContent] = useState<any>(null);
  const [page, setPage] = useState<number>(1);
  const [selectedAudienceIdx, setSelectedAudienceIdx] = useState<number>(null);
  const { data: audienceData } = useGetAudienceForCampaignQuery({
    campaignId,
    page,
    limit: PAGE_SIZE,
  });
  const { data: audienceBreakdownData } = useGetAudienceBreakdownQuery({
    userId,
    campaignId,
  });

  const audience = audienceData?.data?.audience || [];
  const totalAudience = audienceData?.data?.total ?? 0;
  const totalPages = Math.ceil(totalAudience / PAGE_SIZE);

  const breakdown = audienceBreakdownData?.data || [];
  const isNoData = !!breakdown?.[0]?.noData;

  useEffect(() => {
    if (div2Ref.current !== null && selectedAudienceIdx !== null) {
      addArrow(`listElem${selectedAudienceIdx}`, 'breakdownElem0');
    }
  }, [audience, breakdown, selectedAudienceIdx]);

  useEffect(() => {
    const newSubArrows = breakdown.slice(0, -1).map((_item, idx) => ({
      start: `breakdownElem${idx}`,
      end: `breakdownElem${idx + 1}`,
    }));

    setSubArrows(newSubArrows);
  }, [breakdown]);

  return (
    <Stack>
      <ContentDrawer
        opened={showDrawer}
        onClose={() => {
          setShowDrawer(false);
        }}
        selectedContent={selectedContent}
      />
      <Breadcrumbs />

      <Group justify='space-between'>
        <Stack gap={4}>
          <p className='text-gray-900 text-[20px] font-semibold'>
            {capitalize(name?.split('-').join(' '))} breakdown
          </p>
          <p className='text-gray-600 text-base font-normal'>
            List of audience and individual campaign funnel details.
          </p>
        </Stack>
        <Button size='md' variant='secondary' onClick={() => navigate(-1)}>
          Go back
        </Button>
      </Group>
      {/* <Group justify='space-between' className='mt-[64px]'>
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
      </Group> */}
      <Xwrapper>
        <div className='grid grid-cols-12 gap-20 relative mt-8'>
          <Stack className='col-span-6'>
            <p className='text-sm font-normal text-gray-600'>Audience</p>
            <Stack
              className='rounded-md border border-gray-20 p-1 max-h-fit max-w-[428px]'
              gap={8}
              onScroll={updateXarrow}
            >
              {audience.map((user, idx) => (
                <Stack
                  className={cn(
                    'rounded-md border-[2px] border-gray-200 bg-white shadow-sm p-4 max-w-[418px] cursor-pointer',
                    idx === selectedAudienceIdx ? 'border-primary-600' : '',
                  )}
                  ref={div1Ref}
                  gap={16}
                  key={`listElem${idx}`}
                  onClick={() => {
                    setUserId(user.id);
                    setSelectedAudienceIdx(idx);
                    setSelectedEmail(user.email);
                    // addArrow(`elem${idx}`, 'breakdownElem');
                  }}
                  id={`listElem${idx}`}
                >
                  <p className='text-gray-900 font-semibold'>ID: {user.id}</p>
                  <Group>
                    <Badge color='gray'>{user.email}</Badge>
                    <Badge color='gray'>{user.phone}</Badge>
                  </Group>
                </Stack>
              ))}
            </Stack>
            <Pagination
              total={totalPages}
              onChange={(value) => {
                addArrow('', '');
                setSelectedAudienceIdx(null);
                setPage(value);
                setUserId(null);
              }}
              value={page}
            />
          </Stack>

          <Stack className='col-span-6'>
            <p className='text-sm font-normal text-gray-600'>Breakdown</p>
            {!isNoData ? (
              <Stack gap={36}>
                {breakdown?.map((item, idx) => (
                  <div
                    className={cn(
                      'rounded-md border border-gray-200 bg-white shadow-sm p-6 max-w-[360px]',
                      idx === 0 ? 'border-primary-600 border-[2px]' : '',
                    )}
                    ref={div2Ref}
                    key={`breakdownElem${idx}`}
                    id={`breakdownElem${idx}`}
                  >
                    <Group justify='space-between'>
                      <GatewayLogo app={item?.platform} width={24} />
                      <Badge color='gray'>Step {item?.step}</Badge>
                    </Group>
                    <Stack gap={0} className='mt-4'>
                      <p className='text-gray-900 font-semibold'>{capitalize(item?.channel)}</p>
                      <p className='text-gray-600 font-normal text-sm'>
                        Sent on {moment(item?.sentOn).format('MMM D, YYYY')} at{' '}
                        {moment(item?.sentOn).format('h:mm a')}
                      </p>
                    </Stack>
                    {/* <Group className='mt-9 tex-sm text-gray-600' justify='space-between'>
                  <p>Link click?</p>
                  <p>Yes</p>
                </Group> */}
                    <div className='mt-4'>
                      {Object.keys(item?.metrics || {}).map((key, index) => (
                        <Group className='tex-sm text-gray-600' justify='space-between' key={index}>
                          <p>{key}:</p>
                          <p>
                            {formatMetricUnit(item?.metrics[key]?.value, item?.metrics[key]?.type)}
                          </p>
                        </Group>
                      ))}
                    </div>
                    <Button
                      className='mt-9'
                      trailingIcon={<FiChevronRight size={18} />}
                      onClick={() => {
                        setShowDrawer(true);
                        setSelectedContent({ ...item, email: selectedEmail });
                      }}
                    >
                      View
                    </Button>
                  </div>
                ))}
                {subArrows.map((arrow, index) => (
                  <Xarrow
                    key={index}
                    start={arrow.start}
                    end={arrow.end}
                    strokeWidth={2}
                    path='grid'
                    startAnchor='bottom'
                    endAnchor='top'
                    showTail={true}
                    tailShape='circle'
                    tailColor={gray400}
                    tailSize={3}
                    showHead={false}
                    lineColor={gray400}
                  />
                ))}
              </Stack>
            ) : (
              <p className='text-gray-600 font-normal text-sm'>No data available!</p>
            )}
          </Stack>
        </div>

        {arrows.map((arrow, index) => (
          <Xarrow
            key={index}
            start={arrow.start}
            end={arrow.end}
            strokeWidth={2}
            path='smooth'
            startAnchor='right'
            endAnchor='left'
            showTail={true}
            tailShape='circle'
            tailColor={primary600}
            tailSize={3}
            showHead={false}
            lineColor={primary600}
          />
        ))}
      </Xwrapper>
      {/* <svg className='absolute top-0 left-0 w-full h-full pointer-events-none'>
        <path d={pathData} fill='none' stroke='#3B82F6' strokeWidth='2' />
      </svg> */}
    </Stack>
  );
};
