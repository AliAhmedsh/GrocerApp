import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const AppLoader = () => {
    return (
        <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'#fff', zIndex:1}}>
            <LottieView source={require('../assets/loader.json')} autoPlay loop />
        </View>
    );
}

const styles = StyleSheet.create({})

export default AppLoader;
