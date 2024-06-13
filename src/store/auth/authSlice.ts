import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface loginState {
  isAuthenticated: boolean;
  username: string;
}

const initialState: loginState = {
  isAuthenticated: false,
  username: '',
};

export const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.username = '';
    },
  },
});

export const { setIsAuthenticated, setUsername, logout } = authSlice.actions;

export default authSlice.reducer;
