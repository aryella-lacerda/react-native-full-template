import {useContext, useMemo} from 'react';

import type {Theme, ThemeContextInterface, AnyStyle} from './theme-interfaces';
import {ThemeContext} from './theme-provider';

export const useTheme = (): ThemeContextInterface => useContext(ThemeContext);

export const useStylesWithTheme = <T = AnyStyle>(
  styles: (theme: Theme) => T,
): T => {
  const {theme} = useTheme();

  return useMemo(() => {
    return styles(theme);
  }, [styles, theme]);
};
