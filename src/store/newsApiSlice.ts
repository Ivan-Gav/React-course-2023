import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import NewsApiResponse from '../interface/newsapiresponse';
import NewsApiRequest from '../interface/newsapirequest';

const apiURl = process.env.API_URL || '';
const apiKey = process.env.API_KEY || '';

const newsApi = createApi({
  reducerPath: 'content',
  baseQuery: fetchBaseQuery({
    baseUrl: apiURl,
    prepareHeaders: (headers: Headers) => {
      headers.set('X-Api-Key', apiKey);
      return headers;
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (build) => ({
    getNews: build.query<NewsApiResponse, NewsApiRequest>({
      query: (queryParms: NewsApiRequest) => ({
        url: '/',
        params: {
          q: queryParms.q,
          page: queryParms.page,
          pageSize: queryParms.pageSize,
          language: queryParms.language || 'en',
        },
      }),
    }),
  }),
});

export default newsApi;
export const { useGetNewsQuery } = newsApi;
