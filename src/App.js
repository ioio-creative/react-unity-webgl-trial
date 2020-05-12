import React from 'react';
import { HashRouter } from 'react-router-dom';

import Main from 'containers/Main';

import './App.css';


function App() {
  return (
    <HashRouter>
      <Main />
    </HashRouter>
  );
}


export default App;