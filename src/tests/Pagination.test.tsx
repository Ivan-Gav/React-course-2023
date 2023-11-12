import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Pagination from '../components/Pagination/Pagination';

type PaginationHandler = (n: number) => void;

describe('Pagination', () => {
  describe('passes proper argument into handler when clicked', () => {
    const handlePage: PaginationHandler = vi.fn();

    it('passes (current page + 1) when Next is clicked', () => {
      render(<Pagination page={1} pages={4} onPageChange={handlePage} />);
      const next = screen.getByRole('button', { name: 'Next' });

      fireEvent.click(next);

      expect(handlePage).toBeCalledWith(2);
    });

    it('passes (last page) when Last is clicked', () => {
      render(<Pagination page={1} pages={4} onPageChange={handlePage} />);
      const last = screen.getByRole('button', { name: 'Last' });

      fireEvent.click(last);

      expect(handlePage).toBeCalledWith(4);
    });

    it('passes (current page - 1) when Prev is clicked', () => {
      render(<Pagination page={4} pages={4} onPageChange={handlePage} />);
      const prev = screen.getByRole('button', { name: 'Prev' });

      fireEvent.click(prev);

      expect(handlePage).toBeCalledWith(3);
    });

    it('passes 1 when First is clicked', () => {
      render(<Pagination page={3} pages={4} onPageChange={handlePage} />);
      const first = screen.getByRole('button', { name: 'First' });

      fireEvent.click(first);

      expect(handlePage).toBeCalledWith(1);
    });
  });
});
