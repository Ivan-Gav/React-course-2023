import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.tsx';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';
import Fallback from './components/Fallback/Fallback.tsx';
import { store } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ErrorBoundary fallback={<Fallback />}>
      <App />
    </ErrorBoundary>
  </Provider>
);
