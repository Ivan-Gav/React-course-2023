import { http, HttpResponse } from 'msw';
import { mockContent4Cards, mockContent1Card } from './mockdata';

const apiURl = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(apiURl, ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get('q');
    if (q && q !== '') {
      return HttpResponse.json(mockContent1Card);
    }
    return HttpResponse.json(mockContent4Cards);
  }),
];
