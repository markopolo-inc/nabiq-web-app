import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ICampaign } from 'src/interfaces/modules/campaign';
import { setCampaign } from 'src/store/campaign/campaignSlice';

import type { AppDispatch, RootState } from './index';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCampaignDispatch = () => {
  const dispatch = useDispatch();
  return (payload: Partial<ICampaign>) => dispatch(setCampaign(payload));
};

export const useCampaignSelector = () => useAppSelector((state) => state.campaign);
