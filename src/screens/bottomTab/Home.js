import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';


const Home = () => {
  const navigation = useNavigation();

  const handleStore = () => {
    navigation.navigate('Screen1');
  };
  const handleOrange = () => {
    navigation.navigate('Screen2');
  };

  return (
    <>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
        <View
          style={{
            width: 300,
            height: 50,
            backgroundColor: '#CDCDCD',
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput style={{width: '85%'}} placeholder={'Search Here....'} />
          <TouchableOpacity>
            <Icon name="search-outline" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            paddingLeft: 24,
          }}>
          Deals
        </Text>
        <View
          style={{
            marginLeft: 26,
            marginTop: 20,
            width: 300,
            height: 150,
            backgroundColor: '#D5FFD0',
            borderRadius: 10,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{paddingLeft: 20}}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
                50% OFF
              </Text>
              <Text style={{marginTop: 10}}>On Grocery Combo Packs</Text>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  backgroundColor: '#04B64A',
                  width: 80,
                  height: 30,
                  justifyContent: 'center',
                  borderRadius: 5,
                  marginTop: 15,
                }}
                >
                <Text>Order Now</Text>
              </TouchableOpacity>
            </View>
            <View style={{paddingLeft: 20}}>
              <Image
                source={require('../../assets/images/veg.png')}
                style={{height: 80, width: 80}}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            paddingLeft: 24,
          }}>
          Categories
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              marginLeft: 26,
              marginTop: 20,
              width: 60,
              height: 60,
              backgroundColor: '#D5FFD0',
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <View style={{marginTop: 10}}>
              <Image
                source={require('../../assets/images/veg.png')}
                style={{height: 50, width: 50}}
              />
              <Text style={{alignSelf: 'center'}}>Veges</Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: 26,
              marginTop: 20,
              width: 60,
              height: 60,
              backgroundColor: '#D5FFD0',
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <View style={{marginTop: 10}}>
              <Image
                source={require('../../assets/images/fruit.png')}
                style={{height: 50, width: 50}}
              />
              <Text style={{alignSelf: 'center'}}>Fruits</Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: 26,
              marginTop: 20,
              width: 60,
              height: 60,
              backgroundColor: '#D5FFD0',
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <View style={{marginTop: 10}}>
              <Image
                source={require('../../assets/images/egg.png')}
                style={{height: 50, width: 50}}
              />
              <Text style={{alignSelf: 'center'}}>Eggs</Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: 26,
              marginTop: 20,
              width: 60,
              height: 60,
              backgroundColor: '#D5FFD0',
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <View style={{marginTop: 10}}>
              <Image
                source={require('../../assets/images/drinl.png')}
                style={{height: 50, width: 50}}
              />
              <Text style={{alignSelf: 'center'}}>Drinks</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop: 35}}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            paddingLeft: 24,
          }}>
          Popular Items
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              marginLeft: 5,
              marginTop: 20,
              width: 110,
              height: 150,
              backgroundColor: '#fff',
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={handleStore}>
              <View style={{marginTop: 10}}>
                <Image
                  source={require('../../assets/images/apple.png')}
                  style={{height: 55, width: 50, marginTop: 24}}
                />
                <Text style={{alignSelf: 'center'}}>Apple</Text>
                <Text style={{alignSelf: 'center', color: '#04B64A'}}>
                  $5 /kg
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginLeft: 5,
              marginTop: 20,
              width: 110,
              height: 150,
              backgroundColor: '#fff',
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={handleOrange}>
              <View style={{marginTop: 10}}>
                <Image
                  source={require('../../assets/images/orange.png')}
                  style={{height: 60, width: 60, marginTop: 24}}
                />
                <Text style={{alignSelf: 'center'}}>Orange</Text>
                <Text style={{alignSelf: 'center', color: '#04B64A'}}>
                  $5 /kg
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginLeft: 5,
              marginTop: 20,
              width: 110,
              height: 150,
              backgroundColor: '#fff',
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={handleOrange}>
              <View style={{marginTop: 10}}>
                <Image
                  source={require('../../assets/images/pine.png')}
                  style={{height: 60, width: 50, marginTop: 24}}
                />
                <Text style={{alignSelf: 'center'}}>Pineapple</Text>
                <Text style={{alignSelf: 'center', color: '#04B64A'}}>
                  $5 /kg
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;
