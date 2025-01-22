import { FiChevronLeft } from '@nabiq-icons';
import { Button, Group, Stack, TextArea } from '@nabiq-ui';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'src/store';
import { useAppSelector } from 'src/store/hooks';
import { useUpdateOnboardingStatusMutation } from 'src/store/onboarding/onboardingApi';
import { setOnboardingStep } from 'src/store/onboarding/onboardingSlice';

import { StepCount } from './StepCount';

export const SampleContents = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { resourceId: companyId } = useAppSelector((state: RootState) => state.company);
  const { isMarkedContent } = useAppSelector((state: RootState) => state.onboarding);
  const [updateOnboardingStatus, { isLoading: isUpdatingOnboardingStatus }] =
    useUpdateOnboardingStatusMutation();
  const { prompt } = useAppSelector((state: RootState) => state.onboarding);
  const navigate = useNavigate();

  const handleSkipStep = async () => {
    const res = await updateOnboardingStatus({ companyId, isOnboardingComplete: true }).unwrap();
    const id = toast.loading(`${t('onboarding.taking_to_dashboard')}...`, {
      id: 'skip-step',
    });
    if (res.success) {
      setTimeout(() => {
        navigate('/');
        toast.dismiss(id);
      }, 2000);
    }
  };

  return (
    <Stack gap={64} className='h-full' justify='space-between'>
      <Stack gap={32}>
        <StepCount step={4} />
        <Stack gap={8}>
          <p className='text-2xl font-semibold text-gray-950'>
            {t('onboarding.review_sample_contents')}
          </p>
          <p className='font-normal text-gray-500'>{t('onboarding.content_sequence_ready')}</p>
        </Stack>
      </Stack>
      <Stack className='min-w-[520px]'>
        <TextArea
          value={prompt}
          label={t('onboarding.instructions')}
          placeholder={t('onboarding.engagement_prompt')}
          rows={10}
          disabled
        />
      </Stack>
      {isMarkedContent ? (
        <Button fullWidth onClick={() => handleSkipStep()}>
          {t('onboarding.go_to_dashboard')}
        </Button>
      ) : (
        <Group>
          <Button
            variant='link'
            onClick={() => dispatch(setOnboardingStep('guide_nabiq'))}
            leadingIcon={<FiChevronLeft />}
          >
            {t('onboarding.go_back')}
          </Button>
          <Button
            variant='secondary'
            onClick={() => handleSkipStep()}
            loading={isUpdatingOnboardingStatus}
          >
            {t('onboarding.skip_step')}
          </Button>
        </Group>
      )}
    </Stack>
  );
};
