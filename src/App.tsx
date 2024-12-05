import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Router from 'src/router';
import { persistor, store } from 'src/store';

import './styles/fonts.css';

const App = () => {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MantineProvider
            theme={{
              fontFamily: 'Geist',
            }}
          >
            <Toaster position='top-center' reverseOrder={false} />
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </MantineProvider>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  );
};

export default App;
