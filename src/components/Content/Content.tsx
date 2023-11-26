import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import NewsList from '../NewsList/NewsList';
import Pagination from '../Pagination/Pagination';
import { RootState } from '../../store/store';
import NewsDetails from '../NewsDetails/NewsDetails';
import {
  NewsApiComposedResponse,
  NewsApiRequest,
} from '../../models/interfaces';

const apiURl = process.env.NEXT_PUBLIC_API_URL;

function Content(props: NewsApiComposedResponse) {
  const router = useRouter();

  const page = router.query.page || 1;
  const query = useSelector((state: RootState) => state.search.value);
  const pageSize = useSelector((state: RootState) => state.pageSize.value);

  const isDetailsOpen = () => !!router.query.article;

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
          </div>
          {!!props.openedArticle && <NewsDetails {...props.openedArticle} />}
        </div>
      </div>
    </div>
  );
}

export default Content;
