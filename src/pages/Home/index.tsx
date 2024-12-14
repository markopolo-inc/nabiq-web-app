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
} from 'src/components/modules/home';
import { MarktagCreationsModals } from 'src/components/modules/integrations/integration-tabs/data-sources';
import { QUERY_PARAMS } from 'src/lib/integration/ecommerce';

type HeaderType = { id: number; text: string; isDone: boolean };

const headers: HeaderType[] = [
  { id: 1, text: 'Integrate channels', isDone: true },
  { id: 2, text: 'Create your first campaign', isDone: false },
  { id: 3, text: 'Connect MarkTag', isDone: false },
];

const Home = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [showGoalModal, setShowGoalModal] = useState<boolean>(false);
  const [showMarktagModal, setShowMarktagModal] = useState<boolean>(false);

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

      <Stack gap={64} align='center' className='bg-primary-50 py-16'>
        <Header />

        <Stack gap={24} className='flex-row w-full'>
          <Stack gap={16} className='max-w-[372px] w-full'>
            {headers.map((header) => (
              <Group
                key={header.id}
                gap={16}
                className={`p-[15px] rounded-xl bg-white border ${!header.isDone ? 'border-primary-600' : 'border-gray-200'}`}
              >
                {!header.isDone ? (
                  <div className='text-base font-normal text-gray-950'>{header.id}</div>
                ) : (
                  <FiGreenCheckCircle color='#fff' />
                )}
                <p className='text-base font-semibold text-gray-950'>{header.text}</p>
              </Group>
            ))}
          </Stack>

          <Stack className='relative w-full min-h-[274px]'>
            <IntegrateChannels />
            <CreateFirstCampaignCard onClick={() => setShowGoalModal((prevState) => !prevState)} />
            <ConnectFirstMarkTagCard
              onClick={() => setShowMarktagModal((prevState) => !prevState)}
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
