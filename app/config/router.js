import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';

export const Drawer = DrawerNavigator(
  { //Router Config
    Drink: {screen: FirstScreen},
    Stats: {screen: SecondScreen}
  },
  { //Drawer Nav Config
    initialRouteName: 'Drink',
    drawerPosition: 'left',
    drawerWidth: 250
  }
);