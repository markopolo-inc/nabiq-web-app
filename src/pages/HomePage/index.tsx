import { Stack } from '@nabiq-ui';
import { HeaderTitle, PageLayout } from 'layouts';
import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import BackgroundImage from 'src/assets/bg.png';
import { CampaignGoalModal } from 'src/components/modules/campaigns';
import {
  Header,
  MetricCards,
  OfferBanner,
  OnBoardingItems,
  PerformanceTrend,
  QuickActions,
} from 'src/components/modules/home';
import { MarktagCreationsModals } from 'src/components/modules/integrations/integration-tabs/data-sources';
import { QUERY_PARAMS } from 'src/lib/integration/ecommerce';
import { useGetCampaignConfigsQuery } from 'src/store/campaign/campaignApi.ts';
import { useAppSelector } from 'src/store/hooks.ts';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const {
    resourceId: brandId,
    emailIntegrations,
    smsIntegrations,
    markTag,
    datasourceIntegrations,
  } = useAppSelector((state) => state.brand);

  const [showGoalModal, setShowGoalModal] = useState<boolean>(false);
  const [showMarktagModal, setShowMarktagModal] = useState<boolean>(false);

  const [timeRange, _setTimeRange] = useState<
    'last_year' | 'last_month' | 'last_week' | 'last_3_day'
  >('last_year');

  const { data: campaignList, isLoading: isLoadingCampaignList } =
    useGetCampaignConfigsQuery(brandId);

  const isIntegrationChannelDone = !(isEmpty(emailIntegrations) && isEmpty(smsIntegrations));
  const isFirstCampaignDone = !!campaignList?.data?.length;
  const isMarkTagDone = Boolean(markTag?.resourceId);
  const isDataSourceConnected = !isEmpty(datasourceIntegrations);

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

  const currentDate = new Date();
  const offerStartDate = new Date('2025-02-13');
  const offerEndDate = new Date('2025-02-20');
  const shouldRenderOfferBanner = currentDate >= offerStartDate && currentDate <= offerEndDate; // offer banner will be visible from February 13th to next 1 week

  return (
    <>
      <HeaderTitle>{t('page_title.marketing_copilot_title')}</HeaderTitle>
      <CampaignGoalModal showModal={showGoalModal} setShowModal={setShowGoalModal} />
      <MarktagCreationsModals openedModal={showMarktagModal} setOpenedModal={setShowMarktagModal} />

      <Stack
        className='min-h-[calc(100vh-56px)] bg-no-repeat bg-100% bg-fixed'
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <PageLayout>
          {shouldRenderOfferBanner && <OfferBanner />}

          <Header />

          {isOnboardingDone && !isLoadingCampaignList && <QuickActions />}

          {!isOnboardingDone && !isLoadingCampaignList && (
            <OnBoardingItems
              isIntegrationChannelDone={isIntegrationChannelDone}
              isFirstCampaignDone={isFirstCampaignDone}
              isMarkTagDone={isMarkTagDone}
              isDataSourceConnected={isDataSourceConnected}
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
