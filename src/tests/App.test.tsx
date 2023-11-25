import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '../store/store';
import MainPage from '../../pages/index';
import { mockContent4Cards } from '../mocks/mockdata';

describe('MainPage', () => {
  it('renders h1: News Portal ', async () => {
    render(
      <Provider store={store}>
        <MainPage data={mockContent4Cards} />
      </Provider>
    );
    const mainHeader = await screen.findByText('News Portal');
    expect(mainHeader).toBeVisible();
  });
});
