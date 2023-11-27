import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import ErrorBoundary from '../src/components/ErrorBoundary/ErrorBoundary';
import '../src/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </Provider>
  );
}
