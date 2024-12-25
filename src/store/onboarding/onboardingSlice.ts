import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type TOnboardingStep =
  | 'company_creation'
  | 'lead_database'
  | 'guide_nabiq'
  | 'sample_content';
interface OnboardingState {
  user: any;
  isFirstCreationModal: boolean;
  step: TOnboardingStep;
  prompt: string;
  isSampleContentGenerated: boolean;
  sampleContents: Array<{
    id: string;
    content: string;
    subject: string;
    status: string;
    channel: 'email' | 'sms';
  }>;
  isMarkedContent: boolean;
}

const initialState: OnboardingState = {
  user: undefined,
  isFirstCreationModal: false,
  step: 'company_creation',
  prompt: '',
  isSampleContentGenerated: false,
  sampleContents: [],
  isMarkedContent: false,
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setFirstCreationModal: (state, action: PayloadAction<boolean>) => {
      state.isFirstCreationModal = action.payload;
    },
    setOnboardingStep: (state, action: PayloadAction<TOnboardingStep>) => {
      state.step = action.payload;
    },
    setGeneratePrompt: (state, action: PayloadAction<string>) => {
      state.prompt = action.payload;
    },
    setIsSampleContentGenerated: (state, action: PayloadAction<boolean>) => {
      state.isSampleContentGenerated = action.payload;
    },
    setSampleContents: (
      state,
      action: PayloadAction<
        Array<{
          id: string;
          content: string;
          subject: string;
          status: string;
          channel: 'email' | 'sms';
        }>
      >,
    ) => {
      state.sampleContents = action.payload;
    },
    setIsMarkedContent: (state, action: PayloadAction<boolean>) => {
      state.isMarkedContent = action.payload;
    },
    resetOnboarding: () => initialState,
  },
});

export const {
  setFirstCreationModal,
  setOnboardingStep,
  setGeneratePrompt,
  setIsSampleContentGenerated,
  setSampleContents,
  resetOnboarding,
  setIsMarkedContent,
} = onboardingSlice.actions;
export default onboardingSlice.reducer;
