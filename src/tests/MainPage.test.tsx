import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import MainPage from '../pages/MainPage';

const MockMainPage = () => {
  return (
    <MemoryRouter>
      <MainPage />
    </MemoryRouter>
  );
};

describe('Search', () => {
  let bufferLS = '';

  beforeAll(() => {
    bufferLS = localStorage.getItem('searchQuery') || '';
  });

  afterAll(() => {
    if (bufferLS) {
      localStorage.setItem('searchQuery', bufferLS);
    } else {
      localStorage.removeItem('searchQuery');
    }
  });

  it('saves the entered value to the local storage on clicking the Search button', () => {
    const testQuerySaving = 'Test search query loading';
    render(<MockMainPage />);
    const serchField = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', { name: /search/i });

    fireEvent.change(serchField, { target: { value: testQuerySaving } });
    fireEvent.click(searchButton);
    const savedQuery = localStorage.getItem('searchQuery');
    expect(savedQuery).toBe(testQuerySaving);
  });

  it('retrieves the value from the local storage and sets it in the Search input ', () => {
    const testQueryLoading = 'Test search query loading';
    localStorage.setItem('searchQuery', testQueryLoading);

    render(<MockMainPage />);
    const serchField = screen.getByRole('textbox');
    expect(serchField).toHaveValue(testQueryLoading);
  });
});
