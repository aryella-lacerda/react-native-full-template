import {useContext, useMemo} from 'react';

import type {
  Theme,
  ThemeContextInterface,
  AnyStyle,
  StylesWithTheme,
} from './theme-interfaces';
import {ThemeContext} from './theme-provider';

export const useTheme = (): ThemeContextInterface => useContext(ThemeContext);

export const useStylesWithTheme = <T = AnyStyle>(
  stylesFn: (theme: Theme) => T,
): StylesWithTheme<T> => {
  const {theme} = useTheme();

  return useMemo(() => {
    return {
      styles: stylesFn(theme),
      theme,
    };
  }, [stylesFn, theme]);
};
