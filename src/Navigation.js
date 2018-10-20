import React, { Component } from "react";
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import Main from "./screens/Main";
import Activity from "./screens/Activity";
import SignIn from "./screens/SignIn";
import Loading from "./screens/Loading";
import Settings from "./screens/Settings";

const icons = {
  Aktiviteetit: <Icon name="list" size={24} />,
  Settings: ({ tintColor }) => (
    <Icon name="md-settings" size={24} color={tintColor} />
  )
};

const App = createStackNavigator({
  Main,
  Activity
});

const Tabs = createBottomTabNavigator(
  {
    Aktiviteetit: { screen: App }
    // Settings
  },
  {
    tabBarOptions: {
      activeTintColor: "#000"
    },
    navigationOptions: ({ navigation }) => {
      const {
        state: { routeName }
      } = navigation;
      return {
        tabBarIcon: icons[routeName]
      };
    }
  }
);

export default createSwitchNavigator(
  {
    SignIn,
    Tabs,
    Loading
  },
  { initialRouteName: "Loading" }
);
