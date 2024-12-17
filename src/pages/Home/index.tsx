import { Stack } from '@nabiq-ui';
import { HeaderTitle } from 'layouts';
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

const Home = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [showGoalModal, setShowGoalModal] = useState<boolean>(false);
  const [showMarktagModal, setShowMarktagModal] = useState<boolean>(false);

  const [timeRange, _setTimeRange] = useState<
    'last_year' | 'last_month' | 'last_week' | 'last_3_day'
  >('last_year');

  const integrateChannels = false;
  const firstCampaign = false;
  const markTagConnect = false;

  const isOnboardingDone = integrateChannels && firstCampaign && markTagConnect;
  const isOnBoardingMetricsShow = integrateChannels && firstCampaign;

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

      <Stack
        gap={48}
        className='min-h-[calc(100vh+112px)] pt-16 px-6 bg-home-hero bg-no-repeat bg-cover'
      >
        <Header />

        {isOnboardingDone && <QuickActions />}

        {!isOnboardingDone && (
          <OnBoardingItems
            onClickShowGoalModal={() => setShowGoalModal((prevState) => !prevState)}
            onClickShowMarkTagModal={() => setShowMarktagModal((prevState) => !prevState)}
          />
        )}

        {isOnBoardingMetricsShow && (
          <Stack className={`${isOnboardingDone ? 'flex-col-reverse' : 'flex-row'} `} gap={24}>
            <PerformanceTrend isOnboardingDone={isOnboardingDone} timeRange={timeRange} />
            <MetricCards isOnboardingDone={isOnboardingDone} timeRange={timeRange} />
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default Home;
