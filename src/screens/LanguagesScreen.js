import React from 'react';
import {View, StyleSheet} from 'react-native';
import LanguageButton from '../components/LanguageButton';
import {translate} from '../commons/Localization';

const LanguagesScreen = () => {
  return (
    <View style={styles.languages}>
      <LanguageButton
        marginDisable
        label="Turkmen"
        image={require('../../assets/turkmenistan.png')}
      />
      <LanguageButton
        marginDisable
        label="Russian"
        image={require('../../assets/russia.png')}
      />
      <LanguageButton
        marginDisable
        label="English"
        image={require('../../assets/united-states-of-america.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  languages: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
});

export default LanguagesScreen;
