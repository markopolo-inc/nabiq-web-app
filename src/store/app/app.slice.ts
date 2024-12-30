import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type TLanguage = 'en' | 'ar';

interface IAppSlice {
  language: TLanguage;
}

const initialState: IAppSlice = {
  language: 'en',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<TLanguage>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = appSlice.actions;
export default appSlice.reducer;
