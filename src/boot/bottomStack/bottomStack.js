import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Home from '../../screens/bottomTab/Home';
import Store from '../../screens/bottomTab/Store';
import OrderList from '../../screens/bottomTab/OrderList';
import Cart from '../../screens/bottomTab/Cart';
import Profile from '../../screens/bottomTab/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Egy from 'react-native-vector-icons/Entypo';
import BottomMenuStack from './bottomMenuStack';

const Tab = createBottomTabNavigator();

const BottomStack = () => {
    return (
       
        <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#04B64A',
          inactiveTintColor: 'gray', 
        }}>
          <Tab.Screen name="Home" component={BottomMenuStack} 
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={'#04B64A'} size={size} />
            ),
          }}/>
          <Tab.Screen name="Store" component={Store} 
          options={{
            headerShown: false,
            tabBarLabel: 'Store',
            tabBarIcon: ({ colors, size }) => (
              <Egy name="shopping-bag" color={'#04B64A'} size={size} />
            ),
          }}/>
          <Tab.Screen name="OrderList" component={OrderList} 
          options={{
            headerShown: false,
            tabBarLabel: 'OrderList',
            tabBarIcon: ({ color, size }) => (
              <Icon name="list-circle-outline" color={'#04B64A'} size={31} />
            ),
          }}/>
          <Tab.Screen name="Cart" component={Cart} 
          options={{
            headerShown: false,
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color, size }) => (
              <Icon name="cart-outline" color={'#04B64A'} size={size} />
            ),
          }}/>
          <Tab.Screen name="Profile" component={Profile} 
          options={{
            headerShown: false,
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon name="person-circle-outline" color={'#04B64A'} size={size} />
            ),
          }}/>
        </Tab.Navigator>
       
    );
}

const styles = StyleSheet.create({})

export default BottomStack;
