type PaginationProps = {
  page: number;
  pages: number;
  onPageChange: (p: number) => void;
};

function Pagination(props: PaginationProps) {
  const { page: initialPage, pages, onPageChange } = props;

  const isDisabled = {
    prev: initialPage === 1,
    next: initialPage === pages,
  };

  return (
    <div>
      <button
        type="button"
        disabled={isDisabled.prev}
        onClick={() => onPageChange(1)}
      >
        ⏮️
      </button>
      <button
        type="button"
        disabled={isDisabled.prev}
        onClick={() => onPageChange(initialPage - 1)}
      >
        ⏪
      </button>
      <span>
        {initialPage} of {pages}
      </span>
      <button
        type="button"
        disabled={isDisabled.next}
        onClick={() => onPageChange(initialPage + 1)}
      >
        ⏩
      </button>
      <button
        type="button"
        disabled={isDisabled.next}
        onClick={() => onPageChange(pages)}
      >
        ⏭️
      </button>
    </div>
  );
}

export default Pagination;
