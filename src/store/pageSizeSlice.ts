import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PageSizeState {
  value: string;
}

const DEFAULT_PAGE_SIZE = 4;

const initialState: PageSizeState = {
  value: localStorage.getItem('pageSize') || DEFAULT_PAGE_SIZE.toString(),
};

const pageSizeSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    setPageSize: (state, action: PayloadAction<string>) => {
      localStorage.setItem('pageSize', action.payload);
      state.value = action.payload;
    },
  },
});

export const { setPageSize } = pageSizeSlice.actions;
export default pageSizeSlice.reducer;
