import { useState } from 'react';
import Content from './components/Content/Content';
import Search from './components/Search/Search';
import ListSettings from './components/ListSettings/ListSettings';

function App() {
  const [query, setQuery] = useState(localStorage.getItem('searchQuery') || '');
  const [pageSize, setPageSize] = useState(
    Number(localStorage.getItem('pageSize')) || 6
  );

  const handleSearch = (data: string) => {
    setQuery(data);
    localStorage.setItem('searchQuery', data);
  };

  const handleListSettings = (data: number) => {
    setPageSize(data);
    localStorage.setItem('pageSize', data.toString());
  };

  return (
    <>
      <Search onSubmit={handleSearch} query={query} />
      <br />
      <ListSettings onPageSizeChange={handleListSettings} pageSize={pageSize} />
      <hr />
      <Content query={query} pageSize={pageSize} />
    </>
  );
}

export default App;
