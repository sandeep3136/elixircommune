import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Favicon from 'react-favicon';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

  <React.StrictMode>
    <Favicon url="https://res.cloudinary.com/elixircloud/image/upload/v1608280192/fav_qcz3b7.png"/>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
