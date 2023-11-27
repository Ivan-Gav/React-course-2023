import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { RootState } from '../../store/store';
import { setSearch } from '../../store/searchSlice';

function Search() {
  const initialQuery = useSelector((state: RootState) => state.search.value);
  const pageSize = useSelector((state: RootState) => state.pageSize.value);
  const dispatch = useDispatch();
  const [hasError, setHasError] = useState(false);
  const [query, setQuery] = useState(initialQuery);

  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setSearch(query));
    router.push(`/?page=1&pageSize=${pageSize}&q=${query}`);
  };

  const clearSearch = () => {
    setQuery('');
    dispatch(setSearch(''));
    router.push(`/?page=1&pageSize=${pageSize}&q=`);
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
