import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/routes/rootNavigator";

import { Provider } from "react-redux";
import store from "./src/public/redux/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <AppNavigator />
        </React.Fragment>
      </Provider>
    );
  }
}
