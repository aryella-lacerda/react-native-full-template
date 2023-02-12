export interface I18nServiceInterface {
  setup: () => Promise<void>;
  teardown: () => Promise<void>;
  getLanguage: () => string;
  updateLanguage: (lng?: string) => Promise<void>;
}
