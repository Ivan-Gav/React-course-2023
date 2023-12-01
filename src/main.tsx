import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App.tsx';
import ErrorPage from './page/ErrorPage.tsx';
import MainPage from './page/MainPage.tsx';
import UncontrolledForm from './page/UncontrolledForm.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'uncontrolled-component-form',
        element: <UncontrolledForm />,
      },
      {
        path: 'react-hook-form',
        element: <p>react-hook-form</p>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
