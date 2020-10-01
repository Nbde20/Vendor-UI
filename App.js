import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator,StackNavigator} from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';

import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import Home from './components/Home';
import ForgotPasswordScreen from './components/ForgotPasswordScreen';
import Addmenu from './components/Addmenu'

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  // Vendor: {
  //   screen: LoginScreen,
  // },
 
  // Signup: {
  //    screen: RegisterScreen
  // },
  // Home: {
  //   screen: HomeScreen
  // }
LoginScreen,
RegisterScreen,
ForgotPasswordScreen,
Home,
Addmenu,

 },
{
  initialRouteName: 'LoginScreen',
  headerMode: 'none',
}
);

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
