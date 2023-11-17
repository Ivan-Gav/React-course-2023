import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import pageSizeReducer from './pageSizeSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    pageSize: pageSizeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
