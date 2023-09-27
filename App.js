import React from 'react';
import {View, Text,LogBox} from 'react-native';
import Routing from './src/boot/routing';
import { GestureHandlerRootView } from "react-native-gesture-handler";

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={{flex: 1}}>
      <Routing  />
    </View>
    </GestureHandlerRootView>
  );
};

export default App;
