import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import NewsList from '../NewsList/NewsList';
import Pagination from '../Pagination/Pagination';
import NewsApiResponse from '../../interface/newsapiresponse';
import NewsApiRequest from '../../interface/newsapirequest';
import Loader from '../Loader/Loader';
import ContentContext from '../../contexts/ContentContext';

type ContentProps = {
  query?: string;
  pageSize: number;
  page: number;
  onPageChange: (p: number) => void;
};

const apiURl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

function Content(props: ContentProps) {
  const { query, pageSize, page, onPageChange } = props;
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<null | NewsApiResponse>(null);
  const [pages, setPages] = useState(1);
  const [hasError, setHasError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const listProps: NewsApiRequest = {
    language: 'en',
    q: query,
    pageSize: pageSize,
    page: page,
  };

  const { q } = listProps;

  const URL = (() => {
    if (!apiURl || !apiKey) {
      throw new Error('Invalid request');
    }
    let url = apiURl + '?';
    for (const key in listProps) {
      let value = listProps[key as keyof NewsApiRequest];
      value =
        key === 'q' ? encodeURIComponent((value as string).trim()) : value;
      if (value) url = url + `${key}=${value}&`;
    }
    url = url.slice(0, -1);
    return url;
  })();

  const isDetailsOpen = () => location.pathname !== '/';

  useEffect(() => {
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
          setContent(data);
          if (data.totalResults && pageSize) {
            setPages(Math.ceil(data.totalResults / pageSize));
          } else {
            setHasError(true);
          }
          setLoading(false);
        });
    };

    if (!isDetailsOpen()) apiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [URL, pageSize]);

  useEffect(() => {
    if (hasError) {
      throw new Error('Error by loading data from API');
    }
  }, [hasError]);

  const closeDetails = () => {
    if (isDetailsOpen()) {
      navigate(-1);
    }
  };

  return (
    <div>
      <h2>News</h2>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="content-wrapper">
            <div
              className="content-list-wrapper"
              onClick={() => {
                closeDetails();
              }}
            >
              {!!q && <h3>Search for: {q}</h3>}
              {!!content?.totalResults && (
                <>
                  <h3>Total results: {content.totalResults}</h3>
                  <h4>Request URL: {URL}</h4>
                  <hr />
                  <ContentContext.Provider value={content}>
                    <NewsList />
                  </ContentContext.Provider>
                  {!isDetailsOpen() && (
                    <Pagination
                      page={page}
                      pages={pages}
                      onPageChange={onPageChange}
                    />
                  )}
                </>
              )}
            </div>
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
}

export default Content;
