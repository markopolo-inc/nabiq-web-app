import { Breadcrumbs, Button, PageLoader, Stack, Stepper, StepperStep } from '@nabiq-ui';
import { HeaderTitle } from 'layouts';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  CampaignChannels,
  CampaignDetailsForm,
  CampaignFirstCreationModal,
  CampaignTiming,
} from 'src/components/modules/create-campaign/email-sms-campaign';
import { APIResponseType } from 'src/interfaces/response.interface';
import { emailSmsCampaignSteps } from 'src/lib/campaign.lib';
import {
  useCreateCampaignConfigMutation,
  useEditCampaignConfigMutation,
  useGetCampaignConfigsQuery,
} from 'src/store/campaign/campaignApi';
import { resetCampaign } from 'src/store/campaign/campaignSlice';
import { useAppSelector } from 'src/store/hooks';
import { setFirstCreationModal } from 'src/store/onboarding/onboardingSlice';

export const EmailSmsCampaign = () => {
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
  const isStepOneValid = !!(
    campaignConfig.name &&
    campaignConfig.details &&
    campaignConfig.link &&
    campaignConfig.tone
  );
  const isStepTwoValid = !!(
    campaignConfig.startDate &&
    campaignConfig.endDate &&
    campaignConfig.time &&
    campaignConfig.stepCount &&
    campaignConfig.stepDelay
  );
  const isStepThreeValid = campaignConfig.channels.length;

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

  const handleStepChange = (newStep: number) => {
    if (newStep < active) {
      setActive(newStep);
    } else {
      if (
        (active === 0 && isStepOneValid) ||
        (active === 1 && isStepTwoValid) ||
        (active === 2 && isStepThreeValid)
      ) {
        setActive(newStep);
      }
    }
  };

  return (
    <>
      <HeaderTitle>Nabiq | Campaign Configuration</HeaderTitle>
      <CampaignFirstCreationModal showModal={showModal} setShowModal={setShowModal} />

      <Stack gap={64}>
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
                variant='primary'
                onClick={nextStep}
                disabled={
                  active === 0
                    ? !isStepOneValid
                    : active === 1
                      ? !isStepTwoValid
                      : isReadyToConfirm
                        ? !isStepThreeValid
                        : false
                }
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
          <Stepper
            allowNextStepsSelect={true}
            active={active}
            onStepClick={handleStepChange}
            size='xs'
          >
            {emailSmsCampaignSteps.map((step, index) => (
              <StepperStep key={index} {...step} active={active} index={index} />
            ))}
          </Stepper>

          <Stack gap={32}>
            {(() => {
              switch (active) {
                case 0:
                  return <CampaignDetailsForm />;
                case 1:
                  return <CampaignTiming />;
                default:
                  return <CampaignChannels />;
              }
            })()}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
