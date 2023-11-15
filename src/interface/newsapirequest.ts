interface NewsApiRequest {
  apiKey?: string;
  country?: string;
  category?: string;
  sources?: string;
  q?: string;
  pageSize?: number;
  page?: number;
  language?: string;
}

export default NewsApiRequest;
