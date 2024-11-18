import React from 'react';
import { MantineProvider } from '@mantine/core';
import Quotegenerator from './quotegenerator';
import '@mantine/core/styles.css';



function App() {
  return (
    <MantineProvider>
      <div>
      <Quotegenerator />
      </div>
    </MantineProvider>
  );
}

export default App;