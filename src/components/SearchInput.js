import React from 'react';
import {TextInput, StyleSheet, View, Image} from 'react-native';
import {translate} from '../commons/Localization';

const SearchInput = () => {
  return (
    <View>
      <View style={{position: 'absolute', left: 10, top: 3, zIndex: 1000}}>
        <Image
          source={require('../../assets/ei_search.png')}
          style={{width: 30, height: 30}}
        />
      </View>
      <TextInput
        placeholder={translate('SearchExample')}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF9F0',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginHorizontal: 10,
    marginBottom: 20,
    paddingVertical: 10,
    paddingLeft: 40,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});

export default SearchInput;
