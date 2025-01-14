import { FiChevronLeft, FiStar06 } from '@nabiq-icons';
import { Button, Group, Stack, TextArea } from '@nabiq-ui';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'src/store';
import { useAppSelector } from 'src/store/hooks';
import {
  useGenerateSampleContentMutation,
  useUpdateOnboardingStatusMutation,
} from 'src/store/onboarding/onboardingApi';
import {
  setGeneratePrompt,
  setIsMarkedContent,
  setIsSampleContentGenerated,
  setIsSampleContentLoading,
  setOnboardingStep,
  setSampleContents,
} from 'src/store/onboarding/onboardingSlice';

import { StepCount } from './StepCount';

export const GuideNabiq = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { resourceId: brandId } = useAppSelector((state: RootState) => state.brand);
  const { resourceId: companyId } = useAppSelector((state: RootState) => state.company);
  const { isSampleContentLoading } = useAppSelector((state) => state.onboarding);
  const [generateSampleContent, { isLoading: isGeneratingSampleContent }] =
    useGenerateSampleContentMutation();
  const [updateOnboardingStatus, { isLoading: isUpdatingOnboardingStatus }] =
    useUpdateOnboardingStatusMutation();
  const navigate = useNavigate();

  const [prompt, setPrompt] = useState('');

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

  const handleGenerateSampleContent = async () => {
    dispatch(setIsSampleContentLoading(true));
    const res = await generateSampleContent({ brandId, prompt }).unwrap();
    if (res.success) {
      setTimeout(() => {
        dispatch(setGeneratePrompt(prompt));
        dispatch(setSampleContents(res.data));
      }, 2000);
      setTimeout(() => {
        dispatch(setIsSampleContentGenerated(true));
        dispatch(setOnboardingStep('sample_content'));
        dispatch(setIsMarkedContent(false));
        dispatch(setIsSampleContentLoading(false));
      }, 3000);
    } else {
      dispatch(setIsSampleContentLoading(false));
    }
  };

  return (
    <Stack gap={64} className='h-full' justify='space-between'>
      <Stack gap={32}>
        <StepCount step={3} />
        <Stack gap={8}>
          <p className='text-2xl font-semibold text-gray-950'>{t('onboarding.guide_nabiq')}</p>
          <p className='font-normal text-gray-500'>{t('onboarding.sample_campaign')}</p>
        </Stack>
      </Stack>
      <Stack className='min-w-[520px]'>
        <TextArea
          value={prompt}
          label={t('onboarding.instructions')}
          placeholder={t('onboarding.engagement_prompt')}
          rows={10}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </Stack>
      <Button
        disabled={!prompt}
        fullWidth
        onClick={() => handleGenerateSampleContent()}
        loading={isGeneratingSampleContent || isSampleContentLoading}
        trailingIcon={<FiStar06 size={18} />}
      >
        {t('onboarding.generate_sample_content')}
      </Button>
      <Group>
        <Button
          variant='link'
          onClick={() => dispatch(setOnboardingStep('lead_database'))}
          leadingIcon={<FiChevronLeft />}
          disabled={isGeneratingSampleContent || isSampleContentLoading}
        >
          {t('onboarding.go_back')}
        </Button>
        <Button
          variant='secondary'
          onClick={() => handleSkipStep()}
          loading={isUpdatingOnboardingStatus}
          disabled={isGeneratingSampleContent || isSampleContentLoading}
        >
          {t('onboarding.skip_step')}
        </Button>
      </Group>
    </Stack>
  );
};
