import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import NewsApiArticle from '../../interface/newsapiarticle';
import NewsApiRequest from '../../interface/newsapirequest';
import Loader from '../Loader/Loader';
import { useGetNewsQuery } from '../../store/newsApiSlice';
import { RootState } from '../../store/store';
import { setIsDetailsFetching } from '../../store/loadingFlagsSlice';

function NewsDetails() {
  const navigate = useNavigate();
  const param = useParams();
  const dispatch = useDispatch();
  const isDetailsFetching = useSelector(
    (state: RootState) => state.loadingFlags.isDetailsFetching
  );

  const queryProps: NewsApiRequest = {
    language: 'en',
    q: param.article ? param.article.trim() : '',
  };

  const { data, isFetching } = useGetNewsQuery(queryProps);
  const article: null | NewsApiArticle = data?.articles?.length
    ? data.articles[0]
    : null;

  useEffect(() => {
    dispatch(setIsDetailsFetching(isFetching));
  }, [isFetching]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="article">
      {isDetailsFetching ? (
        <Loader />
      ) : article ? (
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
