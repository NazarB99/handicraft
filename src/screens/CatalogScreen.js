import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Logo from '../components/Logo';
import SearchInput from '../components/SearchInput';
import {translate} from '../commons/Localization';
import CategoryItem from '../components/CategoryItem';

const CatalogScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={{alignSelf: 'center', marginBottom: 20}}>
        <Logo />
      </View>
      <SearchInput />
      <View style={styles.content}>
        <Text style={styles.title}>{translate('Catalog')}</Text>
        <FlatList
          numColumns={3}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          data={[1, 2, 3, 4]}
          renderItem={({item}) => <CategoryItem />}
        />
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
  },
});

export default CatalogScreen;
