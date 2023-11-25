import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
// import { MemoryRouter, Outlet, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { useRouter } from 'next/router';

import NewsSnippet from '../components/NewsSnippet/NewsSnippet';
// import NewsDetails from '../components/NewsDetails/NewsDetails';
import { mockArticle } from '../mocks/mockdata';
// import { NewsApiArticle } from '../models/interfaces';
// import { store } from '../store/store';

// const MockNewsSnippet = (props: NewsApiArticle) => {
//   return (
//     <MemoryRouter initialEntries={['/']}>
//       <NewsSnippet newsItem={props} key="testkey" />
//     </MemoryRouter>
//   );
// };

describe('NewsSnippet', () => {
  describe('renders the relevant card data', () => {
    it('renders the relevant card title', () => {
      render(<NewsSnippet newsItem={mockArticle} key="testkey" />);
      const title = screen.getByRole('heading', { level: 4 });

      expect(title).toHaveTextContent(mockArticle.title);
    });

    it('renders the relevant card source name', () => {
      render(<NewsSnippet newsItem={mockArticle} key="testkey" />);
      const sourceTag = screen.getByText(`Source: ${mockArticle.source.name}`);

      expect(sourceTag).toBeVisible();
    });

    it('renders the relevant card date', () => {
      render(<NewsSnippet newsItem={mockArticle} key="testkey" />);
      const dateTag = screen.getByText(
        `Date: ${mockArticle.publishedAt.slice(0, 10)}`
      );

      expect(dateTag).toBeVisible();
    });
  });

  // it('opens a detailed card component when clicked', () => {
  //   render(<NewsSnippet newsItem={mockArticle} key="testkey" />);
  //   const snippet = screen.getByTestId('news-snippet');

  //   fireEvent.click(snippet);
  //   const path = window.location.search;
  //   const destinationPath = encodeURIComponent(mockArticle.title.trim());

  //   expect(path).toBe(`?article=${destinationPath}`);
  // });
});
