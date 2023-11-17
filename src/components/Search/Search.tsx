import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import SearchContext from '../../contexts/SearchContext';
import { RootState } from '../../store/store';
import { setSearch } from '../../store/searchSlice';

// type SearchProps = {
//   onSubmit: (s: string) => void;
// };

function Search() {
  const initialQuery = useSelector((state: RootState) => state.search.value);
  const dispatch = useDispatch();
  // const inputquery = useContext(SearchContext);
  const [hasError, setHasError] = useState(false);
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setSearch(query));
  };

  const clearSearch = () => {
    setQuery('');
    dispatch(setSearch(''));
  };

  useEffect(() => {
    if (hasError) {
      throw new Error('Test Error button clicked');
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
