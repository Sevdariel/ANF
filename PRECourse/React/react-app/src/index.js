import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StatelessApp from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <StatelessApp/>
  </React.StrictMode>,
  document.getElementById('root')
);
