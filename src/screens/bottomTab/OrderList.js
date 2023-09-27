import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const OrderList = () => {
    return (
        <>
        <View style={{marginTop:10, alignSelf:'center', marginTop:30}}>
             <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>My Orders</Text>
        </View>
        <ScrollView>
        <View style={{alignSelf:'center', marginTop:20, width:330, height:100, backgroundColor:'#fff', borderRadius:10, flexDirection:'column', justifyContent:'space-evenly'}}>
            <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/apple.png')} style={{height:80, width:70, marginLeft:10}}/>
                <View style={{alignItems:'center', marginLeft:20}}>
                <Text style={{fontSize:30, color:'#04B64A'}}>Apple</Text>   
                <Text style={{marginTop:3, fontSize:15}}>per kg</Text>
                <Text style={{fontSize:15, marginBottom:5}}>1*Rs. 500</Text>
                </View>   
                <View style={{paddingLeft:40, marginTop:50}}>
                <Icon name = 'checkmark-done-sharp' size ={20} color='#04B64A'/>
                </View>
                <Text style={{paddingLeft:10, marginTop:50, color:'#3D0C11'}}>Delivered</Text>
            </View>
        </View>
        <View style={{alignSelf:'center', marginTop:20, width:330, height:100, backgroundColor:'#fff', borderRadius:10, flexDirection:'column', justifyContent:'space-evenly'}}>
            <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/drinl.png')} style={{height:80, width:70, marginLeft:10}}/>
                <View style={{alignItems:'center', marginLeft:20}}>
                <Text style={{fontSize:30, color:'#04B64A'}}>Drinks</Text>   
                <Text style={{marginTop:3, fontSize:15}}>1.5 ltr</Text>
                <Text style={{fontSize:15, marginBottom:5}}>1*Rs. 500</Text>
                </View>   
                <View style={{paddingLeft:40, marginTop:50}}>
                <Icon name = 'checkmark-done-sharp' size ={20} color='#04B64A'/>
                </View>
                <Text style={{paddingLeft:10, marginTop:50, color:'#3D0C11'}}>Delivered</Text>
            </View>
        </View>
        <View style={{alignSelf:'center', marginTop:20, width:330, height:100, backgroundColor:'#fff', borderRadius:10, flexDirection:'column', justifyContent:'space-evenly'}}>
            <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/egg.png')} style={{height:80, width:70, marginLeft:10}}/>
                <View style={{alignItems:'center', marginLeft:20}}>
                <Text style={{fontSize:30, color:'#04B64A'}}>Eggs</Text>   
                <Text style={{marginTop:3, fontSize:15}}>dozen</Text>
                <Text style={{fontSize:15, marginBottom:5}}>1*Rs. 500</Text>
                </View>   
                <View style={{paddingLeft:40, marginTop:50}}>
                <Icon name = 'checkmark-done-sharp' size ={20} color='#04B64A'/>
                </View>
                <Text style={{paddingLeft:10, marginTop:50, color:'#3D0C11'}}>Delivered</Text>
            </View>
        </View>
        <View style={{alignSelf:'center', marginTop:20, width:330, height:100, backgroundColor:'#fff', borderRadius:10, flexDirection:'column', justifyContent:'space-evenly'}}>
            <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/fruit.png')} style={{height:80, width:70, marginLeft:10}}/>
                <View style={{alignItems:'center', marginLeft:20}}>
                <Text style={{fontSize:30, color:'#04B64A'}}>Fruits</Text>   
                <Text style={{marginTop:3, fontSize:15}}>per kg</Text>
                <Text style={{fontSize:15, marginBottom:5}}>1*Rs. 500</Text>
                </View>   
                <View style={{paddingLeft:40, marginTop:50}}>
                <Icon name = 'checkmark-done-sharp' size ={20} color='#04B64A'/>
                </View>
                <Text style={{paddingLeft:10, marginTop:50, color:'#3D0C11'}}>Delivered</Text>
            </View>
        </View>
        <View style={{alignSelf:'center', marginTop:20, width:330, height:100, backgroundColor:'#fff', borderRadius:10, flexDirection:'column', justifyContent:'space-evenly'}}>
            <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/orange.png')} style={{height:80, width:70, marginLeft:10}}/>
                <View style={{alignItems:'center', marginLeft:20}}>
                <Text style={{fontSize:25, color:'#04B64A'}}>Orange</Text>   
                <Text style={{marginTop:3, fontSize:15}}>per kg</Text>
                <Text style={{fontSize:15, marginBottom:5}}>1*Rs. 500</Text>
                </View>   
                <View style={{paddingLeft:40, marginTop:50}}>
                <Icon name = 'checkmark-done-sharp' size ={20} color='#04B64A'/>
                </View>
                <Text style={{paddingLeft:10, marginTop:50, color:'#3D0C11'}}>Delivered</Text>
            </View>
        </View>
        <View style={{alignSelf:'center', marginTop:20, width:330, height:100, backgroundColor:'#fff', borderRadius:10, flexDirection:'column', justifyContent:'space-evenly'}}>
            <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/pine.png')} style={{height:80, width:70, marginLeft:10}}/>
                <View style={{alignItems:'center', marginLeft:20}}>
                <Text style={{fontSize:20, color:'#04B64A'}}>Pineapple</Text>   
                <Text style={{marginTop:3, fontSize:15}}>per kg</Text>
                <Text style={{fontSize:15, marginBottom:5}}>1*Rs. 500</Text>
                </View>   
                <View style={{paddingLeft:40, marginTop:50}}>
                <Icon name = 'checkmark-done-sharp' size ={20} color='#04B64A'/>
                </View>
                <Text style={{paddingLeft:10, marginTop:50, color:'#3D0C11'}}>Delivered</Text>
            </View>
        </View>
        <View style={{alignSelf:'center', marginTop:20, width:330, height:100, backgroundColor:'#fff', borderRadius:10, flexDirection:'column', justifyContent:'space-evenly'}}>
            <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/apple.png')} style={{height:80, width:70, marginLeft:10}}/>
                <View style={{alignItems:'center', marginLeft:20}}>
                <Text style={{fontSize:30, color:'#04B64A'}}>Apple</Text>   
                <Text style={{marginTop:3, fontSize:15}}>per kg</Text>
                <Text style={{fontSize:15, marginBottom:5}}>1*Rs. 500</Text>
                </View>   
                <View style={{paddingLeft:40, marginTop:50}}>
                <Icon name = 'checkmark-done-sharp' size ={20} color='#04B64A'/>
                </View>
                <Text style={{paddingLeft:10, marginTop:50, color:'#3D0C11'}}>Delivered</Text>
            </View>
        </View>
        <View style={{alignSelf:'center', marginTop:20, width:330, height:100, backgroundColor:'#fff', borderRadius:10, flexDirection:'column', justifyContent:'space-evenly'}}>
            <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/egg.png')} style={{height:80, width:70, marginLeft:10}}/>
                <View style={{alignItems:'center', marginLeft:20}}>
                <Text style={{fontSize:30, color:'#04B64A'}}>Eggs</Text>   
                <Text style={{marginTop:3, fontSize:15}}>dozen</Text>
                <Text style={{fontSize:15, marginBottom:5}}>1*Rs. 500</Text>
                </View>   
                <View style={{paddingLeft:40, marginTop:50}}>
                <Icon name = 'checkmark-done-sharp' size ={20} color='#04B64A'/>
                </View>
                <Text style={{paddingLeft:10, marginTop:50, color:'#3D0C11'}}>Delivered</Text>
            </View>
        </View>
        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({})

export default OrderList;
