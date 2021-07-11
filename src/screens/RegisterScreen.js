import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import RadioGroup from 'react-native-radio-buttons-group';
import Input from '../components/Input';
import {register} from '../store/actions/userActions';
import {translate} from '../commons/Localization';
import SubmitButton from '../components/SubmitButton';

const RegisterScreen = props => {
  const radioButtonsData = [
    {
      id: '1',
      label: translate('artisan'),
      value: 'artisan',
    },
    {
      id: '2',
      label: translate('client'),
      value: 'customer',
    },
  ];

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [loading, setLoading] = useState(false);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  const onPress = async () => {
    setLoading(true);
    const userType = radioButtons.filter(item => item.selected === true)[0];
    if (userType && userType.value && email && password && name && surname) {
      props
        .register(email, password, name, surname, userType.value)
        .then(message => {
          setLoading(false);
          props.navigation.goBack();
          setTimeout(() => alert(message), 1000);
        })
        .catch(err => {
          setLoading(false);
          alert(err);
        });
    } else {
      setLoading(false);
      alert(translate('FillUpEmpty'));
    }
  };

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
        <SubmitButton
          onPress={onPress}
          loading={loading}
          label={translate('register')}
        />
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

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, {register})(RegisterScreen);
