import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
// import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import NewsDetails from '../components/NewsDetails/NewsDetails';
import MainPage from '../../pages/index';
import { store } from '../store/store';

import {
  mockContent1Card,
  mockContent4CardsWithDetailsOpen,
} from '../mocks/mockdata';

describe('NewsDetails', () => {
  if (!mockContent1Card.articles) throw new Error('Incorrect mock data');

  // const q = encodeURIComponent(mockContent1Card.articles[0].title.trim());
  const article = mockContent1Card.articles[0];

  // const WrappedNewsDetails = () => {
  //   return (
  //     <Provider store={store}>
  //       {/* <MemoryRouter initialEntries={['/', `/${q}`]}>
  //         <Routes>
  //           <Route path="/:article" element={<NewsDetails />} />
  //           <Route path="/" element={<div>previous page</div>} />
  //         </Routes>
  //       </MemoryRouter> */}
  //     </Provider>
  //   );
  // };

  describe('displays correctly the detailed card data', () => {
    it('displays the Card', async () => {
      render(<NewsDetails {...article} />);
      const newsDetails = await screen.findByTestId('news-details');

      expect(newsDetails).toBeVisible();
    });

    it('displays the Title', async () => {
      render(<NewsDetails {...article} />);
      const newsDetailsTitle = await screen.findByRole('heading', { level: 4 });

      expect(newsDetailsTitle).toHaveTextContent(article.title);
    });

    it('displays the Source', async () => {
      render(<NewsDetails {...article} />);
      const newsDetailsSource = await screen.findByText(
        `Source: ${article.source.name}`
      );

      expect(newsDetailsSource).toBeVisible();
    });

    it('displays the Author', async () => {
      render(<NewsDetails {...article} />);
      const newsDetailsAuthor = await screen.findByText(
        `Author: ${article.author}`
      );

      expect(newsDetailsAuthor).toBeVisible();
    });

    it('displays the Date', async () => {
      render(<NewsDetails {...article} />);
      const newsDetailsDate = await screen.findByText(
        `Date: ${article.publishedAt.slice(0, 10)}`
      );

      expect(newsDetailsDate).toBeVisible();
    });

    it('displays the Image', async () => {
      render(<NewsDetails {...article} />);
      const newsDetailsImg = await screen.findByRole('img');

      expect(newsDetailsImg).toBeVisible();
    });

    it('displays the Description', async () => {
      render(<NewsDetails {...article} />);
      const newsDetailsDescription = await screen.findByText(
        article.description ? article.description : "you won't finf it"
      );

      expect(newsDetailsDescription).toBeVisible();
    });

    it('displays the Link to the Original Article', async () => {
      render(<NewsDetails {...article} />);
      const newsDetailsLink = await screen.findByRole('link', {
        name: `Read full article on ${article.source.name}`,
      });

      expect(newsDetailsLink).toHaveAttribute('href', article.url);
    });
  });

  it('displays the card data on the main page', async () => {
    render(
      <Provider store={store}>
        <MainPage data={mockContent4CardsWithDetailsOpen} />
      </Provider>
    );
    const newsDetails = await screen.findByTestId('news-details');

    expect(newsDetails).toBeVisible();
  });
});
