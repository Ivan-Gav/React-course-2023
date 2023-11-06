import { Component, ErrorInfo, ReactNode } from 'react';

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

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
