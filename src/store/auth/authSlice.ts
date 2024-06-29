import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginState {
  isAuthenticated: boolean;
  email: string;
  username?: string;
}

const initialState: loginState = {
  isAuthenticated: false,
  email: "",
  username: "",
};

export const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },

    setUserEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.email = "";
    },
  },
});

export const { setIsAuthenticated, setUserEmail, logout } = authSlice.actions;
export default authSlice.reducer;
