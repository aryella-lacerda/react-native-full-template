/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import RNLocalize from 'react-native-localize';

import {I18nServiceInterface} from './i18n-interfaces';
import resources from './locales';

const availableLanguages = Object.keys(resources);


const _i18n = i18n.use(initReactI18next).init({
  resources,
  lng: RNLocalize.findBestAvailableLanguage(availableLanguages)?.languageTag,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
});

function handleLocalizationChange(): void {
  const lng =
    RNLocalize.findBestAvailableLanguage(availableLanguages)?.languageTag;
  if (lng !== undefined) {
    void i18n.changeLanguage(lng);
  }
}

class I18nService implements I18nServiceInterface {
  async setup(): Promise<void> {
    RNLocalize.addEventListener('change', handleLocalizationChange);
  }

  async teardown(): Promise<void> {
    RNLocalize.removeEventListener('change', handleLocalizationChange);
  }

  getLanguage(): string {
    return i18n.language;
  }

  async updateLanguage(lng?: string): Promise<void> {
    await i18n.changeLanguage(lng);
  }
}

const i18nInstance = Object.freeze(new I18nService());
export default i18nInstance;
