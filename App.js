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
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';
import CatalogScreen from './src/screens/CatalogScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CartScreen from './src/screens/CartScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {YELLOW} from './src/commons/Constants';
import Home from './src/components/Home';
import Catalog from './src/components/Catalog';
import FavoriteTab from './src/components/FavoriteTab';
import CartTab from './src/components/CartTab';
import ProfileTab from "./src/components/ProfileTab";

const Tabs = createBottomTabNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'yellow',
    },
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Tabs.Navigator
            tabBarOptions={{
              activeTintColor: YELLOW,
            }}>
            <Tabs.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({focused, color, size}) => {
                  return <Home color={color} />;
                },
              }}
            />
            <Tabs.Screen
              options={{
                tabBarIcon: ({focused, color, size}) => {
                  return <Catalog color={color} />;
                },
              }}
              name="Catalog"
              component={CatalogScreen}
            />
            <Tabs.Screen
              options={{
                tabBarIcon: ({focused, color, size}) => {
                  return <FavoriteTab color={color} />;
                },
              }}
              name="Favorites"
              component={FavoritesScreen}
            />
            <Tabs.Screen
              options={{
                tabBarIcon: ({focused, color, size}) => {
                  return <CartTab color={color} />;
                },
              }}
              name="Cart"
              component={CartScreen}
            />
            <Tabs.Screen
              options={{
                tabBarIcon: ({focused, color, size}) => {
                  return <ProfileTab color={color} />;
                },
              }}
              name="Profile"
              component={ProfileScreen}
            />
          </Tabs.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
};

export default App;
