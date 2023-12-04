import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IFormData } from '../models/models';

const initialState: IFormData[] = [];

const accountSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IFormData>) => {
      state.push(action.payload);
    },
  },
});

export const { add } = accountSlice.actions;
export default accountSlice.reducer;
