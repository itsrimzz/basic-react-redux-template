// import react dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// import redux dependencies
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// import components
import App from './App';

const initialStoreData = {};
const store = configureStore(initialStoreData);

const route = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  route,
  document.getElementById('root')
);
