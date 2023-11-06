import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';
import Fallback from './components/Fallback/Fallback.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary fallback={<Fallback />}>
    <App />
  </ErrorBoundary>
);
