import { createSlice } from "@reduxjs/toolkit";

interface OnboardingState {
  user: any;
}

const initialState: OnboardingState = {
  user: undefined,
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {},
});

export default onboardingSlice.reducer;
