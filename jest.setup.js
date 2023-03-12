/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {configure} from 'reassure';
configure({testingLibrary: 'react-native'});

jest.mock(
  'react-native/Libraries/Components/StatusBar/StatusBar',
  () => 'StatusBar',
);

jest.mock(
  'react-native-localize',
  () => require('react-native-localize/mock').default,
);

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        language: 'en',
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}));

jest.mock('react-native-ama', () => ({
  Text: require('react-native').Text,
}));
