import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from 'components/App/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/rental_car">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
