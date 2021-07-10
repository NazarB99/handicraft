import {I18nManager} from 'react-native';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  ru: () => require('../translations/ru.json'),
  en: () => require('../translations/en.json'),
  tm: () => require('../translations/tm.json'),
};

const translation = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = {languageTag: 'ru', isRTL: false};

  const {languageTag, isRTL} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // clear translation cache
  translation.cache.clear();
  // update layout direction
  // I18nManager.forceRTL(isRTL);

  // set i18n-js config
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;
};

export const translate = (text: string) => {
  setI18nConfig();
  return translation(text);
};

export const getTimeZone = () => {
  return RNLocalize.getTimeZone();
};
