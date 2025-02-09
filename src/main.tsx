import { Amplify } from 'aws-amplify';
import config from 'configs/aws-config.ts';
import { PostHogProvider } from 'posthog-js/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import ErrorBoundary from './components/UI/ErrorBoundary';
import './styles/fonts.css';
import './styles/globals.scss';

Amplify.configure(config);

const posthogOptions = {
  api_host: import.meta.env.VITE_POSTHOG_PUBLIC_HOST,
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PostHogProvider apiKey={import.meta.env.VITE_POSTHOG_API_KEY} options={posthogOptions}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </PostHogProvider>
  </React.StrictMode>,
);
