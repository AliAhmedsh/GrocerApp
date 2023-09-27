import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Cart = () => {
    return (
        <>
        <View style={{marginTop:10, alignSelf:'center', marginTop:30}}>
             <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>My Cart</Text>
        </View>
        <View style={{marginLeft:20,marginTop:20, width:320, height:200, backgroundColor:'#D5FFD0', borderRadius:10, shadowRadius:50, borderWidth:2, borderColor:'#04B64A'}}>
            <View style={{flexDirection:'row',padding:20, justifyContent:'space-between'}}>
                <Text style={{fontSize:20, color:'#3D0C11'}}>Sub Total</Text>
                <Text style={{fontSize:20, color:'#3D0C11', fontWeight:'bold'}}>Rs. 1060</Text>
            </View>
            <View style={{flexDirection:'row',padding:20, justifyContent:'space-between'}}>
                <Text style={{fontSize:20, color:'#3D0C11'}}>Delivery Charges</Text>
                <Text style={{fontSize:20, color:'#3D0C11', fontWeight:'bold'}}>Rs. 49</Text>
            </View>
            <View style={{borderBottomWidth:1, borderBottomColor:'#04B64A', width:'80%', alignSelf:'center'}}></View>
            <View style={{flexDirection:'row',padding:20, justifyContent:'space-between'}}>
                <Text style={{fontSize:20, color:'#3D0C11'}}>Your Saving</Text>
                <Text style={{fontSize:20, color:'#3D0C11', fontWeight:'bold'}}>Rs. 125</Text>
            </View>
        </View>
        <View style={{position:'absolute', bottom:0, backgroundColor:'#04B64A', width:'100%', height:50, flexDirection:'row',justifyContent:'space-between'}}> 
        <TouchableOpacity>
        <Text style={{marginLeft:10, marginTop:7, fontSize:25, fontWeight:'bold'}}>Checkout</Text> 
        </TouchableOpacity>
        <Text style={{marginRight:30, marginTop:7, fontSize:25}}>Rs. 1060</Text>
        </View>
        </>
    );
}

const styles = StyleSheet.create({})

export default Cart;
