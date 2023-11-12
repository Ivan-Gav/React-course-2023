import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  it('renders h1: News Portal ', () => {
    render(<App />);
    const mainHeader = screen.getByText('News Portal');
    expect(mainHeader).toBeVisible();
  });

  it('shows a detailed card component by clicking a card', async () => {
    render(<App />);
    const newsSnippets = await screen.findAllByTestId('news-snippet');
    const newsSnippet = newsSnippets[0];
    const title = newsSnippet.firstChild?.textContent || '';

    fireEvent.click(newsSnippet);

    const newsDetails = await screen.findByTestId('news-details');

    expect(newsDetails).toHaveTextContent(title);
  });
});
