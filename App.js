/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import CatalogScreen from './src/screens/CatalogScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CartScreen from './src/screens/CartScreen';

const Tabs = createBottomTabNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen name="Home" component={HomeScreen} />
          <Tabs.Screen name="Catalog" component={CatalogScreen} />
          <Tabs.Screen name="Favorites" component={FavoritesScreen} />
          <Tabs.Screen name="Profile" component={ProfileScreen} />
          <Tabs.Screen name="Cart" component={CartScreen} />
        </Tabs.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
