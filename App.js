
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './Login';
import Router from './Router';
import { StackNavigator } from 'react-navigation';
 
 
export default App = StackNavigator(
{
 
 Login: {
    screen: Login,
  navigationOptions:{
    header:null
  },
   },
 
 Router: { 
   screen: Router,
  navigationOptions:{
    header:null
  }, }
 
 
});