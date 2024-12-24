import { FiChevronLeft, FiStar06 } from '@nabiq-icons';
import { Button, Group, Stack, TextArea } from '@nabiq-ui';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'src/store';
import {
  useGenerateSampleContentMutation,
  useUpdateOnboardingStatusMutation,
} from 'src/store/onboarding/onboardingApi';
import {
  setGeneratePrompt,
  setIsSampleContentGenerated,
  setOnboardingStep,
  setSampleContents,
} from 'src/store/onboarding/onboardingSlice';

import { StepCount } from './StepCount';

export const GuideNabiq = () => {
  const dispatch = useDispatch();
  const { resourceId: brandId } = useSelector((state: RootState) => state.brand);
  const { resourceId: companyId } = useSelector((state: RootState) => state.company);
  const [generateSampleContent, { isLoading: isGeneratingSampleContent }] =
    useGenerateSampleContentMutation();
  const [updateOnboardingStatus, { isLoading: isUpdatingOnboardingStatus }] =
    useUpdateOnboardingStatusMutation();
  const navigate = useNavigate();

  const [prompt, setPrompt] = useState('');

  const handleSkipStep = async () => {
    const res = await updateOnboardingStatus({ companyId, isOnboardingComplete: true }).unwrap();
    if (res.success) {
      navigate('/');
    }
  };

  const handleGenerateSampleContent = async () => {
    const res = await generateSampleContent({ brandId, prompt }).unwrap();
    if (res.success) {
      dispatch(setIsSampleContentGenerated(true));
      dispatch(setGeneratePrompt(prompt));
      dispatch(setOnboardingStep('sample_content'));
      dispatch(setSampleContents(res.data));
    }
  };

  return (
    <Stack gap={64} className='h-full' justify='space-between'>
      <Stack gap={32}>
        <StepCount step={3} />
        <Stack gap={8}>
          <p className='text-2xl font-semibold text-gray-950'>Guide Nabiq</p>
          <p className='font-normal text-gray-500'>
            We’re ready to create a sample campaign! Share your ideas to help us tailor it to your
            needs.
          </p>
        </Stack>
      </Stack>
      <Stack className='min-w-[520px]'>
        <TextArea
          value={prompt}
          label='Instructions'
          placeholder='Tell us how to engage your leads—mention key products, discounts, or goals.'
          rows={10}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </Stack>
      <Button
        disabled={!prompt}
        fullWidth
        onClick={() => handleGenerateSampleContent()}
        loading={isGeneratingSampleContent}
        trailingIcon={<FiStar06 size={18} />}
      >
        Generate sample content
      </Button>
      <Group>
        <Button
          variant='link'
          onClick={() => dispatch(setOnboardingStep('lead_database'))}
          leadingIcon={<FiChevronLeft />}
          disabled={isGeneratingSampleContent}
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
