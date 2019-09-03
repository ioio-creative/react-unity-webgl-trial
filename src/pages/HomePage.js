import React from 'react';
import { Link } from 'react-router-dom';

import routes from 'globals/routes';
import ATargetBlank from 'components/ATargetBlank';

import logo from 'logo.svg';
import './HomePage.css';


function HomePage(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ATargetBlank
          className="App-link"
          href="https://reactjs.org"
        >
          Learn React
        </ATargetBlank>
        <Link className="App-link" to={routes.trials}>Trials</Link>
      </header>
    </div>
  );
}


export default HomePage;