import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import LanguageButton from '../components/LanguageButton';
import {handleLocalizationChange, translate} from '../commons/Localization';
import AsyncStorage from '@react-native-async-storage/async-storage';

class LanguagesScreen extends Component {
  render() {
    return (
      <View style={styles.languages}>
        <LanguageButton
          marginDisable
          onPress={async () => {
            await AsyncStorage.setItem('lang', 'tm');
            global.GLOBAL_LANGUAGE_VAR = 'tm';
            handleLocalizationChange();
          }}
          label="Turkmen"
          image={require('../../assets/turkmenistan.png')}
        />
        <LanguageButton
          marginDisable
          onPress={async () => {
            await AsyncStorage.setItem('lang', 'ru');
            global.GLOBAL_LANGUAGE_VAR = 'ru';
            handleLocalizationChange();
          }}
          label="Russian"
          image={require('../../assets/russia.png')}
        />
        <LanguageButton
          marginDisable
          onPress={async () => {
            await AsyncStorage.setItem('lang', 'en');
            global.GLOBAL_LANGUAGE_VAR = 'en';
            handleLocalizationChange();
          }}
          label="English"
          image={require('../../assets/united-states-of-america.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  languages: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
});

export default LanguagesScreen;
