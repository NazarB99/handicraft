import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Heart from './Heart';
import Cart from './Cart';

const Element = ({onPress, item}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.element}>
        <ImageBackground
          source={{uri: item.picture}}
          style={styles.photoSection}>
          <View style={{position: 'absolute', top: 10, left: 5}}>
            <Heart filled={false} />
          </View>
          <View style={{position: 'absolute', bottom: 5, right: 5}}>
            <Cart />
          </View>
        </ImageBackground>
        <View style={styles.info}>
          <Text style={styles.title}>{item.name}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text>{Math.round(item.price)} TMT</Text>
            <Text style={{color: '#818181'}}>More info...</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  element: {
    width: 166,
    borderRadius: 3,
    borderColor: '#e5e5e5',
    borderWidth: 1.5,
    marginHorizontal: 10,
    marginBottom: 12,
  },
  photoSection: {
    height: 110,
    backgroundColor: '#FFE6D8',
  },
  info: {
    height: 55,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Element;
