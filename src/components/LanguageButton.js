import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {translate} from '../commons/Localization';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {DARK_COLOR} from '../commons/Constants';

const LanguageButton = ({image, onPress, marginDisable, label}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={
          marginDisable
            ? styles.languagePanelWithoutMargin
            : styles.languagePanel
        }>
        <Text style={styles.languageLabel}>{label}</Text>
        <View style={styles.rightSection}>
          <FontAwesome5 size={16} name="chevron-right" />
          <Image style={styles.country} source={image} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  languagePanel: {
    marginTop: 20,
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
    borderTopColor: DARK_COLOR,
    borderBottomColor: DARK_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    alignItems: 'center',
  },
  languagePanelWithoutMargin: {
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
    borderTopColor: DARK_COLOR,
    borderBottomColor: DARK_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    alignItems: 'center',
  },
  languageLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: DARK_COLOR,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  country: {
    width: 30,
    height: 20,
    marginLeft: 10,
  },
  countryWithoutMargin: {
    width: 30,
    height: 20,
  },
});

export default LanguageButton;
