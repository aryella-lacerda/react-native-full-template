import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {useColorScheme, StyleProp} from 'react-native';

import {DarkTheme} from './collection/dark-theme';
import {LightTheme} from './collection/light-theme';
import type {Theme, ThemeContextInterface} from './theme-interfaces';

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: LightTheme,
  setTheme: () => {},
});

export const ThemeProvider = ({children}: PropsWithChildren): JSX.Element => {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>(
    scheme === 'dark' ? DarkTheme : LightTheme,
  );

  // Continue to switch themes when user updates their device settings.
  useEffect(() => {
    setTheme(scheme === 'dark' ? DarkTheme : LightTheme);
  }, [scheme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextInterface => useContext(ThemeContext);

export type AnyStyle = StyleProp<any>;

export const useThemedStyles = <T = AnyStyle,>(
  themedStyles: (theme: Theme, params?: Record<string, unknown>) => T,
  params?: Record<string, unknown>,
): T => {
  const theme = useTheme();

  return useMemo(() => {
    return themedStyles(theme.theme, params);
  }, [themedStyles, theme, params]);
};
