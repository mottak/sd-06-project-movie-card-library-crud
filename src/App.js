import React from 'react';
import Provider from './Context/Provider';
import { Routes } from './components';

function App() {

  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
