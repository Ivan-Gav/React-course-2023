// import { useLocation, useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';

import { NewsApiArticle } from '../../models/interfaces';

type NewsSnippetProps = {
  newsItem: NewsApiArticle;
  key: string;
};

function NewsSnippet(props: NewsSnippetProps) {
  const item = props.newsItem;
  const details = encodeURIComponent(item.title.trim());
  // const location = useLocation();
  // const navigate = useNavigate();
  const router = useRouter();

  const isDetailsOpen = () => !!router.query.article;

  const onClick = () => {
    if (!isDetailsOpen()) {
      const path = Object.keys(router.query).length
        ? `${router.asPath}&article=${details}`
        : `?article=${details}`;
      router.push(path);
    }
  };

  return (
    <div onClick={onClick} className="news_item" data-testid="news-snippet">
      <h4>{item.title}</h4>
      <p>Source: {item.source.name}</p>
      {item.publishedAt && <p>Date: {item.publishedAt.slice(0, 10)}</p>}
      <hr />
    </div>
  );
}

export default NewsSnippet;
