import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: localStorage.getItem('searchQuery') || '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      localStorage.setItem('searchQuery', action.payload);
      state.value = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
