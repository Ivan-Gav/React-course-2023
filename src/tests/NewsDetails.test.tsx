import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import NewsDetails from '../components/NewsDetails/NewsDetails';
import { store } from '../store/store';

import { mockContent1Card } from '../mocks/mockdata';

describe('NewsDetails', () => {
  if (!mockContent1Card.articles) throw new Error('Incorrect mock data');

  const q = encodeURIComponent(mockContent1Card.articles[0].title.trim());
  const article = mockContent1Card.articles[0];

  const WrappedNewsDetails = () => {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={['/', `/${q}`]}>
          <Routes>
            <Route path="/:article" element={<NewsDetails />} />
            <Route path="/" element={<div>previous page</div>} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  };

  it('displays the loading indicator while fetching data', () => {
    render(<WrappedNewsDetails />);
    const loader = screen.getByRole('heading', { level: 1 });

    expect(loader).toHaveTextContent(
      /.*Loading\(no fancy CSS spinners here\).*/i
    );
  });

  describe('displays correctly the detailed card data', () => {
    it('displays the Card', async () => {
      render(<WrappedNewsDetails />);
      const newsDetails = await screen.findByTestId('news-details');

      expect(newsDetails).toBeVisible();
    });

    it('displays the Title', async () => {
      render(<WrappedNewsDetails />);
      const newsDetailsTitle = await screen.findByRole('heading', { level: 4 });

      expect(newsDetailsTitle).toHaveTextContent(article.title);
    });

    it('displays the Source', async () => {
      render(<WrappedNewsDetails />);
      const newsDetailsSource = await screen.findByText(
        `Source: ${article.source.name}`
      );

      expect(newsDetailsSource).toBeVisible();
    });

    it('displays the Author', async () => {
      render(<WrappedNewsDetails />);
      const newsDetailsAuthor = await screen.findByText(
        `Author: ${article.author}`
      );

      expect(newsDetailsAuthor).toBeVisible();
    });

    it('displays the Date', async () => {
      render(<WrappedNewsDetails />);
      const newsDetailsDate = await screen.findByText(
        `Date: ${article.publishedAt.slice(0, 10)}`
      );

      expect(newsDetailsDate).toBeVisible();
    });

    it('displays the Image', async () => {
      render(<WrappedNewsDetails />);
      const newsDetailsImg = await screen.findByRole('img');

      expect(newsDetailsImg).toBeVisible();
    });

    it('displays the Description', async () => {
      render(<WrappedNewsDetails />);
      const newsDetailsDescription = await screen.findByText(
        article.description ? article.description : "you won't finf it"
      );

      expect(newsDetailsDescription).toBeVisible();
    });

    it('displays the Link to the Original Article', async () => {
      render(<WrappedNewsDetails />);
      const newsDetailsLink = await screen.findByRole('link', {
        name: `Read full article on ${article.source.name}`,
      });

      expect(newsDetailsLink).toHaveAttribute('href', article.url);
    });
  });

  it('closes the component by clicking the close button', async () => {
    render(<WrappedNewsDetails />);
    const newsDetails = await screen.findByTestId('news-details');
    const close = screen.getByRole('button', { name: 'Close' });

    fireEvent.click(close);

    expect(newsDetails).not.toBeInTheDocument();
  });
});
