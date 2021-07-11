import React from 'react';
import {ImageBackground, Text, StyleSheet, View} from 'react-native';
import {DEVICE_WIDTH} from '../commons/Constants';

const CategoryItem = () => {
  return (
    <ImageBackground
      style={styles.imageBack}
      imageStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
      }}
      source={{
        uri: 'https://unsplash.com/photos/3tbtq3oCQ1s/download?force=true&w=640',
      }}>
      <View style={styles.catnameWrapper}>
        <Text style={styles.catnameText}>Catname</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBack: {
    width: DEVICE_WIDTH * 0.27,
    height: DEVICE_WIDTH * 0.27,
    marginTop: 15,
  },
  catnameWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  catnameText: {
    fontSize: 16,
    fontWeight: '300',
  },
});

export default CategoryItem;
