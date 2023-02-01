import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {RootNavigator} from '@navigation/root-navigator';
import {I18nProvider} from '@services/i18n/i18n-provider';

function App(): JSX.Element {
  return (
    <I18nProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </I18nProvider>
  );
}

export default App;
