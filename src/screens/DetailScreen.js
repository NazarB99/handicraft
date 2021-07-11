import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Logo from '../components/Logo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {translate} from '../commons/Localization';
import Line from '../components/Line';

const DetailScreen = props => {
  return (
    <View style={styles.wrapper}>
      <View style={{alignSelf: 'center', marginBottom: 20}}>
        <Logo />
      </View>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <View style={styles.back}>
          <FontAwesome5 size={22} name="chevron-left" />
          <Text style={{fontSize: 16, marginLeft: 10}}>
            {translate('Back')}
          </Text>
        </View>
      </TouchableOpacity>
      <Image
        style={{height: 190, marginTop: 15, borderRadius: 5}}
        source={{
          uri: 'https://unsplash.com/photos/avtFK2joNSI/download?force=true&w=640',
        }}
      />
      <View style={styles.productInfo}>
        <Text style={styles.categoryTitle}>{translate('Category')}:</Text>
        <Text>Test</Text>
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.categoryTitle}>{translate('Material')}:</Text>
        <Text>Test</Text>
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.categoryTitle}>{translate('Manufacturer')}:</Text>
        <Text style={{fontWeight: '400'}}>Test</Text>
      </View>
      <Line />
      <View style={{paddingHorizontal: 3, paddingVertical: 3}}>
        <Text>
          Описание товара: брелоки деревянные 20 штук с надписью на заказ,
          Описание товара брелоки деревянные 20 штук с надписью на заказ
        </Text>
      </View>
      <Line />
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <Text>{translate('Price')}: 10 TMT</Text>
        <Text>{translate('Remaining')}: 20 шт.</Text>
      </View>
      <TouchableOpacity style={{alignItems: 'center'}}>
        <View style={styles.buyButton}>
          <Text>{translate('Buy')}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginRight: 5,
  },
  buyButton: {
    backgroundColor: '#FFF9F0',
    borderColor: '#F2D776',
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 30,
    marginTop: 15,
  },
});

export default DetailScreen;
