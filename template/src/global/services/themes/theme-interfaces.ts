import type {StyleProp} from 'react-native';

import type {Theme as ReactNavigationTheme} from '@react-navigation/native';

export interface Theme extends ReactNavigationTheme {
  name: string;
  barStyle: 'light-content' | 'dark-content';
}

export interface ThemeContextInterface {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export type AnyStyle = StyleProp<any>;

export interface StylesWithTheme<T> {
  styles: T;
  theme: Theme;
}
