import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.logErrorToAPI(error, errorInfo);
  }

  async logErrorToAPI(error: Error, errorInfo: ErrorInfo): Promise<void> {
    try {
      console.log({ error });
      console.log({ errorInfo });
      // @TODO: APIs call example
      // await axios.post("/api/log-error", {
      //     message: error.message,
      //     stack: error.stack,
      //     componentStack: errorInfo.componentStack,
      //     timestamp: new Date().toISOString(),
      // });
    } catch (logError) {
      console.error('Failed to log error to API:', logError);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='text-center py-10'>
          <h1 className='text-2xl font-bold text-red-600'>Something went wrong.</h1>
          <p className='text-gray-600'>Please try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
