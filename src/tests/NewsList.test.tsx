import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import NewsList from '../components/NewsList/NewsList';
import {
  mockContent4Cards,
  mockContent10Cards,
  mockContentNoCards,
} from '../mocks/mockdata';

describe('NewsList', () => {
  it('renders the specified number(4) of cards', () => {
    render(<NewsList {...mockContent4Cards} />);

    const newsSnippets = screen.getAllByTestId('news-snippet');
    expect(newsSnippets.length).toBe(4);
  });

  it('renders the specified number(10) of cards', () => {
    render(<NewsList {...mockContent10Cards} />);

    const newsSnippets = screen.getAllByTestId('news-snippet');
    expect(newsSnippets.length).toBe(10);
  });

  it('renders no cards if there are no articles in incoming array', () => {
    render(<NewsList {...mockContentNoCards} />);

    const newsSnippets = screen.queryAllByTestId('news-snippet');
    expect(newsSnippets.length).toBe(0);
  });

  it('shows an appropriate message if no cards are present', () => {
    render(<NewsList {...mockContentNoCards} />);

    const message = screen.getByText('Nothing found');
    expect(message).toBeVisible();
  });
});
