import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface onboardingState {
  user: any;
}

const initialState: onboardingState = {
  user: undefined,
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    onboardUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload.user;
    },
  },
});

export const { onboardUser } = onboardingSlice.actions;
export default onboardingSlice.reducer;
