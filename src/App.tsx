import { useState } from 'react';
import Content from './components/Content/Content';
import Search from './components/Search/Search';

function App() {
  const [query, setQuery] = useState(localStorage.getItem('searchQuery') || '');

  const handleSearch = (data: string) => {
    setQuery(data);
    localStorage.setItem('searchQuery', data);
  };

  return (
    <>
      <Search onSubmit={handleSearch} query={query} />
      <hr />
      <Content query={query} />
    </>
  );
}

export default App;
