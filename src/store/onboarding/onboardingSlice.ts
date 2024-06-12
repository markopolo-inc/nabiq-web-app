import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: undefined,
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    onboardUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const { onboardUser } = onboardingSlice.actions;
export default onboardingSlice.reducer;
