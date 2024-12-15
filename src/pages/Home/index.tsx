import { FiGreenCheckCircle } from '@nabiq-icons';
import { Group, Stack } from '@nabiq-ui';
import { HeaderTitle } from 'layouts';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CampaignGoalModal } from 'src/components/modules/campaigns';
import {
  ConnectFirstMarkTagCard,
  CreateFirstCampaignCard,
  Header,
  IntegrateChannels,
  PerformanceTrend,
} from 'src/components/modules/home';
import { MarktagCreationsModals } from 'src/components/modules/integrations/integration-tabs/data-sources';
import { QUERY_PARAMS } from 'src/lib/integration/ecommerce';
import { useGetCampaignConfigsQuery } from 'src/store/campaign/campaignApi.ts';
import { useAppSelector } from 'src/store/hooks.ts';

function isObjectNotEmpty(obj) {
  // Check if the object exists and is not null
  if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
    // Check if the object has any own properties
    return Object.keys(obj).length > 0;
  }
  return false;
}

const Home = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const {
    resourceId: brandId,
    emailIntegrations,
    smsIntegrations,
    markTag,
  } = useAppSelector((state) => state.brand);

  const { data: campaignList } = useGetCampaignConfigsQuery(brandId);

  const [showGoalModal, setShowGoalModal] = useState<boolean>(false);
  const [showMarktagModal, setShowMarktagModal] = useState<boolean>(false);

  const [timeRange, _setTimeRange] = useState<
    'last_year' | 'last_month' | 'last_week' | 'last_3_day'
  >('last_year');

  const isIntegratedChannel =
    !isObjectNotEmpty(emailIntegrations) && !isObjectNotEmpty(smsIntegrations);
  const isFirstCampaignDone = !!campaignList?.data?.length;
  const isConnectedMarkTag = !!markTag?.resourceId;

  const isIntegratedChannelCardActive = !isFirstCampaignDone && !isConnectedMarkTag;
  const isFirstCampaignCardActive = !isIntegratedChannel && !isConnectedMarkTag;
  const isMarkTagCardActive = !isIntegratedChannel && isFirstCampaignDone && !isConnectedMarkTag;

  useEffect(() => {
    const installationId = searchParams.get(QUERY_PARAMS.INSTALLATION_ID);
    const shopifyShop = searchParams.get(QUERY_PARAMS.SHOPIFY_SHOP);
    if (installationId && shopifyShop) {
      navigate(
        `/integrations?selectedTab=ecommerce&${QUERY_PARAMS.INSTALLATION_ID}=${installationId}&${QUERY_PARAMS.SHOPIFY_SHOP}=${shopifyShop}`,
      );
    }
  }, [searchParams]);

  return (
    <>
      <HeaderTitle>Nabiq - Your marketing co-pilot captain</HeaderTitle>
      <CampaignGoalModal showModal={showGoalModal} setShowModal={setShowGoalModal} />
      <MarktagCreationsModals openedModal={showMarktagModal} setOpenedModal={setShowMarktagModal} />

      <Stack gap={24} className='min-h-[calc(100vh-0px)] pt-16 px-6 bg-home-hero'>
        <Header />

        <Stack gap={24} className='flex-row w-full'>
          <Stack gap={16} className='max-w-[372px] w-full'>
            <Group
              gap={16}
              className={`p-[15px] rounded-xl bg-white border ${isIntegratedChannelCardActive ? 'border-primary-600' : 'border-gray-200'}`}
            >
              {isIntegratedChannel ? (
                <div className='text-base font-normal text-gray-950'>1</div>
              ) : (
                <FiGreenCheckCircle color='#fff' />
              )}
              <p className='text-base font-semibold text-gray-950'>Integrate channels</p>
            </Group>

            <Group
              gap={16}
              className={`p-[15px] rounded-xl bg-white border  ${isFirstCampaignCardActive ? 'border-primary-600' : 'border-gray-200'}`}
            >
              {!isFirstCampaignDone ? (
                <div className='text-base font-normal text-gray-950'>2</div>
              ) : (
                <FiGreenCheckCircle color='#fff' />
              )}
              <p className='text-base font-semibold text-gray-950'>Create your first campaign</p>
            </Group>

            <Group
              gap={16}
              className={`p-[15px] rounded-xl bg-white border ${isMarkTagCardActive ? 'border-primary-600' : 'border-gray-200'}`}
            >
              {!isConnectedMarkTag ? (
                <div className='text-base font-normal text-gray-950'>3</div>
              ) : (
                <FiGreenCheckCircle color='#fff' />
              )}
              <p className='text-base font-semibold text-gray-950'>Connect MarkTag</p>
            </Group>
          </Stack>

          <Stack className='relative w-full min-h-[248px]'>
            {isIntegratedChannel && <IntegrateChannels />}
            {!isFirstCampaignDone && (
              <CreateFirstCampaignCard
                onClick={() => setShowGoalModal((prevState) => !prevState)}
              />
            )}

            <ConnectFirstMarkTagCard
              isActive={isConnectedMarkTag}
              onClick={() => setShowMarktagModal((prevState) => !prevState)}
            />
          </Stack>
        </Stack>

        <Stack className='flex-row' gap={24}>
          <PerformanceTrend timeRange={timeRange} />
          {/*<PerformanceTrend timeRange={timeRange} />*/}
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
