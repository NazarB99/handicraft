import React from 'react';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';
import RNRestart from 'react-native-restart';
import * as global from './global';

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

const setI18nConfig = async () => {
  // fallback if no available language fits
  const fallback = {languageTag: 'ru', isRTL: false};

  let {languageTag, isRTL} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  console.log(await global.GLOBAL_LANGUAGE_VAR());
  languageTag = (await global.GLOBAL_LANGUAGE_VAR()) || 'ru';

  // clear translation cache
  translation.cache.clear();
  // update layout direction
  // I18nManager.forceRTL(isRTL);

  // set i18n-js config
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;
};

export const handleLocalizationChange = () => {
  setI18nConfig();
  RNRestart.Restart();
};

export const translate = (text: string) => {
  setI18nConfig();
  return translation(text);
};

export const getTimeZone = () => {
  return RNLocalize.getTimeZone();
};
