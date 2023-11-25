import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
// import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { mockContent4Cards } from '../mocks/mockdata';

import MainPage from '../../pages/index';
import { store } from '../store/store';

const MockMainPage = () => {
  return (
    <Provider store={store}>
      <MainPage data={mockContent4Cards} />
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
      // const location = useLocation();
      const router = useRouter();
      return (
        <Provider store={store}>
          <MainPage data={mockContent4Cards} />
          <div data-testid="destination">{router.query.page}</div>
        </Provider>
      );
    };

    it('updates URL query parameter when Next page button is clicked', async () => {
      render(<MockMainPageWithQuery />);
      const next = await screen.findByRole('button', { name: 'Next' });

      fireEvent.click(next);

      const destinationElement = await screen.findByTestId('destination');
      expect(destinationElement).toHaveTextContent('2');
    });

    it('updates URL query parameter when Last page button is clicked', async () => {
      render(<MockMainPageWithQuery />);
      const last = await screen.findByRole('button', { name: 'Last' });

      fireEvent.click(last);

      const destinationElement = await screen.findByTestId('destination');
      expect(destinationElement).toHaveTextContent('20');
    });

    it('updates URL query parameter when Prev page button is clicked', async () => {
      render(<MockMainPageWithQuery />);
      const prev = await screen.findByRole('button', { name: 'Prev' });

      fireEvent.click(prev);

      const destinationElement = await screen.findByTestId('destination');
      expect(destinationElement).toHaveTextContent('19');
    });

    it('updates URL query parameter when First page button is clicked', async () => {
      render(<MockMainPageWithQuery />);
      const first = await screen.findByRole('button', { name: 'First' });

      fireEvent.click(first);

      const destinationElement = await screen.findByTestId('destination');
      expect(destinationElement).toHaveTextContent('1');
    });
  });
});
