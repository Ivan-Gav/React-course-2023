import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NewsList from '../NewsList/NewsList';
import Pagination from '../Pagination/Pagination';
import NewsApiRequest from '../../interface/newsapirequest';
import Loader from '../Loader/Loader';
import { RootState } from '../../store/store';
import { useGetNewsQuery } from '../../store/newsApiSlice';

const apiURl = import.meta.env.VITE_API_URL;

type ContentProps = {
  page: number;
  onPageChange: (p: number) => void;
};

function Content(props: ContentProps) {
  const { page, onPageChange } = props;
  const query = useSelector((state: RootState) => state.search.value);
  const pageSize = useSelector((state: RootState) => state.pageSize.value);

  const location = useLocation();
  const navigate = useNavigate();

  const isDetailsOpen = () => location.pathname !== '/';

  const closeDetails = () => {
    if (isDetailsOpen()) {
      navigate(-1);
    }
  };

  const listProps: NewsApiRequest = {
    language: 'en',
    q: query,
    pageSize: Number(pageSize),
    page: page,
  };

  const { data, isFetching } = useGetNewsQuery(listProps);

  const URL = (() => {
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

  const pages = data?.totalResults
    ? Math.ceil(data.totalResults / Number(pageSize))
    : 1;

  return (
    <div>
      <h2>News</h2>
      {isFetching ? (
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
              {!!query && <h3>Search for: {query}</h3>}
              {!!data?.totalResults && (
                <>
                  <h3>Total results: {data.totalResults}</h3>
                  <h4>Request URL: {URL}</h4>
                  <hr />
                  <NewsList {...data} />
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
