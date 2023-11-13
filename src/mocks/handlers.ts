import { http, HttpResponse } from 'msw';
import {
  mockContent10Cards,
  mockContent1Card,
  errorResponse,
} from './mockdata';

const apiURl = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${apiURl}/invalid-path`, () => {
    return HttpResponse.json(errorResponse);
  }),
  http.get(apiURl, ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get('q');
    if (q && q !== '') {
      return HttpResponse.json(mockContent1Card);
    }
    return HttpResponse.json(mockContent10Cards);
  }),
];
