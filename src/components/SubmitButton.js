import React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';
import {translate} from '../commons/Localization';
import {BLUE} from '../commons/Constants';

const SubmitButton = () => {
  return (
    <Pressable>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{translate('login')}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: BLUE,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default SubmitButton;
