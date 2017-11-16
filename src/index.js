import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './components/App';

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
