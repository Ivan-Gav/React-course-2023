interface NewsApiRequest {
  apiKey?: string;
  country?: string; // Note: you can't mix this param with the sources param.
  category?: string; // Note: you can't mix this param with the sources param.
  sources?: string; // Note: you can't mix this param with the country or category params.
  q?: string;
  pageSize?: number;
  page?: number;
  language?: string;
}

export default NewsApiRequest;
