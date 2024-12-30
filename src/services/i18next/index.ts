import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// import Backend from 'i18next-http-backend';
import ar from './locales/ar/translations.json';
import en from './locales/en/translations.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: import.meta.env.DEV,
    lng: 'en',
    fallbackLng: 'en',
    // react: {
    //   useSuspense: false,
    // },
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
  });

i18n.languages = ['en', 'ar'];

export default i18n;
