import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const Profile = () => {
    return (
        <>
        <View style={{marginTop:10, alignSelf:'center', marginTop:30}}>
             <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>Personal Details</Text>
        </View>
        <ScrollView>
        <View style={{alignSelf:'center', marginTop:20, width:330, height:170, backgroundColor:'#e6e6e6', borderRadius:10, flexDirection:'row'}}>
            <Image source={require('../../assets/images/userProfile.png')} style={{height:100, width:100, marginLeft:30, marginTop:20}}/>
            <View style={{paddingLeft:10, marginTop:20}}>
            <Text style={{fontSize:24, color:'#04B64A',marginLeft:10}}>AAAA SH.</Text>
            <Text style={{marginLeft:10, marginTop:10}}>aash355@gmail.com</Text>
            <View style={{borderBottomWidth:1, borderBottomColor:'black', width:'80%', alignSelf:'center', marginTop:5}}></View>
            <Text style={{marginLeft:12, marginTop:10}}>03xxxxxxxxxxxx</Text>
            <View style={{borderBottomWidth:1, borderBottomColor:'black', width:'80%', alignSelf:'center', marginTop:5}}></View>
            <Text style={{marginLeft:12, marginTop:10}}>Street. 1, block A, Lahore</Text>
            </View>
        </View>
        <View style={{flexDirection:'row'}}>
        <View style={{marginLeft:10,marginTop:30, width:80, height:60, backgroundColor:'#e6e6e6', borderRadius:10, alignItems:'center'}}>
            <View style={{marginTop:10}}>
                <Icon name='bookmark-outline' size={25} style={{alignSelf:'center',fontWeight:'bold', color:'black'}}/>
                <Text style={{alignSelf:'center', fontWeight:'bold', color:'black'}}>Bookmarks</Text>
            </View>
        </View>
        <View style={{marginLeft:10,marginTop:30, width:80, height:60, backgroundColor:'#e6e6e6', borderRadius:10, alignItems:'center'}}>
            <View style={{marginTop:10}}>
            <Icon name='notifications-outline' size={25} style={{alignSelf:'center',fontWeight:'bold', color:'black'}}/>
                <Text style={{alignSelf:'center', fontWeight:'bold', color:'black'}}>Notifications</Text>
            </View>
        </View>
        <View style={{marginLeft:10,marginTop:30, width:80, height:60, backgroundColor:'#e6e6e6', borderRadius:10, alignItems:'center'}}>
            <View style={{marginTop:10}}>
            <Icon name='settings-outline' size={25} style={{alignSelf:'center',fontWeight:'bold', color:'black'}}/>
                <Text style={{alignSelf:'center', fontWeight:'bold', color:'black'}}>Settings</Text>
            </View>
        </View>
        <View style={{marginLeft:10,marginTop:30, width:80, height:60, backgroundColor:'#e6e6e6', borderRadius:10, alignItems:'center'}}>
            <View style={{marginTop:10}}>
            <Icon name='wallet-outline' size={25} style={{alignSelf:'center',fontWeight:'bold', color:'black'}}/>
                <Text style={{alignSelf:'center', fontWeight:'bold', color:'black'}}>Payments</Text>
            </View>
        </View>
        </View>
        <TouchableOpacity>
        <View style={{alignSelf:'center', marginTop:30, width:330, height:50, backgroundColor:'#e6e6e6', borderRadius:20, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{marginLeft:20, fontSize:20, fontWeight:'bold', color: '#04B64A'}}>Your Orders</Text>
            <Icon name='chevron-forward-outline' size={35} color={'#04B64A'}/>
        </View>  
        </TouchableOpacity> 
        <TouchableOpacity>
        <View style={{alignSelf:'center', marginTop:10, width:330, height:50, backgroundColor:'#e6e6e6', borderRadius:20, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{marginLeft:20, fontSize:20, fontWeight:'bold', color: '#04B64A'}}>FeedBack & Refunds</Text>
            <Icon name='chevron-forward-outline' size={35} color={'#04B64A'}/>
        </View>   
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{alignSelf:'center', marginTop:10, width:330, height:50, backgroundColor:'#e6e6e6', borderRadius:20, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{marginLeft:20, fontSize:20, fontWeight:'bold', color: '#04B64A'}}>Help</Text>
            <Icon name='chevron-forward-outline' size={35} color={'#04B64A'}/>
        </View>   
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{marginTop:25, marginLeft:20}}>
             <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>Send FeedBack</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{marginTop:10, marginLeft:20}}>
             <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>Report an Emergency</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{marginTop:10, marginLeft:20}}>
             <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>Rate US</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{marginTop:10, marginLeft:20}}>
             <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>Log Out</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{ marginTop:30, width:100, height:40, backgroundColor:'#e6e6e6', borderRadius:20, flexDirection:'row', marginLeft:20, marginBottom:60}}>
        <Icon name='information-circle' size={30} style={{marginTop:3,marginLeft:3, fontWeight:'bold', color:'black'}}  />
        <Text style={{fontSize:20,marginTop:3,marginLeft:3, fontWeight:'bold', color:'black'}}>About</Text>
        </View>
        </TouchableOpacity>
        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({})

export default Profile;
