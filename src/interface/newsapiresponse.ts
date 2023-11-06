import NewsApiArticle from './newsapiarticle';

interface NewsApiResponse {
  status: 'ok' | 'error';
  code?: number;
  message?: string;
  totalResults?: number;
  articles?: NewsApiArticle[];
}

export default NewsApiResponse;
