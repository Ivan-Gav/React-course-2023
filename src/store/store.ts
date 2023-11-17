import { configureStore } from '@reduxjs/toolkit';

import searchReducer from './searchSlice';
import pageSizeReducer from './pageSizeSlice';
import newsApi from './newsApiSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    pageSize: pageSizeReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (gDM) => gDM().concat(newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
