import { createSlice } from '@reduxjs/toolkit';

import { COUNTRIES } from '../constants/countries';

const initialState = COUNTRIES;

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
});

export default countriesSlice.reducer;
