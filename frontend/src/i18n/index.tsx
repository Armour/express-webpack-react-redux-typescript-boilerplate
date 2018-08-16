import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { isProduction } from 'utils';

export default i18n
  .use(LanguageDetector)
  .init({
    whitelist: ['en', 'zh', 'jp'],
    fallbackLng: 'en',
    debug: !isProduction,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    react: {
      wait: false,
    },
  }, (err, _) => {
    if (err) {
      return console.error('Load i18n instance failed.', err);
    }
  });
