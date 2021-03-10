/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import UpAndDown from "./view/UpAndDown";

import { createStore } from "redux";
import redux from "./src/redux/reducers/index"
import { Provider } from "react-redux";
const store = createStore(redux);

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <UpAndDown />
    </Provider>
    );
  }
}
export default App;
