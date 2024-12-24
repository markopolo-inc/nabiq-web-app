import { FiChevronLeft } from '@nabiq-icons';
import { Button, Group, Stack, TextArea } from '@nabiq-ui';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'src/store';
import { useAppSelector } from 'src/store/hooks';
import { useUpdateOnboardingStatusMutation } from 'src/store/onboarding/onboardingApi';
import { setOnboardingStep } from 'src/store/onboarding/onboardingSlice';

import { StepCount } from './StepCount';

export const SampleContents = () => {
  const dispatch = useDispatch();
  const { resourceId: companyId } = useAppSelector((state: RootState) => state.company);
  const [updateOnboardingStatus, { isLoading: isUpdatingOnboardingStatus }] =
    useUpdateOnboardingStatusMutation();
  const { prompt } = useAppSelector((state: RootState) => state.onboarding);
  const navigate = useNavigate();

  const handleSkipStep = async () => {
    const res = await updateOnboardingStatus({ companyId, isOnboardingComplete: true }).unwrap();
    if (res.success) {
      navigate('/');
    }
  };

  return (
    <Stack gap={64} className='h-full' justify='space-between'>
      <Stack gap={32}>
        <StepCount step={4} />
        <Stack gap={8}>
          <p className='text-2xl font-semibold text-gray-950'>Review sample contents</p>
          <p className='font-normal text-gray-500'>
            We’ve a content sequence ready for you to review.
          </p>
        </Stack>
      </Stack>
      <Stack className='min-w-[520px]'>
        <TextArea
          value={prompt}
          label='Instructions'
          placeholder='Tell us how to engage your leads—mention key products, discounts, or goals.'
          rows={10}
          disabled
        />
      </Stack>
      <Group>
        <Button
          variant='link'
          onClick={() => dispatch(setOnboardingStep('guide_nabiq'))}
          leadingIcon={<FiChevronLeft />}
        >
          Go back
        </Button>
        <Button
          variant='secondary'
          onClick={() => handleSkipStep()}
          loading={isUpdatingOnboardingStatus}
        >
          Skip this step
        </Button>
      </Group>
    </Stack>
  );
};
