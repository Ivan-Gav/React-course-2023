export type PaginationProps = {
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
    <div className="pagination-container">
      <button
        type="button"
        className="pagination-button"
        disabled={isDisabled.prev}
        onClick={() => onPageChange(1)}
      >
        First
      </button>
      <button
        type="button"
        className="pagination-button"
        disabled={isDisabled.prev}
        onClick={() => onPageChange(initialPage - 1)}
      >
        Prev
      </button>
      <span>
        {initialPage} of {pages}
      </span>
      <button
        type="button"
        className="pagination-button"
        disabled={isDisabled.next}
        onClick={() => onPageChange(initialPage + 1)}
      >
        Next
      </button>
      <button
        type="button"
        className="pagination-button"
        disabled={isDisabled.next}
        onClick={() => onPageChange(pages)}
      >
        Last
      </button>
    </div>
  );
}

export default Pagination;
