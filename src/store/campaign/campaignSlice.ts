import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import { CampaignInterface } from "src/interfaces/campaign.interface";

const initialState: Partial<CampaignInterface> = {
  tone: "informal",
  startDate: moment().format("YYYY-MM-DD"),
  endDate: moment().add("day", 7).format("YYYY-MM-DD"),
  channels: [],
};

export const revertAll = createAction("REVERT_ALL");

const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  extraReducers(builder) {
    builder.addCase(revertAll, () => initialState);
  },
  reducers: {
    setCampaign: (
      state,
      action: PayloadAction<Partial<CampaignInterface>>
    ) => ({
      ...state,
      ...action.payload,
    }),
    resetCampaign: () => initialState,
  },
});

export const { setCampaign, resetCampaign } = campaignSlice.actions;
export default campaignSlice.reducer;
