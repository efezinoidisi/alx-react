import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import App from './/App/App';
import reportWebVitals from './reportWebVitals';
import { Map } from 'immutable';
import uiReducer, { initialState } from './reducers/uiReducer';
const store = createStore(uiReducer, Map(initialState));
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
