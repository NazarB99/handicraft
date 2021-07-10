import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import {translate} from '../commons/Localization';
import LanguagesScreen from "./LanguagesScreen";

const Stack = createStackNavigator();

const ProfileScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: translate('login'),
        }}
      />
      <Stack.Screen
        name="Register"
        options={{
          headerTitle: translate('register'),
        }}
        component={RegisterScreen}
      />
      <Stack.Screen
        name="Languages"
        options={{
          headerTitle: translate('language'),
        }}
        component={LanguagesScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileScreen;
