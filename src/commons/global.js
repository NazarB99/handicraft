import AsyncStorage from '@react-native-async-storage/async-storage';

export let GLOBAL_LANGUAGE_VAR = async () => {
  return await AsyncStorage.getItem('lang') || 'ru';
};
