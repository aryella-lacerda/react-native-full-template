import React from 'react';
import codePush from 'react-native-code-push';

import {Root} from './Root';

import {I18nProvider} from '@services/i18n/i18n-provider';
import {ThemeProvider} from '@services/themes/theme-provider';

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <I18nProvider>
        <Root />
      </I18nProvider>
    </ThemeProvider>
  );
}

export default codePush(App);
