import { useEffect, useState } from 'react';
import NewsApiArticle from '../../interface/newsapiarticle';
import NewsApiResponse from '../../interface/newsapiresponse';
import Loader from '../Loader/Loader';

import { useNavigate, useParams } from 'react-router-dom';

// const API_URL = 'https://newsapi.org/v2/top-headlines';
const API_URL = 'http://127.0.0.1:8075/everything';
const API_KEY = 'eef9fc46616347dbbfb3e24da3a43690';

function NewsDetails() {
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState<null | NewsApiArticle>(null);

  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    const URL = `${API_URL}?language=en&q=${encodeURIComponent(
      (param.article as string).trim()
    )}`;
    const apiCall = async (): Promise<void> => {
      setLoading(true);
      fetch(URL, {
        method: 'GET',
        headers: {
          'X-Api-Key': API_KEY,
        },
      })
        .then((res) => res.json())
        .then((data: NewsApiResponse) => {
          if (data.articles && data.articles[0]) setArticle(data.articles[0]);
          setLoading(false);
        });
    };

    apiCall();
  }, [param.article]);

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
          {article.urlToImage && <img src={article.urlToImage} />}
          {article.description && <p>{article.description}</p>}
          <a href={article.url}>Read full article on {article.source.name}</a>
        </div>
      ) : (
        <h4>Article not found</h4>
      )}
      <br />
      <button onClick={() => navigate(-1)}> Close </button>
    </div>
  );
}

export default NewsDetails;
