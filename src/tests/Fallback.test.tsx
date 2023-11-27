import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

import { store } from '../store/store';
import MainPage from '../../pages/index';
import { mockContent4Cards } from '../mocks/mockdata';
import Fallback from '../components/Fallback/Fallback';

describe('Fallback', () => {
  it('shows Fallback UI when an error is thrown', () => {
    render(
      <Provider store={store}>
        <ErrorBoundary>
          <MainPage data={mockContent4Cards} />
        </ErrorBoundary>
      </Provider>
    );

    const errorButton = screen.getByRole('button', { name: 'Test Error' });

    fireEvent.click(errorButton);

    const fallback = screen.getByText('Test Error button clicked');

    expect(fallback).toBeVisible();
  });

  it('shows Fallback UI when an error is thrown', () => {
    render(
      <Provider store={store}>
        <Fallback />
      </Provider>
    );

    const header = screen.getByRole('heading', { level: 1 });

    expect(header).toHaveTextContent('Something went wrong...');
  });
});
