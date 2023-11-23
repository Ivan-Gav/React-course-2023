import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import NewsList from '../NewsList/NewsList';
import Pagination from '../Pagination/Pagination';
import NewsApiRequest from '../../interface/newsapirequest';
import NewsApiResponse from '../../interface/newsapiresponse';
import { RootState } from '../../store/store';

const apiURl = process.env.API_URL;

function Content(props: NewsApiResponse) {
  const router = useRouter();
  // const dispatch = useDispatch();

  const page = router.query.page || 1;
  const query = useSelector((state: RootState) => state.search.value);
  const pageSize = useSelector((state: RootState) => state.pageSize.value);

  // const location = useLocation();
  // const navigate = useNavigate();

  const isDetailsOpen = () => router.pathname !== '/';

  const closeDetails = () => {
    if (isDetailsOpen()) {
      router.back();
    }
  };

  const onPageChange = (destPage: number) => {
    router.push(`/?page=${destPage}&pageSize=${pageSize}&q=${query}`);
  };

  const listProps: NewsApiRequest = {
    language: 'en',
    q: query,
    pageSize: Number(pageSize),
    page: Number(page),
  };

  // const { data, isFetching } = useGetNewsQuery(listProps);

  // useEffect(() => {
  //   dispatch(setIsListFetching(isFetching));
  // }, [isFetching]);

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

  const pages = props.totalResults
    ? Math.ceil(props.totalResults / Number(pageSize))
    : 1;

  return (
    <div>
      <h2>News</h2>
      <div>
        <div className="content-wrapper">
          <div
            className="content-list-wrapper"
            onClick={() => {
              closeDetails();
            }}
          >
            {!!query && <h3>Search for: {query}</h3>}
            {!!props.totalResults && (
              <>
                <h3>Total results: {props.totalResults}</h3>
                <h4>Request URL: {URL}</h4>
                <hr />
                <NewsList {...props} />
                {!isDetailsOpen() && (
                  <Pagination
                    page={Number(page)}
                    pages={pages}
                    onPageChange={(n) => onPageChange(n)}
                  />
                )}
              </>
            )}
          </div>
          {/* <Outlet /> */}
        </div>
      </div>
    </div>
  );
}

export default Content;
