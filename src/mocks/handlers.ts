import { http, HttpResponse } from 'msw';
import { mockContent4Cards } from './mockdata';

const apiURl = import.meta.env.VITE_API_URL;

export const handlers = [
  // http.get(apiURl, () => {
  //   return HttpResponse.json(mockContent4Cards);
  // }),
  http.get(apiURl, ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('q');
    if (query) {
      const response = mockContent4Cards;
      response.message = query;
      return HttpResponse.json(response);
    }
    return HttpResponse.json(mockContent4Cards);
  }),
];
