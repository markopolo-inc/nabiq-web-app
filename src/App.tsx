import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import LoaderGif from 'src/assets/logo/logo.svg';
import Router from 'src/router';
import 'src/services/i18next';
import { persistor, store } from 'src/store';

import { PageViewTracker } from './router/PageViewTracker';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleComplete = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      handleComplete();
    } else {
      window.addEventListener('load', handleComplete);
      return () => window.removeEventListener('load', handleComplete);
    }
  }, []);

  if (loading) {
    return (
      <div className='absolute top-1/2 left-1/2 transform x -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col opacity-50'>
        <img src={LoaderGif} alt='Loading...' className='w-48' />
      </div>
    );
  }

  return (
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MantineProvider
            theme={{
              fontFamily: 'Geist, sans-serif',
            }}
          >
            <Toaster position='top-center' reverseOrder={false} />

            <BrowserRouter
              future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
              }}
            >
              <PageViewTracker />
              <Router />
            </BrowserRouter>
          </MantineProvider>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  );
};

export default App;
