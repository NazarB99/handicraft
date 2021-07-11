import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {translate} from '../commons/Localization';
import Input from '../components/Input';
import {BLUE, DARK_COLOR} from '../commons/Constants';
import SubmitButton from '../components/SubmitButton';
import LanguageButton from '../components/LanguageButton';
import * as global from '../commons/global';
import {login} from '../store/actions/userActions';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lang, setLang] = useState(require('../../assets/russia.png'));

  const [loading, setLoading] = useState(false);

  useEffect(() => getCountry(), []);

  const getCountry = async () => {
    const CURRENT_LANG = await global.GLOBAL_LANGUAGE_VAR();
    console.log(CURRENT_LANG);
    if (CURRENT_LANG === 'ru') {
      setLang(require('../../assets/russia.png'));
    }
    if (CURRENT_LANG === 'en') {
      setLang(require('../../assets/united-states-of-america.png'));
    }
    if (CURRENT_LANG === 'tm') {
      setLang(require('../../assets/turkmenistan.png'));
    }
  };

  const onPress = async () => {
    setLoading(true);
    props
      .login(email, password)
      .then(() => {
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        alert(err);
      });
  };

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
        <SubmitButton
          onPress={onPress}
          loading={loading}
          label={translate('login')}
        />
        <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
          <View style={styles.bottomText}>
            <Text style={styles.createAccount}>
              {translate('create_account')}{' '}
              <Text style={styles.signInWithSocial}>
                {translate('or_signin_with_social')}
              </Text>
            </Text>
          </View>
        </TouchableOpacity>
        <LanguageButton
          label={translate('language')}
          onPress={() => props.navigation.navigate('Languages')}
          image={lang}
        />
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

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {login};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
