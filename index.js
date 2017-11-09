import { AppRegistry } from 'react-native';
import App from './App';

import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './app/reducers'



// fetch logger
global._fetch = fetch;
global.fetch = function (uri, options, ...args) {
 return global._fetch(uri, options, ...args).then((response) => {
   console.log('Fetch', { request: { uri, options, ...args }, response });
   return response;
 });
};

const loggerMiddleware = createLogger()

const store = createStore(
 reducer,
 applyMiddleware(
   thunkMiddleware,
   loggerMiddleware
 )
)


const nomnomapp = () => (
  <Provider store={store}>
    <App {...this.props} />
  </Provider>
)


AppRegistry.registerComponent('NomNomApp', () => nomnomapp);
