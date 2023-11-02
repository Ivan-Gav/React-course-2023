import NewsApiRequest from './newsapirequest';

interface NewsListProps extends NewsApiRequest {
  setTotalPages: (p: number) => void;
}

export default NewsListProps;
