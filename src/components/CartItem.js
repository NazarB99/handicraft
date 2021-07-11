import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const CartItem = () => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.leftSection}>
        <Text>Text</Text>
      </View>
      <View style={styles.centerSection}>
        <Text>60 TMT</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity>
          <Image
            style={styles.adjustButtons}
            source={require('../../assets/minus.png')}
          />
        </TouchableOpacity>
        <Text style={styles.number}>15</Text>
        <TouchableOpacity>
          <Image
            style={styles.adjustButtons}
            source={require('../../assets/plus.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingVertical: 18,
    paddingHorizontal: 15,
  },
  number: {
    marginHorizontal: 5,
  },
  leftSection: {
    flex: 2,
    borderRightColor: '#000',
    borderRightWidth: 1,
    alignItems: 'center',
    marginRight: 5,
  },
  centerSection: {
    flex: 1,
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#000',
  },
  adjustButtons: {
    width: 21,
    height: 21,
  },
});

export default CartItem;
