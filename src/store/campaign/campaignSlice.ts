import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import { CampaignInterface } from "src/interfaces/campaign.interface";

const initialState: Partial<CampaignInterface> = {
  tone: "informal",
  startDate: moment().format("YYYY-MM-DD"),
  endDate: moment().add("day", 7).format("YYYY-MM-DD"),
  channels: [],
};

const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    setCampaign: (
      state,
      action: PayloadAction<Partial<CampaignInterface>>
    ) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setCampaign } = campaignSlice.actions;
export default campaignSlice.reducer;
