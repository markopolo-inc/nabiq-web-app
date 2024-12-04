import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import moment from 'moment-timezone';
import { ICampaign } from 'src/interfaces/modules/campaign';

const initialState: Partial<ICampaign> = {
  tone: 'informal',
  startDate: moment().format('YYYY-MM-DD'),
  endDate: moment().add(7, 'day').format('YYYY-MM-DD'),
  channels: [],
  content: [],
};

export const revertAll = createAction('REVERT_ALL');

const campaignSlice = createSlice({
  name: 'campaign',
  initialState,
  extraReducers(builder) {
    builder.addCase(revertAll, () => initialState);
  },
  reducers: {
    setCampaign: (state, action: PayloadAction<Partial<ICampaign>>) => ({
      ...state,
      ...action.payload,
    }),
    resetCampaign: () => initialState,
  },
});

export const { setCampaign, resetCampaign } = campaignSlice.actions;
export default campaignSlice.reducer;
