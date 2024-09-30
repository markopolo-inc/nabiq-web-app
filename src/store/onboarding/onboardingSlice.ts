import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface OnboardingState {
  user: any;
  isFirstCreationModal: boolean;
}

const initialState: OnboardingState = {
  user: undefined,
  isFirstCreationModal: false,
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setFirstCreationModal: (state, action: PayloadAction<boolean>) => {
      state.isFirstCreationModal = action.payload;
    },
  },
});

export const { setFirstCreationModal } = onboardingSlice.actions;
export default onboardingSlice.reducer;
