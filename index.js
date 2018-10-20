import { AppRegistry } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import App from "./src/App";
import { name as appName } from "./app.json";
import configureStore from "./src/configStore";

import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = configureStore();

const ReduxApp = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
