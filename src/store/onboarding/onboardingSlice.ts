import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OnboardingState {
  user: any;
}

const initialState: OnboardingState = {
  user: undefined,
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    onboardUser: (state, action: PayloadAction<OnboardingState>) => {
      state.user = action.payload.user;
    },
  },
});

export const { onboardUser } = onboardingSlice.actions;
export default onboardingSlice.reducer;
