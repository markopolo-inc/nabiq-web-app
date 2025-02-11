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

  async logErrorToAPI(_error: Error, _errorInfo: ErrorInfo): Promise<void> {
    try {
      // console.log({ error });
      // console.log({ errorInfo });
      // @TODO: APIs call example
      // await axios.post("/api/log-error", {
      //     message: error.message,
      //     stack: error.stack,
      //     componentStack: errorInfo.componentStack,
      //     timestamp: new Date().toISOString(),
      // });
    } catch (logError) {
      // console.error('Failed to log error to API:', logError);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='text-center h-screen flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-bold text-red-600'>Something went wrong.</h1>
          <p className='text-gray-600'>Please try again later.</p>
          <pre className='mt-4 p-4 bg-gray-100 text-left overflow-auto max-w-2xl max-h-[300px] rounded-lg whitespace-pre-wrap'>
            {JSON.stringify(
              {
                error: {
                  message: this.state.error?.message,
                  name: this.state.error?.name,
                  stack: this.state.error?.stack,
                },
              },
              null,
              2,
            )}
          </pre>
          <button
            className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md'
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
