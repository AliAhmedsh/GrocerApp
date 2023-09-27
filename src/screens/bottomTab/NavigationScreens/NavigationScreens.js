import React from "react";
import {View, StyleSheet, Text, Image, ImageBackground, Button} from 'react-native';
import Stars from 'react-native-stars';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function Screen1({ navigation }) {
    return (
      <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../../assets/images/apple1.png')}
        resizeMode="cover"
        style={{width: '100%', height: 300}}></ImageBackground>
      <View>
        <Text
          style={{
            marginLeft: 20,
            fontSize: 35,
            fontWeight: '900',
            color: 'black',
          }}>
          Apple Fruit
        </Text>
      </View>
      <View style={{color:'red'}}>
        <Stars
          half={true}
          default={2.5}
          spacing={5}
          starSize={70}
          count={5}
          fullStar={<MaterialIcons name="star-rate" />}
          emptyStar={<MaterialIcons name="star-outline" />}
          halfStar={<MaterialIcons name="star-half" />}
        />
      </View>
    </View>
    );
  }

  function Screen2({ navigation }) {
    return (
      <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../../assets/images/apple1.png')}
        resizeMode="cover"
        style={{width: '100%', height: 300}}></ImageBackground>
      <View>
        <Text
          style={{
            marginLeft: 20,
            fontSize: 35,
            fontWeight: '900',
            color: 'black',
          }}>
          Apple Fruit
        </Text>
      </View>
      <View style={{color:'red'}}>
        <Stars
          half={true}
          default={2.5}
          spacing={5}
          starSize={70}
          count={5}
          fullStar={<MaterialIcons name="star-rate" />}
          emptyStar={<MaterialIcons name="star-outline" />}
          halfStar={<MaterialIcons name="star-half" />}
        />
      </View>
    </View>
    );
  }
  
  export { Screen1, Screen2 };