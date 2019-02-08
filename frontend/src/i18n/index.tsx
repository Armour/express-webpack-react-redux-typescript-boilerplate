import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

import { isProduction } from 'utils';

export default i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .init({
    debug: !isProduction,
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json',
    },
    whitelist: ['en', 'zh', 'jp'],
    fallbackLng: 'en',
    fallbackNS: 'common',
    interpolation: {
      escapeValue: false, // not needed for react.
    },
    react: {
      wait: false,
    },
  }, (err, _) => {
    if (err) {
      return console.error('Load i18n instance failed.', err);
    }
  });
