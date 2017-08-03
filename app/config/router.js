import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';

export const Drawer = DrawerNavigator(
  { //Router Config
    First: {path:'/', screen: FirstScreen},
    Second: {path:'/2nd', screen: SecondScreen}
  },
  { //Drawer Nav Config
    initialRouteName: 'First',
    drawerPosition: 'left',
    drawerWidth: 250
  }
);