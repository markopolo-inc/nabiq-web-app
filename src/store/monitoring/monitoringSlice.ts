import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NodeProps } from '@xyflow/react';

interface MonitoringInitState {
  selectedNode?: NodeProps;
  hidden: boolean;
}

const initialState: MonitoringInitState = {
  selectedNode: undefined,
  hidden: true,
};

const monitoringSlice = createSlice({
  name: 'monitoring',
  initialState,
  reducers: {
    onSelectNode: (state, action: PayloadAction<MonitoringInitState['selectedNode']>) => {
      state.selectedNode = action.payload;
      state.hidden = !state.hidden;
    },
  },
});

export const { onSelectNode } = monitoringSlice.actions;
export default monitoringSlice.reducer;
