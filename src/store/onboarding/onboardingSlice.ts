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
}

const initialState: OnboardingState = {
  user: undefined,
  isFirstCreationModal: false,
  step: 'company_creation',
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
  },
});

export const { setFirstCreationModal, setOnboardingStep } = onboardingSlice.actions;
export default onboardingSlice.reducer;
