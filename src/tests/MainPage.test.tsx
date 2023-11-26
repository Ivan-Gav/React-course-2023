import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import mockRouter from 'next-router-mock';

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
    it('updates URL query parameter when Next page button is clicked', async () => {
      mockRouter.push('/');
      render(<MockMainPage />);
      const next = await screen.findByRole('button', { name: 'Next' });

      fireEvent.click(next);

      const path = mockRouter.asPath;
      expect(path).toMatch(/page=2/);
    });

    it('updates URL query parameter when Last page button is clicked', async () => {
      mockRouter.push('/');
      render(<MockMainPage />);
      const last = await screen.findByRole('button', { name: 'Last' });

      fireEvent.click(last);

      const path = mockRouter.asPath;
      expect(path).toMatch(/page=20/);
    });

    it('updates URL query parameter when Prev page button is clicked', async () => {
      mockRouter.push('/?page=7');
      render(<MockMainPage />);
      const prev = await screen.findByRole('button', { name: 'Prev' });

      fireEvent.click(prev);

      const path = mockRouter.asPath;
      expect(path).toMatch(/page=6/);
    });

    it('updates URL query parameter when First page button is clicked', async () => {
      mockRouter.push('/?page=7');
      render(<MockMainPage />);
      const first = await screen.findByRole('button', { name: 'First' });

      fireEvent.click(first);

      const path = mockRouter.asPath;
      expect(path).toMatch(/page=1/);
    });
  });

  describe('when Page Size settings are changed', () => {
    it('updates URL query parameter when News per Page setting is changed', () => {
      mockRouter.push('/');
      render(<MockMainPage />);
      const next = screen.getByTestId('pagesize');

      fireEvent.change(next, { target: { value: '6' } });
      let path = mockRouter.asPath;

      expect(path).toMatch(/pageSize=6/);

      fireEvent.change(next, { target: { value: '2' } });
      path = mockRouter.asPath;

      expect(path).toMatch(/pageSize=2/);

      fireEvent.change(next, { target: { value: '8' } });
      path = mockRouter.asPath;

      expect(path).toMatch(/pageSize=8/);
    });
  });
});
