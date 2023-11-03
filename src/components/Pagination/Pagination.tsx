import { useEffect, useState } from 'react';

type PaginationProps = {
  page: number;
  pages: number;
  onPageChange: (p: number) => void;
};

function Pagination(props: PaginationProps) {
  const { page: initialPage, pages, onPageChange } = props;
  const [page, setPage] = useState(initialPage);
  const [isDisabled, setIsDisabled] = useState({ prev: true, next: true });

  useEffect(() => {
    setIsDisabled({
      prev: page === 1,
      next: page === pages,
    });
  }, [pages, page]);

  useEffect(() => {
    onPageChange(page);
  }, [page, onPageChange]);

  return (
    <div>
      <button
        type="button"
        disabled={isDisabled.prev}
        onClick={() => setPage(1)}
      >
        ⏮️
      </button>
      <button
        type="button"
        disabled={isDisabled.prev}
        onClick={() => setPage((current) => current - 1)}
      >
        ⏪
      </button>
      <span>
        {page} of {pages}
      </span>
      <button
        type="button"
        disabled={isDisabled.next}
        onClick={() => setPage((current) => current + 1)}
      >
        ⏩
      </button>
      <button
        type="button"
        disabled={isDisabled.next}
        onClick={() => setPage(pages)}
      >
        ⏭️
      </button>
    </div>
  );
}

export default Pagination;
