import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import App from '../App';
import { store } from '../store/store';

describe('App', () => {
  it('renders h1: News Portal ', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const mainHeader = screen.getByText('News Portal');
    expect(mainHeader).toBeVisible();
  });
});
