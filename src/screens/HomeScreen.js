import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ListScreen from './ListScreen';
import DetailScreen from './DetailScreen';

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
