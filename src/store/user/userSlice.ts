import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserInterface {
  _id?: string;
  resourceId?: string;
  companyId?: string;
  cognitoId?: string;
  userEmail?: string;
  userName?: string;
}

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
