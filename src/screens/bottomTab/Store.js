import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Cart from './Cart';
import {useNavigation} from '@react-navigation/native'

const data = [
  {
    id: '1',
    title: 'Veges',
    imageSource: require('../../assets/images/veg.png'),
  },
  {
    id: '2',
    title: 'Veges',
    imageSource: require('../../assets/images/veg.png'),
  },
];

const Favorite = () => {

    const navigation = useNavigation();

    const handleCart = () => {
      
      navigation.navigate(Cart);
    };


  const [favoriteData, setFavoriteData] = useState(data);

  return (
    <>
    <ScrollView>
      <View style={{ marginTop: 10, alignSelf: 'center', marginTop: 30 }}>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
          Favorite
        </Text>
      </View>
      <FlatList
        data={favoriteData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              marginLeft: 20,
              marginTop: 20,
              width: 150,
              height: 150,
              backgroundColor: '#D5FFD0',
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <View style={{ marginTop: 10 }}>
              <Image
                source={item.imageSource}
                style={{ height: 50, width: 50, alignSelf: 'center' }}
              />
              <Text style={{ alignSelf: 'center' }}>{item.title}</Text>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  backgroundColor: '#04B64A',
                  width: 80,
                  height: 30,
                  justifyContent: 'center',
                  borderRadius: 5,
                  marginTop: 15,
                }} onPress={handleCart} >
                <Text>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        horizontal={true} // Set this to true if you want horizontal scrolling
      />
      <FlatList
        data={favoriteData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              marginLeft: 20,
              marginTop: 20,
              width: 150,
              height: 150,
              backgroundColor: '#D5FFD0',
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <View style={{ marginTop: 10 }}>
              <Image
                source={item.imageSource}
                style={{ height: 50, width: 50, alignSelf: 'center' }}
              />
              <Text style={{ alignSelf: 'center' }}>{item.title}</Text>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  backgroundColor: '#04B64A',
                  width: 80,
                  height: 30,
                  justifyContent: 'center',
                  borderRadius: 5,
                  marginTop: 15,
                }} onPress={handleCart} >
                <Text>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        horizontal={true} // Set this to true if you want horizontal scrolling
      />
      <FlatList
        data={favoriteData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              marginLeft: 20,
              marginTop: 20,
              width: 150,
              height: 150,
              backgroundColor: '#D5FFD0',
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <View style={{ marginTop: 10 }}>
              <Image
                source={item.imageSource}
                style={{ height: 50, width: 50, alignSelf: 'center' }}
              />
              <Text style={{ alignSelf: 'center' }}>{item.title}</Text>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  backgroundColor: '#04B64A',
                  width: 80,
                  height: 30,
                  justifyContent: 'center',
                  borderRadius: 5,
                  marginTop: 15,
                }} onPress={handleCart} >
                <Text>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        horizontal={true} // Set this to true if you want horizontal scrolling
      />
      <FlatList
        data={favoriteData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              marginLeft: 20,
              marginTop: 20,
              width: 150,
              height: 150,
              backgroundColor: '#D5FFD0',
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <View style={{ marginTop: 10 }}>
              <Image
                source={item.imageSource}
                style={{ height: 50, width: 50, alignSelf: 'center' }}
              />
              <Text style={{ alignSelf: 'center' }}>{item.title}</Text>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  backgroundColor: '#04B64A',
                  width: 80,
                  height: 30,
                  justifyContent: 'center',
                  borderRadius: 5,
                  marginTop: 15,
                }} onPress={handleCart} >
                <Text>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        horizontal={true} // Set this to true if you want horizontal scrolling
      />
      </ScrollView>
    </>
  );
};

export default Favorite;
