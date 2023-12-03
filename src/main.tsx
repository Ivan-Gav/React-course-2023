import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import MainPage from './pages/MainPage.tsx';
import UncontrolledForm from './pages/UncontrolledForm.tsx';
import ReactHookForm from './pages/ReactHookForm.tsx';

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
        element: <ReactHookForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
