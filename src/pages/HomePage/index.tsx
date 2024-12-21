import { Stack } from '@nabiq-ui';
import { HeaderTitle, PageLayout } from 'layouts';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CampaignGoalModal } from 'src/components/modules/campaigns';
import {
  Header,
  MetricCards,
  OnBoardingItems,
  PerformanceTrend,
  QuickActions,
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

  const [showGoalModal, setShowGoalModal] = useState<boolean>(false);
  const [showMarktagModal, setShowMarktagModal] = useState<boolean>(false);

  const [timeRange, _setTimeRange] = useState<
    'last_year' | 'last_month' | 'last_week' | 'last_3_day'
  >('last_year');

  const { data: campaignList } = useGetCampaignConfigsQuery(brandId);

  const isIntegrationChannelDone = !(
    !isObjectNotEmpty(emailIntegrations) && !isObjectNotEmpty(smsIntegrations)
  );
  const isFirstCampaignDone = !!campaignList?.data?.length;
  const isMarkTagDone = Boolean(markTag?.resourceId);

  const isOnboardingDone = isIntegrationChannelDone && isFirstCampaignDone && isMarkTagDone;
  const isOnBoardingMetricsShow = isIntegrationChannelDone && isFirstCampaignDone;

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

      <Stack className='min-h-[calc(100vh-56px)] bg-home-hero bg-no-repeat bg-100% bg-fixed'>
        <PageLayout>
          <Header />

          {isOnboardingDone && <QuickActions />}

          {!isOnboardingDone && (
            <OnBoardingItems
              isIntegrationChannelDone={isIntegrationChannelDone}
              isFirstCampaignDone={isFirstCampaignDone}
              isMarkTagDone={isMarkTagDone}
              onClickShowGoalModal={() => setShowGoalModal((prevState) => !prevState)}
              onClickShowMarkTagModal={() => setShowMarktagModal((prevState) => !prevState)}
            />
          )}

          <div className='mt-12'>
            {isOnBoardingMetricsShow && (
              <Stack
                className={`${isOnboardingDone ? 'flex-col-reverse gap-6' : 'flex-row gap-6'} `}
              >
                <PerformanceTrend isOnboardingDone={isOnboardingDone} timeRange={timeRange} />
                <MetricCards isOnboardingDone={isOnboardingDone} timeRange={timeRange} />
              </Stack>
            )}
          </div>
        </PageLayout>
      </Stack>
    </>
  );
};

export default Home;
