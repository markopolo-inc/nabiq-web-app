import { useDebouncedCallback } from '@mantine/hooks';
import { Calendar, FiChevronRight, FiStar04 } from '@nabiq-icons';
import {
  Badge,
  Breadcrumbs,
  Button,
  GatewayLogo,
  Group,
  Image,
  Pagination,
  Select,
  Stack,
  TextInput,
  useGetColors,
} from '@nabiq-ui';
import cn from 'classnames';
import { capitalize } from 'lodash';
import moment from 'moment-timezone';
import { Fragment, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Xarrow, { Xwrapper, useXarrow } from 'react-xarrows';
import LoaderGif from 'src/assets/loader/loading.gif';
import {
  useGetAudienceBreakdownQuery,
  useGetAudienceForCampaignQuery,
} from 'src/store/monitoring/monitoring.api';
import { formatMetricUnit } from 'src/utils/string.utils';

import ContentDrawer from './components/ContentDrawer';

const PAGE_SIZE = 10;

export const CampaignDetails = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { gray400 } = useGetColors();
  const updateXarrow = useXarrow();
  const [_arrows, setArrows] = useState([]);
  const [subArrows, setSubArrows] = useState([{ start: 'breakdownElem0', end: 'breakdownElem1' }]);

  const addArrow = (start, end) => {
    setArrows([{ start, end }]);
  };

  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const { campaignId } = useParams();
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const [showDrawer, setShowDrawer] = useState(false);
  // const [timeRange, setTimeRange] = useState<'today' | 'last_week' | 'last_month'>('last_week');
  const [userId, setUserId] = useState<string>(null);
  const [selectedEmail, setSelectedEmail] = useState<string>(null);
  const [selectedContent, setSelectedContent] = useState<any>(null);
  const [page, setPage] = useState<number>(1);
  const [selectedAudienceIdx, setSelectedAudienceIdx] = useState<number>(null);
  const [filter, setFilter] = useState({
    search: '',
    dateRange: 'last_week',
  });
  const {
    data: audienceData,
    isLoading: isLoadingAudience,
    isFetching: isFetchingAudience,
  } = useGetAudienceForCampaignQuery({
    campaignId,
    page,
    limit: PAGE_SIZE,
    filter: Object.keys(filter).reduce((acc, key) => {
      if (filter[key]) {
        acc[key] = filter[key];
      }
      return acc;
    }, {}),
  });
  const {
    data: audienceBreakdownData,
    isFetching,
    isLoading,
  } = useGetAudienceBreakdownQuery({
    userId,
    campaignId,
  });

  const isLoadingAudienceData = isLoadingAudience || isFetchingAudience;
  const isLoadingBreakdown = isLoadingAudienceData || isLoading || isFetching;

  const audience = audienceData?.data?.audience || [];
  const totalAudience = audienceData?.data?.total ?? 0;
  const totalPages = Math.ceil(totalAudience / PAGE_SIZE);

  const breakdown = audienceBreakdownData?.data || [];
  const isNoData = !!breakdown?.[0]?.noData;
  const [search, setSearch] = useState('');

  const handleSearch = useDebouncedCallback(
    (value) => setFilter({ ...filter, search: value }),
    500,
  );

  useEffect(() => {
    handleSearch(search);
  }, [search]);

  useEffect(() => {
    if (div2Ref.current !== null && selectedAudienceIdx !== null) {
      addArrow(`listElem${selectedAudienceIdx}`, 'breakdownElem0');
    }
  }, [audience, selectedAudienceIdx, div2Ref]);

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
          <p className='text-gray-900 text-[20px] font-semibold'>{name}</p>
          <p className='text-gray-600 text-base font-normal'>
            {t('campaign_details.list_description')}
          </p>
        </Stack>
        <Button size='md' variant='secondary' onClick={() => navigate(-1)}>
          {t('campaign_details.go_back')}
        </Button>
      </Group>
      <Group justify='space-between' className='mt-[64px]'>
        <Group>
          <Select
            leftSection={<Calendar size={18} color='#697586' />}
            value={filter.dateRange}
            onChange={(value) =>
              setFilter({ ...filter, dateRange: value as 'today' | 'last_week' | 'last_month' })
            }
            data={[
              { label: t('campaign_details.today'), value: 'today' },
              {
                label: t('campaign_details.last_week'),
                value: 'last_week',
              },
              {
                label: t('campaign_details.last_month'),
                value: 'last_month',
              },
            ]}
          />
        </Group>
        <TextInput
          placeholder={t('campaign_details.search_audience')}
          className='w-[264px]'
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </Group>
      <Xwrapper>
        <div className='grid grid-cols-12 gap-20 relative mt-8'>
          <Stack className='col-span-6'>
            <p className='text-sm font-normal text-gray-600'>{t('campaign_details.audience')}</p>
            {isLoadingAudienceData && (
              <Image src={LoaderGif} alt='Loading...' className='w-56 mx-auto' />
            )}
            {!isLoadingAudienceData && audience?.length > 0 && (
              <Stack className='bg-gray-50 rounded-xl p-2 border border-gray-200'>
                <Stack className='max-h-fit w-full' gap={8} onScroll={updateXarrow}>
                  {audience.map((user, idx) => (
                    <Stack
                      className={cn(
                        'rounded-lg border border-gray-200 bg-white shadow-sm p-4 cursor-pointer',
                        idx === selectedAudienceIdx ? 'border-[2px] border-primary-600' : '',
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
                      <Group justify='space-between'>
                        <p className='text-gray-900 font-semibold'>
                          {t('integrations.salla_id', { salla_id: user.id })}
                        </p>
                        {user.isEnhanced && (
                          <Badge color='success'>
                            {t('campaign_details.nabiq_enhanced')} <FiStar04 />
                          </Badge>
                        )}
                      </Group>

                      {user.description && (
                        <p className='text-gray-600 font-normal text-xs'>{user.description}</p>
                      )}
                      <Group>
                        {user.email && <Badge color='gray'>{user.email}</Badge>}
                        {user.phone && <Badge color='gray'>{user.phone}</Badge>}
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
            )}
            {!isLoadingAudienceData && audience?.length === 0 && (
              <p className='text-gray-600 font-normal text-sm'>
                {t('campaign_details.no_audience_found')}
              </p>
            )}
          </Stack>

          <Stack className='col-span-6'>
            <p className='text-sm font-normal text-gray-600'>{t('campaign_details.breakdown')}</p>
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
                    {isLoadingBreakdown ? (
                      <Image src={LoaderGif} alt='Loading...' className='w-56 mx-auto' />
                    ) : (
                      <Fragment>
                        <Group justify='space-between'>
                          <GatewayLogo app={item?.platform} width={24} />
                          <Badge color='gray'>
                            {t('campaign_details.step')} {item?.step}
                          </Badge>
                        </Group>
                        <Stack gap={0} className='mt-4'>
                          <p className='text-gray-900 font-semibold'>{capitalize(item?.channel)}</p>
                          <p className='text-gray-600 font-normal text-sm'>
                            {t('campaign_details.sent_on', {
                              time: moment(item?.sentOn).format('MMM D, YYYY'),
                            })}{' '}
                            {moment(item?.sentOn).format('h:mm a')}
                          </p>
                        </Stack>

                        {/* <Group className='mt-9 tex-sm text-gray-600' justify='space-between'>
                  <p>Link click?</p>
                  <p>Yes</p>
                </Group> */}
                        <div className='mt-4'>
                          {Object.keys(item?.metrics || {}).map((key, index) => (
                            <Group
                              className='tex-sm text-gray-600'
                              justify='space-between'
                              key={index}
                            >
                              <p>{key}:</p>
                              <p>
                                {formatMetricUnit(
                                  item?.metrics[key]?.value,
                                  item?.metrics[key]?.type,
                                )}
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
                          {t('campaign_details.view')}
                        </Button>
                      </Fragment>
                    )}
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
              <p className='text-gray-600 font-normal text-sm'>
                {t('campaign_details.no_data_available')}
              </p>
            )}
          </Stack>
        </div>
        {/* 
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
        ))} */}
      </Xwrapper>
      {/* <svg className='absolute top-0 left-0 w-full h-full pointer-events-none'>
        <path d={pathData} fill='none' stroke='#3B82F6' strokeWidth='2' />
      </svg> */}
    </Stack>
  );
};
