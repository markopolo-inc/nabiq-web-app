import { Breadcrumbs, Button, Stack } from '@nabiq-ui';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CampaignChannels from 'src/components/Features/Campaigns/CampaignChannels';
import CampaignDetailsForm from 'src/components/Features/Campaigns/CampaignDetailsForm';
import CampaignTiming from 'src/components/Features/Campaigns/CampaignTiming';
import Stepper from 'src/components/Features/Campaigns/Stepper';
import PageLoader from 'src/components/UI/PageLoader';
import HeaderTitle from 'src/layouts/HeaderTitle.tsx';
import { useCreateCampaignConfigMutation } from 'src/store/campaign/campaignApi';
import { resetCampaign } from 'src/store/campaign/campaignSlice';
import { useAppSelector } from 'src/store/hooks';

const CreateCampaign = () => {
  const [active, setActive] = useState<number>(0);
  const [createConfig, { isLoading }] = useCreateCampaignConfigMutation();
  const campaignConfig = useAppSelector((state) => state.campaign);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isReadyToConfirm = active === 2;

  const nextStep = async () => {
    if (isReadyToConfirm) {
      const res = await createConfig(campaignConfig).unwrap();
      if (res.success) {
        navigate('/campaigns');
        dispatch(resetCampaign());
      }
    } else {
      setActive((current) => (current < 3 ? current + 1 : current));
    }
  };

  return (
    <>
      <HeaderTitle>Nabiq | Campaign Configuration</HeaderTitle>

      <Stack gap={78}>
        <Stack gap={20}>
          <Breadcrumbs />

          {isLoading && <PageLoader />}

          <div className='flex justify-between'>
            <Stack gap={4}>
              <p className='text-gray-900 font-semibold text-3xl'>Configure your campaign</p>
              <p className='text-gray-600 font-normal text-sm'>
                Provide all the details for configuring your campaign
              </p>
            </Stack>
            <Stack>
              <Button
                variant={isReadyToConfirm ? 'primary' : 'secondary'}
                onClick={nextStep}
                loading={isLoading}
              >
                {isReadyToConfirm ? 'Create' : 'Continue'}
              </Button>
            </Stack>
          </div>
        </Stack>

        <Stack gap={64} w={960} className='mx-auto mb-12'>
          <Stepper active={active} setActive={setActive} />

          <Stack gap={32}>
            {active === 0 ? (
              <CampaignDetailsForm />
            ) : active === 1 ? (
              <CampaignTiming />
            ) : (
              <CampaignChannels />
            )}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default CreateCampaign;
