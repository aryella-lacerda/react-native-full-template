export interface I18nInterface {
  setup: () => Promise<void>;
  teardown: () => Promise<void>;
  getLanguage: () => string;
  updateLanguage: (lng?: string) => Promise<void>;
}
