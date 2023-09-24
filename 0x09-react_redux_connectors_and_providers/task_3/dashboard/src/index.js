import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import App from './/App/App';
import reportWebVitals from './reportWebVitals';
import { Map } from 'immutable';
import uiReducer, { initialState } from './reducers/uiReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(uiReducer, Map(initialState), applyMiddleware(thunk));

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
