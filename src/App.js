import React from 'react';
import Routes from './routes';
import { Helmet } from 'react-helmet';



import './assets/styles/reset.css';
import './assets/styles/styles.css';

function App() {
  return (
    <div className="main">
      <Routes />
    </div>
  );
}

export default App;
