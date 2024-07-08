import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { UserInterface } from "interfaces/user.interface";

const initialState: UserInterface = {
  resourceId: "",
  userEmail: "",
  userName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInterface>) => action.payload,
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
