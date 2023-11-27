import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import Content from '../src/components/Content/Content';
import Search from '../src/components/Search/Search';
import ListSettings from '../src/components/ListSettings/ListSettings';
import { setPageSize } from '../src/store/pageSizeSlice';
import newsApi from '../src/store/newsApiSlice';
import { RootState, store } from '../src/store/store';
import {
  NewsApiComposedResponse,
  NewsApiResponse,
} from '../src/models/interfaces';

// eslint-disable-next-line react-refresh/only-export-components
export const getServerSideProps = (async (context) => {
  const { query } = context;

  const emptyData: NewsApiResponse = {
    status: 'ok',
    totalResults: 1,
    articles: [],
  };

  const apiCallParams = {
    language: 'en',
    q: Array.isArray(query.q) ? query.q[0] : query.q || '',
    pageSize: query.pageSize ? Number(query.pageSize) : 4,
    page: query.page ? Number(query.page) : 1,
  };

  const apiCallParamsForArticle = {
    language: 'en',
    q: query.article as string,
  };

  let { data } = await store.dispatch(
    newsApi.endpoints.getNews.initiate(apiCallParams)
  );
  if (!data) data = emptyData;
  if (query.article) {
    const { data: articleData } = await store.dispatch(
      newsApi.endpoints.getNews.initiate(apiCallParamsForArticle)
    );
    (data as NewsApiComposedResponse) = {
      ...data,
      openedArticle:
        articleData && articleData.articles ? articleData.articles[0] : null,
    };
  }
  return { props: { data } };
}) satisfies GetServerSideProps<{
  data: NewsApiComposedResponse;
}>;

function MainPage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const dispatch = useDispatch();
  const router = useRouter();

  const query = useSelector((state: RootState) => state.search.value);

  const handleListSettings = (data: string) => {
    dispatch(setPageSize(data));
    router.push(`/?page=1&pageSize=${data}&q=${query}`);
  };

  return (
    <>
      <h1>News Portal</h1>
      <Search />
      <br />
      <ListSettings onPageSizeChange={handleListSettings} />
      <hr />
      <Content {...data} />
    </>
  );
}

export default MainPage;
