import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux';
import Auth from './pages/Auth/Auth';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
