import { FormEvent, useEffect, useState, useContext } from 'react';
import SearchContext from '../../contexts/SearchContext';

type SearchProps = {
  // query: string;
  onSubmit: (s: string) => void;
};

function Search(props: SearchProps) {
  const inputquery = useContext(SearchContext);
  const [hasError, setHasError] = useState(false);
  const [query, setQuery] = useState(inputquery);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.onSubmit(query);
  };

  const clearSearch = () => {
    setQuery('');
    props.onSubmit('');
  };

  useEffect(() => {
    if (hasError) {
      throw new Error('I will kill your app!');
    }
  }, [hasError]);

  return (
    <div>
      <h2>Search field</h2>
      <form name="searchform" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter search query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={() => clearSearch()}>
          Clear
        </button>
        <button
          type="button"
          onClick={() => {
            setHasError(true);
          }}
        >
          Test Error
        </button>
      </form>
    </div>
  );
}

export default Search;
