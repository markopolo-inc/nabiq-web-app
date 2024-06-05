import { MantineProvider } from '@mantine/core';
import Test from 'src/components/Features/Test';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

const App = () => {
  return (
    <MantineProvider>
      <div className='space-y-4 m-4'>
        <div className='display-xs text-gray-900 shadow-xl'>
          NABIQ - Your marketing captain!
        </div>

        <Test />
      </div>
    </MantineProvider>
  );
};

export default App;
