import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IAuthSlice {
  isAuthenticated: boolean;
  email: string;
  username?: string;
}

const initialState: IAuthSlice = {
  isAuthenticated: false,
  email: '',
  username: '',
};

export const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },

    setUserEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    logout: () => initialState,
  },
});

export const { setIsAuthenticated, setUserEmail, logout } = authSlice.actions;
export default authSlice.reducer;
