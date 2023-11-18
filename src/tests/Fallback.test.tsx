import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import Fallback from '../components/Fallback/Fallback';
import MainPage from '../pages/MainPage';
import NewsDetails from '../components/NewsDetails/NewsDetails';

describe('Fallback', () => {
  it('shows Fallback UI when navigating to an invalid route', async () => {
    const TestEnv = () => {
      const router = createMemoryRouter(
        [
          {
            path: '/',
            element: <MainPage />,
            errorElement: <Fallback />,
            children: [
              {
                path: ':article',
                element: <NewsDetails />,
              },
            ],
          },
        ],
        { initialEntries: ['invalid-route'] }
      );

      return <RouterProvider router={router} />;
    };

    render(<TestEnv />);

    const elem = await screen.findByRole('heading', { level: 1 });

    expect(elem).toHaveTextContent(/Something went wrong/i);
  });
});
