import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface ConfigState {
  value: 'information' | 'purpose';
}

const initialState: ConfigState = {
  value: 'information',
};

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    changeScreenConfig: (
      state,
      action: PayloadAction<'information' | 'purpose'>,
    ) => {
      state.value = action.payload;
    },
  },
});

export const {} = configSlice.actions;

export default configSlice.reducer;
