import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Logo from '../components/Logo';
import SearchInput from '../components/SearchInput';
import Element from '../components/Element';

const ListScreen = props => {
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
          renderItem={({item}) => (
            <Element onPress={() => props.navigation.navigate('Detail')} />
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

export default ListScreen;
