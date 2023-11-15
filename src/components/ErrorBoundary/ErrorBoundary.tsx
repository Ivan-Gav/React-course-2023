import { Component, ReactNode } from 'react';

type EBProps = {
  fallback?: ReactNode;
  children?: ReactNode;
};

type EBState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<EBProps, EBState> {
  state: EBState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
