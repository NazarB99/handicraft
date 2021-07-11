import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import Element from '../components/Element';
import Logo from '../components/Logo';
import SearchInput from '../components/SearchInput';

const HomeScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={{alignSelf: 'center', marginBottom: 20}}>
        <Logo />
      </View>
      <SearchInput />
      <View style={styles.elementWrapper}>
        <FlatList
          data={[1, 2, 3, 4]}
          numColumns={2}
          renderItem={({item}) => <Element />}
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

export default HomeScreen;
