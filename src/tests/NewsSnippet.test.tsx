import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';

import NewsSnippet from '../components/NewsSnippet/NewsSnippet';
// import { mockArticle } from '../mocks/mockdata';
import NewsApiArticle from '../interface/newsapiarticle';

const mockArticle: NewsApiArticle = {
  source: {
    id: 'reuters',
    name: 'Reuters',
  },
  author: 'test author',
  title: 'Test title',
  description: 'test description',
  url: 'https://www.test.com/',
  urlToImage: 'https://www.test.com/testimg.jpg',
  publishedAt: '2023-11-09T11:54:00Z',
  content: 'test content',
};

const MockNewsSnippet = (props: NewsApiArticle) => {
  return (
    <MemoryRouter initialEntries={['/']}>
      <NewsSnippet newsItem={props} key="testkey" />
    </MemoryRouter>
  );
};

describe('NewsSnippet', () => {
  it('renders the relevant card title', () => {
    render(<MockNewsSnippet {...mockArticle} />);
    const title = screen.getByRole('heading', { level: 4 });

    expect(title).toHaveTextContent(mockArticle.title);
  });

  it('renders the relevant card source name', () => {
    render(<MockNewsSnippet {...mockArticle} />);
    const sourceTag = screen.getByText(`Source: ${mockArticle.source.name}`);

    expect(sourceTag).toBeVisible();
  });

  it('renders the relevant card date', () => {
    render(<MockNewsSnippet {...mockArticle} />);
    const dateTag = screen.getByText(
      `Date: ${mockArticle.publishedAt.slice(0, 10)}`
    );

    expect(dateTag).toBeVisible();
  });

  it('navigates to a detailed card route when clicked', () => {
    const MockNewsSnippetWithNavigation = (props: NewsApiArticle) => {
      const location = useLocation();
      return (
        <>
          <Routes>
            <Route
              path="/"
              element={<NewsSnippet newsItem={props} key="testkey" />}
            />
            <Route
              path="*"
              element={<div data-testid="destination">{location.pathname}</div>}
            />
          </Routes>
        </>
      );
    };

    render(
      <MemoryRouter initialEntries={['/']}>
        <MockNewsSnippetWithNavigation {...mockArticle} />
      </MemoryRouter>
    );
    const snippet = screen.getByTestId('news-snippet');
    const pathname = encodeURIComponent(mockArticle.title.trim());

    fireEvent.click(snippet);
    const destinationElement = screen.getByTestId('destination');

    expect(destinationElement).toHaveTextContent(pathname);
  });
});
