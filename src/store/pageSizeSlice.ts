import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PageSizeState {
  value: string;
}

const DEFAULT_PAGE_SIZE = 4;

const initialState: PageSizeState = {
  value: DEFAULT_PAGE_SIZE.toString(),
};

const pageSizeSlice = createSlice({
  name: 'pageSize',
  initialState: initialState,
  reducers: {
    setPageSize: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setPageSize } = pageSizeSlice.actions;
export default pageSizeSlice.reducer;
