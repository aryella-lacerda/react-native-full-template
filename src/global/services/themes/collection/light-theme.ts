import {DefaultTheme as ReactNavigationLightTheme} from '@react-navigation/native';

export const LightTheme = {
  ...ReactNavigationLightTheme,
  name: 'light',
  barStyle: 'dark-content' as const,
};
