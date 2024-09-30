import { Breadcrumbs, Button, Stack } from '@nabiq-ui';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CampaignChannels from 'src/components/Features/Campaigns/CampaignChannels';
import CampaignDetailsForm from 'src/components/Features/Campaigns/CampaignDetailsForm';
import CampaignFirstCreationModal from 'src/components/Features/Campaigns/CampaignFirstCreationModal';
import CampaignTiming from 'src/components/Features/Campaigns/CampaignTiming';
import Stepper from 'src/components/Features/Campaigns/Stepper';
import PageLoader from 'src/components/UI/PageLoader';
import { APIResponseType } from 'src/interfaces/response.interface';
import HeaderTitle from 'src/layouts/HeaderTitle.tsx';
import {
  useCreateCampaignConfigMutation,
  useEditCampaignConfigMutation,
  useGetCampaignConfigsQuery,
} from 'src/store/campaign/campaignApi';
import { resetCampaign } from 'src/store/campaign/campaignSlice';
import { useAppSelector } from 'src/store/hooks';
import { setFirstCreationModal } from 'src/store/onboarding/onboardingSlice';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { resourceId: brandId } = useAppSelector((state) => state.brand);
  const { data: campaignList } = useGetCampaignConfigsQuery(brandId);
  const [createConfig, { isLoading: isCreateConfigLoading }] = useCreateCampaignConfigMutation();
  const [editConfig, { isLoading: isEditConfigLoading }] = useEditCampaignConfigMutation();
  const campaignConfig = useAppSelector((state) => state.campaign);
  const { isFirstCreationModal } = useAppSelector((state) => state.onboarding);
  const [active, setActive] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  const isReadyToConfirm = active === 2;

  const nextStep = async () => {
    if (isReadyToConfirm) {
      let res: APIResponseType;
      if (campaignConfig?.resourceId?.length) {
        res = await editConfig(campaignConfig).unwrap();
      } else {
        res = await createConfig(campaignConfig).unwrap();
      }

      if (res.success) {
        navigate('/campaigns');
        dispatch(resetCampaign());

        if (!isFirstCreationModal && campaignList?.data?.length === 1) {
          setShowModal(true);
          dispatch(setFirstCreationModal(true));
        }
      }
    } else {
      setActive((current) => (current < 3 ? current + 1 : current));
    }
  };

  return (
    <>
      <HeaderTitle>Nabiq | Campaign Configuration</HeaderTitle>
      <CampaignFirstCreationModal showModal={showModal} setShowModal={setShowModal} />

      <Stack gap={78}>
        <Stack gap={20}>
          <Breadcrumbs />

          {(isCreateConfigLoading || isEditConfigLoading) && <PageLoader />}

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
                loading={isCreateConfigLoading || isEditConfigLoading}
              >
                {isReadyToConfirm
                  ? campaignConfig?.resourceId?.length
                    ? 'Update'
                    : 'Create'
                  : 'Continue'}
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
