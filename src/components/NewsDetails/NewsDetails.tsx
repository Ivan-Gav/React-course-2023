import { useEffect, useState } from 'react';
import NewsApiArticle from '../../interface/newsapiarticle';
import NewsApiResponse from '../../interface/newsapiresponse';
import Loader from '../Loader/Loader';

import { useNavigate, useParams } from 'react-router-dom';

const apiURl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

function NewsDetails() {
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState<null | NewsApiArticle>(null);
  const [hasError, setHasError] = useState(false);

  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    const URL = `${apiURl}?language=en&q=${encodeURIComponent(
      (param.article as string).trim()
    )}`;
    const apiCall = async (): Promise<void> => {
      setLoading(true);
      fetch(URL, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
        },
      })
        .then((res) => {
          if (!res.ok) setHasError(true);
          return res.json();
        })
        .then((data: NewsApiResponse) => {
          if (data.articles && data.articles[0]) {
            setArticle(data.articles[0]);
          } else {
            setHasError(true);
          }
          setLoading(false);
        })
        .catch((err) =>
          console.log(`Server error response caught: ${err.message}`)
        );
    };

    apiCall();
  }, [param.article]);

  useEffect(() => {
    if (hasError) {
      throw new Error('Page Not Found');
    }
  }, [hasError]);

  return (
    <div className="article">
      {loading ? (
        <Loader />
      ) : article ? (
        <div>
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
          <button className="close-button" onClick={() => navigate(-1)}>
            Close
          </button>
        </div>
      ) : (
        <div>
          <h4>Article not found</h4>
          <button className="close-button" onClick={() => navigate(-1)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default NewsDetails;
