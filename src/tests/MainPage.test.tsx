import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';

import MainPage from '../pages/MainPage';
import { store } from '../store/store';

const MockMainPage = () => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    </Provider>
  );
};
describe('MainPage', () => {
  describe('when Search component is used', () => {
    it('shows the entered value in the "Search for" header', async () => {
      const testQuerySaving = 'Test search query';
      render(<MockMainPage />);
      const searchField = screen.getByRole('textbox');
      const searchButton = screen.getByRole('button', { name: /search/i });

      fireEvent.change(searchField, { target: { value: testQuerySaving } });
      fireEvent.click(searchButton);

      const searchFor = await screen.findByText(/Search for.*/i);

      expect(searchFor).toHaveTextContent(testQuerySaving);
    });
  });

  describe('when Pagination is used', () => {
    const MockMainPageWithQuery = () => {
      const location = useLocation();
      return (
        <Provider store={store}>
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
        </Provider>
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
