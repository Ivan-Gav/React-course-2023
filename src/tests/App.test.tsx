import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  it('renders h1: News Portal ', () => {
    render(<App />);
    const mainHeader = screen.getByText('News Portal');
    expect(mainHeader).toBeVisible();
  });

  // it('shows fallback UI when navigating to an invalid route ', () => {
  //   render(<App />);
  //   const mainHeader = screen.getByText('News Portal');
  //   expect(mainHeader).toBeVisible();
  // });
});
