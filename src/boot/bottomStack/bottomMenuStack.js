import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Store from '../../screens/bottomTab/Store';
import Home from '../../screens/bottomTab/Home';
import { Screen1 } from '../../screens/bottomTab/NavigationScreens/NavigationScreens';
import { Screen2 } from '../../screens/bottomTab/NavigationScreens/NavigationScreens';

const Stack = createStackNavigator();

const BottomMenuStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Store" component={Store} />
    </Stack.Navigator>
  );
};


export default BottomMenuStack;
