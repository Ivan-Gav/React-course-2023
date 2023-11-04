import { useState } from 'react';
import Content from './components/Content/Content';
import Search from './components/Search/Search';
import ListSettings from './components/ListSettings/ListSettings';
import { useSearchParams } from 'react-router-dom';

const DEFAULT_PAGE_SIZE = 6;

function App() {
  const [query, setQuery] = useState(localStorage.getItem('searchQuery') || '');

  const [params, setParams] = useSearchParams();

  const handleSearch = (data: string) => {
    setQuery(data);
    localStorage.setItem('searchQuery', data);
  };

  const handleListSettings = (data: number) => {
    setParams((prev) => {
      prev.set('pageSize', data.toString());
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
      <Search onSubmit={handleSearch} query={query} />
      <br />
      <ListSettings
        onPageSizeChange={handleListSettings}
        pageSize={Number(params.get('pageSize')) || DEFAULT_PAGE_SIZE}
      />
      <hr />
      <Content
        query={query}
        onPageChange={handlePage}
        pageSize={Number(params.get('pageSize')) || DEFAULT_PAGE_SIZE}
        page={Number(params.get('page')) || 1}
      />
    </>
  );
}

export default App;
