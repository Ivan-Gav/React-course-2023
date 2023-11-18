import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface LoadingFlagsState {
  isListFetching: boolean;
  isDetailsFetching: boolean;
}

const initialState: LoadingFlagsState = {
  isListFetching: false,
  isDetailsFetching: false,
};

const loadingFlagsSlice = createSlice({
  name: 'loadingFlags',
  initialState: initialState,
  reducers: {
    setIsListFetching: (state, action: PayloadAction<boolean>) => {
      state.isListFetching = action.payload;
    },
    setIsDetailsFetching: (state, action: PayloadAction<boolean>) => {
      state.isDetailsFetching = action.payload;
    },
  },
});

export const { setIsListFetching, setIsDetailsFetching } =
  loadingFlagsSlice.actions;
export default loadingFlagsSlice.reducer;
