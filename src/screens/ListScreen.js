import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import Logo from '../components/Logo';
import SearchInput from '../components/SearchInput';
import Element from '../components/Element';
import {getProductList} from '../store/actions/productsActions';

const ListScreen = props => {
  useEffect(() => {
    props.getProductList();
  }, []);

  return (
    <View style={styles.wrapper}>
      <View style={{alignSelf: 'center', marginBottom: 20, marginTop: 5}}>
        <Logo />
      </View>
      <SearchInput />
      <View style={styles.elementWrapper}>
        <FlatList
          data={props.products}
          contentContainerStyle={{paddingBottom: 150}}
          numColumns={2}
          renderItem={({item}) => (
            <Element
              item={item}
              onPress={() => props.navigation.navigate('Detail', {item})}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  elementWrapper: {
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  products: state.products.products,
});

export default connect(mapStateToProps, {getProductList})(ListScreen);
