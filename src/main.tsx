import { Amplify } from 'aws-amplify';
import config from 'configs/aws-config.ts';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import ErrorBoundary from './components/UI/ErrorBoundary';
import './styles/fonts.css';
import './styles/globals.scss';

Amplify.configure(config);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
