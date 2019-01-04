/** @format */

import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import App from "./App";
import React from "react";
import store from "./src/store/store";
import { name as appName } from "./app.json";

const withRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => withRedux);
