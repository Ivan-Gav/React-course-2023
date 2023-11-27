import { useRouter } from 'next/router';
import { NewsApiArticle } from '../../models/interfaces';

export default function NewsDetails(article: NewsApiArticle) {
  const router = useRouter();
  const { pathname, query } = router;

  const closeMe = () => {
    if (query.article) {
      delete router.query.article;
      router.push({ pathname, query });
    }
  };

  return (
    <div className="article">
      {article ? (
        <div data-testid="news-details">
          <h4>{article.title}</h4>
          <p>Source: {article.source.name}</p>
          {article.author && <p>Author: {article.author}</p>}
          {article.publishedAt && (
            <p>Date: {article.publishedAt.slice(0, 10)}</p>
          )}
          {article.urlToImage && (
            <img src={article.urlToImage} loading="lazy" alt="" />
          )}
          {article.description && <p>{article.description}</p>}
          <a href={article.url}>Read full article on {article.source.name}</a>
          <br />
          <button className="close-button" onClick={closeMe}>
            Close
          </button>
        </div>
      ) : (
        <div>
          <h4>Article not found</h4>
          <button className="close-button" onClick={closeMe}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}
