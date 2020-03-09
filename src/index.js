import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import { StateProvider } from './store';

import 'typeface-roboto';

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById('root'),
);
/* eslint-enable react/jsx-filename-extension */
