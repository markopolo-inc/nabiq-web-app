import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
// @ts-expect-error: disable declaration lint error
import resources from 'virtual:i18next-loader';

// import ar from './locales/ar/translations.json';
// import en from './locales/en/translations.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  // .use(HttpApi)
  .init({
    debug: import.meta.env.DEV,
    lng: 'en',
    fallbackLng: 'en',
    react: {
      useSuspense: false,
    },
    ns: ['translation', 'common'],
    defaultNS: 'translation',
    resources,
    // backend: {
    //   loadPath: 'src/services/i18next/locales/{{lng}}/{{ns}}.json',
    //   crossDomain: true,
    // },
    // resources: {
    //   en: {
    //     translation: en,
    //   },
    //   ar: {
    //     translation: ar,
    //   },
    // },
  });

// i18n
//   .loadNamespaces(['common'])
//   .then((res) => {
//     console.log('Namespaces loaded', res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

i18n.languages = ['en', 'ar'];

export default i18n;
