import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';

import MainPage from '../pages/MainPage';

const MockMainPage = () => {
  return (
    <MemoryRouter>
      <MainPage />
    </MemoryRouter>
  );
};
describe('MainPage', () => {
  describe('when Search component is used', () => {
    let bufferLS = '';

    beforeAll(() => {
      bufferLS = localStorage.getItem('searchQuery') || '';
    });

    afterAll(() => {
      if (bufferLS) {
        localStorage.setItem('searchQuery', bufferLS);
      } else {
        localStorage.removeItem('searchQuery');
      }
    });

    it('saves the entered value to the local storage on clicking the Search button', () => {
      const testQuerySaving = 'Test search query loading';
      render(<MockMainPage />);
      const serchField = screen.getByRole('textbox');
      const searchButton = screen.getByRole('button', { name: /search/i });

      fireEvent.change(serchField, { target: { value: testQuerySaving } });
      fireEvent.click(searchButton);
      const savedQuery = localStorage.getItem('searchQuery');
      expect(savedQuery).toBe(testQuerySaving);
    });

    it('retrieves the value from the local storage and sets it in the Search input ', () => {
      const testQueryLoading = 'Test search query loading';
      localStorage.setItem('searchQuery', testQueryLoading);

      render(<MockMainPage />);
      const serchField = screen.getByRole('textbox');
      expect(serchField).toHaveValue(testQueryLoading);
    });
  });

  describe('when Pagination is used', () => {
    const MockMainPageWithQuery = () => {
      const location = useLocation();
      return (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainPage />
                  <div data-testid="destination">{location.search}</div>
                </>
              }
            />
          </Routes>
        </>
      );
    };

    it('updates URL query parameter when Next page button is clicked', async () => {
      render(
        <MemoryRouter>
          <MockMainPageWithQuery />
        </MemoryRouter>
      );
      const next = await screen.findByRole('button', { name: 'Next' });

      fireEvent.click(next);

      const destinationElement = await screen.findByTestId('destination');
      expect(destinationElement).toHaveTextContent('?page=2');
    });

    it('updates URL query parameter when Last page button is clicked', async () => {
      render(
        <MemoryRouter>
          <MockMainPageWithQuery />
        </MemoryRouter>
      );
      const last = await screen.findByRole('button', { name: 'Last' });

      fireEvent.click(last);

      const destinationElement = await screen.findByTestId('destination');
      expect(destinationElement).toHaveTextContent('?page=20');
    });

    it('updates URL query parameter when Prev page button is clicked', async () => {
      render(
        <MemoryRouter initialEntries={['/?page=4']}>
          <MockMainPageWithQuery />
        </MemoryRouter>
      );
      const prev = await screen.findByRole('button', { name: 'Prev' });

      fireEvent.click(prev);

      const destinationElement = await screen.findByTestId('destination');
      expect(destinationElement).toHaveTextContent('?page=3');
    });

    it('updates URL query parameter when First page button is clicked', async () => {
      render(
        <MemoryRouter initialEntries={['/?page=4']}>
          <MockMainPageWithQuery />
        </MemoryRouter>
      );
      const first = await screen.findByRole('button', { name: 'First' });

      fireEvent.click(first);

      const destinationElement = await screen.findByTestId('destination');
      expect(destinationElement).toHaveTextContent('?page=1');
    });
  });
});
