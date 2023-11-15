import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NewsDetails from './components/NewsDetails/NewsDetails';
import Fallback from './components/Fallback/Fallback';

const router = createBrowserRouter([
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
