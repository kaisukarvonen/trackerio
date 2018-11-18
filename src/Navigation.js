import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Main from './screens/Main';
import Activity from './screens/Activity';
import SignIn from './screens/SignIn';
import Loading from './screens/Loading';
import Settings from './screens/Settings';
import * as styles from './styles';

const icons = {
  Aktiviteetit: ({ tintColor }) => <Icon name="list-ul" size={22} color={tintColor} />,
  Lajit: ({ tintColor }) => <Icon name="futbol-o" size={22} color={tintColor} />,
  Kategoriat: ({ tintColor }) => <Icon name="tags" size={22} color={tintColor} />
};

const App = createStackNavigator({
  Main,
  Activity
});

const Tabs = createBottomTabNavigator(
  {
    Aktiviteetit: { screen: App },
    Lajit: { screen: Settings },
    Kategoriat: { screen: App }
  },
  {
    tabBarOptions: styles.tabBarOptions,
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
  { initialRouteName: 'Loading' }
);
