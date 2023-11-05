import { useLocation, useNavigate } from 'react-router-dom';
import NewsApiArticle from '../../interface/newsapiarticle';

type NewsSnippetProps = {
  newsItem: NewsApiArticle;
  key: string;
};

function NewsSnippet(props: NewsSnippetProps) {
  const item = props.newsItem;
  const details = encodeURIComponent(item.title.trim());
  const location = useLocation();
  const navigate = useNavigate();

  const isDetailsOpen = () => location.pathname !== '/';

  const onClick = () => {
    if (!isDetailsOpen()) {
      console.log('on my way');
      navigate(`${details}`);
    }
  };

  return (
    <div onClick={onClick}>
      <h4>{item.title}</h4>
      <p>Source: {item.source.name}</p>
      {item.publishedAt && <p>Date: {item.publishedAt.slice(0, 10)}</p>}
      <hr />
    </div>
  );
}

export default NewsSnippet;
