import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {BLUE, DARK_COLOR} from '../commons/Constants';

const RadioOption = ({status, onPress, label, value}) => {
  return (
    <View style={styles.radioButton}>
      <Text style={styles.radioLabel}>{label}</Text>
      <RadioButton
        value={value}
        status={status}
        color={BLUE}
        uncheckedColor={DARK_COLOR}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default RadioOption;
