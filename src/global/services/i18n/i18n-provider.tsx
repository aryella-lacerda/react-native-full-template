import React, {createContext, PropsWithChildren, useEffect} from 'react';

import I18nService from './i18next-service';

export const I18nContext = createContext(undefined);

/**
 * This provider doesn't inject anything,
 * it simply calls scaffolds and tearsdown the i18n service.
 */

export const I18nProvider = ({children}: PropsWithChildren): JSX.Element => {
  useEffect(() => {
    void I18nService.setup();
    return () => {
      void I18nService.teardown();
    };
  }, []);

  return (
    <I18nContext.Provider value={undefined}>{children}</I18nContext.Provider>
  );
};
