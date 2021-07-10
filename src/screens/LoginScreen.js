import React, {useState} from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {translate} from '../commons/Localization';
import Input from '../components/Input';
import {BLUE, DARK_COLOR} from '../commons/Constants';
import SubmitButton from '../components/SubmitButton';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.title}>{translate('with_account')}</Text>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder={translate('password')}
          value={password}
          isPassword
          onChangeText={text => setPassword(text)}
        />
        <Pressable>
          <Text style={styles.forgotPasswordText}>
            {translate('forgot_password')}
          </Text>
        </Pressable>
        <SubmitButton />
        <Pressable>
          <View style={styles.bottomText}>
            <Text style={styles.createAccount}>
              {translate('create_account')}{' '}
              <Text style={styles.signInWithSocial}>
                {translate('or_signin_with_social')}
              </Text>
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.versionText}>
        <Text>{translate('Version')} 0.0.1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    marginVertical: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#1e272e',
  },
  bottomText: {
    marginTop: 10,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: BLUE,
    marginBottom: 20,
    fontWeight: '500',
  },
  createAccount: {
    fontSize: 14,
    color: BLUE,
    fontWeight: '500',
  },
  signInWithSocial: {
    fontSize: 14,
    color: DARK_COLOR,
    fontWeight: '500',
  },
  versionText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
});

export default LoginScreen;
