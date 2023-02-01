import {initReactI18next} from 'react-i18next';
import RNLocalize from 'react-native-localize';
import i18n from 'i18next';
import {I18nInterface} from './i18n-interface';

// Apparently needs to be declared outside of class to work. Not ideal.

// TODO: Extract resources to another file
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _i18n = i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: 'Welcome to React Native!',
      },
    },
    pt: {
      translation: {
        welcome: 'Bem vindo ao React Native!',
      },
    },
  },
  lng: RNLocalize.findBestAvailableLanguage(['en', 'pt'])?.languageTag,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
});

function handleLocalizationChange(): void {
  const lng = RNLocalize.findBestAvailableLanguage(['en', 'pt'])?.languageTag;
  if (lng !== undefined) {
    void i18n.changeLanguage(lng);
  }
}

export class I18nService implements I18nInterface {
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
