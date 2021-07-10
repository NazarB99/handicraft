import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import Input from '../components/Input';
import {translate} from '../commons/Localization';
import SubmitButton from "../components/SubmitButton";

const radioButtonsData = [
  {
    id: '1',
    label: translate('artisan'),
    value: 'artisan',
  },
  {
    id: '2',
    label: translate('client'),
    value: 'client',
  },
];

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <View style={styles.wrapper}>
      <Input
        placeholder={translate('Name')}
        value={name}
        onChangeText={text => setName(text)}
      />
      <Input
        placeholder={translate('Surname')}
        value={surname}
        onChangeText={text => setSurname(text)}
      />
      <Input
        placeholder={translate('Email')}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Input
        placeholder={translate('password')}
        value={password}
        onChangeText={text => setPassword(text)}
        isPassword
      />
      <RadioGroup
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
        layout="row"
      />
      <View style={styles.button}>
        <SubmitButton label={translate('register')} />
      </View>
      {/*<View style={styles.radioButtons}>*/}
      {/*  <RadioOption*/}
      {/*    status={userType === 'client' ? 'checked' : 'unchecked'}*/}
      {/*    onPress={() => setUserType('client')}*/}
      {/*    label={translate('client')}*/}
      {/*    value="client"*/}
      {/*  />*/}
      {/*  <RadioOption*/}
      {/*    status={userType === 'artisan' ? 'checked' : 'unchecked'}*/}
      {/*    onPress={() => setUserType('artisan')}*/}
      {/*    label={translate('artisan')}*/}
      {/*    value="artisan"*/}
      {/*  />*/}
      {/*</View>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  radioButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    marginTop: 30,
  },
});

export default RegisterScreen;
