import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useMemo,
} from 'react';

import I18nService from './i18next-service';
export {useTranslation} from 'react-i18next';

interface I18n {
  langauge: string;
  updateLangauge: (lng: string) => Promise<void>;
}

export const I18nContext = createContext<I18n>({
  langauge: '',
  updateLangauge: async () => {},
});

// TODO: Dependency injection via context? Do not import services directly?

export const I18nProvider = ({children}: PropsWithChildren): JSX.Element => {
  useEffect(() => {
    void I18nService.setup();
    return () => {
      void I18nService.teardown();
    };
  }, []);

  const value = useMemo(() => {
    return {
      langauge: I18nService.getLanguage(),
      updateLangauge: I18nService.updateLanguage,
    };
  }, []);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};
