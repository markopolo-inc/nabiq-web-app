import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import Router from './router';
import { store } from './store';

const App = () => {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <MantineProvider>
          <Toaster position='top-center' reverseOrder={false} />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </MantineProvider>
      </Provider>
    </HelmetProvider>
  );
};

export default App;
