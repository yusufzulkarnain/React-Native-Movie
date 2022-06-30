/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import AppContainer from './src/navigator/index';
import {Provider} from 'react-redux';
import {store} from './src/redux';
export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
