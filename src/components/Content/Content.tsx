import { useState } from 'react';
import NewsList from '../NewsList/NewsList';
import Pagination from '../Pagination/Pagination';
import NewsListProps from '../../interface/newslistprops';

type ContentProps = {
  query?: string;
  pageSize?: number;
};

function Content(props: ContentProps) {
  const { query, pageSize = 6 } = props;
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const listProps: NewsListProps = {
    pageSize: pageSize,
    q: query || '',
    page: page,
    setTotalPages: (p) => setPages(p),
  };

  const onPageChange = (p: number) => setPage(p);

  return (
    <div>
      <NewsList {...listProps} />
      <Pagination page={page} pages={pages} onPageChange={onPageChange} />
    </div>
  );
}

export default Content;
