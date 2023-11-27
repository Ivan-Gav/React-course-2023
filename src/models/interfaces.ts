export interface NewsApiArticle {
  source: {
    id?: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface NewsApiRequest {
  apiKey?: string;
  country?: string; // Note: you can't mix this param with the sources param.
  category?: string; // Note: you can't mix this param with the sources param.
  sources?: string; // Note: you can't mix this param with the country or category params.
  q?: string;
  pageSize?: number;
  page?: number;
  language?: string;
}

export interface NewsApiResponse {
  status: 'ok' | 'error';
  code?: number;
  message?: string;
  totalResults?: number;
  articles?: NewsApiArticle[];
}

export interface NewsApiComposedResponse extends NewsApiResponse {
  openedArticle?: NewsApiArticle | null;
}
