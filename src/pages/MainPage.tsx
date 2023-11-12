import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Content from '.././components/Content/Content';
import Search from '.././components/Search/Search';
import ListSettings from '.././components/ListSettings/ListSettings';
import SearchContext from '../contexts/SearchContext';

const DEFAULT_PAGE_SIZE = 4;

function MainPage() {
  const [query, setQuery] = useState(localStorage.getItem('searchQuery') || '');
  const [pageSize, setPageSize] = useState(
    localStorage.getItem('pageSize') || DEFAULT_PAGE_SIZE.toString()
  );
  const navigate = useNavigate();

  const [params, setParams] = useSearchParams();

  const handleSearch = (data: string) => {
    setQuery(data);
    navigate('/');
    localStorage.setItem('searchQuery', data);
  };

  const handleListSettings = (data: number) => {
    setPageSize(data.toString());
    navigate('/');
    localStorage.setItem('pageSize', data.toString());
    setParams((prev) => {
      prev.set('page', '1');
      return prev;
    });
  };

  const handlePage = (data: number) => {
    setParams((prev) => {
      prev.set('page', data.toString());
      return prev;
    });
  };

  return (
    <>
      <SearchContext.Provider value={query}>
        <h1>News Portal</h1>
        <Search onSubmit={handleSearch} />
        <br />
        <ListSettings
          onPageSizeChange={handleListSettings}
          pageSize={Number(pageSize)}
        />
        <hr />
        <Content
          query={query}
          onPageChange={handlePage}
          pageSize={Number(pageSize)}
          page={Number(params.get('page')) || 1}
        />
      </SearchContext.Provider>
    </>
  );
}

export default MainPage;
