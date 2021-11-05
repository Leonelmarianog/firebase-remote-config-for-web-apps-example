import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import initializeFirebase from './config/firebase/firebase';

initializeFirebase();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
