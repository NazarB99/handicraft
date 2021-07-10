import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {DARK_COLOR} from '../commons/Constants';

const Input = ({placeholder, value, onChangeText, isPassword}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      placeholderTextColor="#d2dae2"
      secureTextEntry={isPassword}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 0.2,
    borderColor: DARK_COLOR,
    color: DARK_COLOR,
    paddingBottom: 10,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: '300',
  },
});

export default Input;
