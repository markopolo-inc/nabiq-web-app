import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import Router from './router';

const App = () => {
  return (
    <MantineProvider>
      <Toaster position='top-center' reverseOrder={false} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;
