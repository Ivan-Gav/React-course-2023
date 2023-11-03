import { useEffect, useState } from 'react';
import NewsList from '../NewsList/NewsList';
import Pagination from '../Pagination/Pagination';
import NewsApiResponse from '../../interface/newsapiresponse';
import NewsApiRequest from '../../interface/newsapirequest';
import Loader from '../Loader/Loader';

type ContentProps = {
  query?: string;
  pageSize?: number;
};

// const API_URL = 'https://newsapi.org/v2/top-headlines';
const API_URL = 'http://127.0.0.1:8075/everything';
const API_KEY = 'eef9fc46616347dbbfb3e24da3a43690';

function Content(props: ContentProps) {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<null | NewsApiResponse>(null);

  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const listProps: NewsApiRequest = {
    apiKey: API_KEY,
    pageSize: props.pageSize,
    page: page,
    language: 'en',
    q: props.query || '',
  };

  const { q, apiKey, pageSize } = listProps;

  const onPageChange = (p: number) => setPage(p);

  const URL = (() => {
    if (!API_URL || !apiKey) {
      throw new Error('Invalid request');
    }
    let url = API_URL + '?';
    for (const key in listProps) {
      let value = listProps[key as keyof NewsApiRequest];
      value =
        key === 'q' ? encodeURIComponent((value as string).trim()) : value;
      if (value) url = url + `${key}=${value}&`;
    }
    url = url.slice(0, -1);
    return url;
  })();

  useEffect(() => {
    const apiCall = async (): Promise<void> => {
      setLoading(true);
      fetch(URL)
        .then((res) => res.json())
        .then((data: NewsApiResponse) => {
          setContent(data);
          if (data.totalResults && pageSize) {
            setPages(Math.ceil(data.totalResults / pageSize));
          }
          setLoading(false);
        });
    };

    apiCall();
  }, [URL, pageSize]);

  return (
    <div>
      <h2>News</h2>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div>
            {q && <h3>Search for: {q}</h3>}
            <h3>Get from: {URL}</h3>
            {content?.totalResults && (
              <>
                <h3>Total results: {content.totalResults}</h3>
                <hr />
                <NewsList {...content} />
              </>
            )}
          </div>
          <Pagination page={page} pages={pages} onPageChange={onPageChange} />
        </div>
      )}
    </div>
  );
}

export default Content;
