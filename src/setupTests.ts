import { afterAll, afterEach, beforeAll, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { server } from './mocks/server';

import { cleanup } from '@testing-library/react';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
  vi.mock('next/router', () => require('next-router-mock'));
});
afterAll(() => server.close());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
