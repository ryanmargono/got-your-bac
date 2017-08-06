import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';

export const Drawer = DrawerNavigator(
  { //Router Config
    Stats: {screen: SecondScreen},
    Drink: {screen: FirstScreen},
  },
  { //Drawer Nav Config
    initialRouteName: 'Stats',
    drawerPosition: 'left',
    drawerWidth: 250
  }
);