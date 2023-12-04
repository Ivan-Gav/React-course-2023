import { configureStore } from '@reduxjs/toolkit';

import accountReducer from './accountSlice';
import countriesReducer from './countriesSlice';

export const store = configureStore({
  reducer: {
    accounts: accountReducer,
    countries: countriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
