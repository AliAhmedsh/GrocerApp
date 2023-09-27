import React, {useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import AuthNavigation from './authNavigation/authNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomStack from './bottomStack/bottomStack';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

const Routing = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthNavigation">
        <Stack.Screen name="AuthNavigation" component={AuthNavigation} options={{headerShown: false}} />
        <Stack.Screen name="bottomStack" component={BottomStack} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
  
};

export default Routing;
