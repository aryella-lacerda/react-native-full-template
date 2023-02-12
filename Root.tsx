import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {RootNavigator} from '@navigation/root-navigator';
import {useTheme} from '@services/themes/theme-hooks';

export function Root(): JSX.Element {
  const {theme} = useTheme();

  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
