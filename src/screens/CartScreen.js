import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Logo from '../components/Logo';
import SearchInput from '../components/SearchInput';
import {translate} from '../commons/Localization';
import {DEVICE_HEIGHT} from '../commons/Constants';
import CartItem from '../components/CartItem';

const CartScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={{alignSelf: 'center', marginBottom: 20}}>
        <Logo />
      </View>
      <SearchInput />
      <View style={styles.content}>
        <Text style={styles.title}>{translate('MyCart')}</Text>
        <View style={styles.cartList}>
          <FlatList data={[1, 2]} renderItem={({item}) => <CartItem />} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 17,
  },
  title: {
    fontSize: 24,
    fontWeight: '300',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  cartList: {
    height: DEVICE_HEIGHT * 0.4,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
});

export default CartScreen;
