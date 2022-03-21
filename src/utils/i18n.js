import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';

import errorsEN from '../assets/locales/en/errors.json';
import formsEN from '../assets/locales/en/forms.json';
import interfaceEN from '../assets/locales/en/interface.json';
import errorsRU from '../assets/locales/ru/errors.json';
import formsRU from '../assets/locales/ru/forms.json';
import interfaceRU from '../assets/locales/ru/interface.json';

export const configureI18n = (language) => {
  i18n
      .use(detector)
      .init({
        resources: {
          en: {
            interface: interfaceEN,
            errors: errorsEN,
            forms: formsEN,
          },
          ru: {
            interface: interfaceRU,
            errors: errorsRU,
            forms: formsRU,
          },
        },
        fallbackLng: 'en',
        ns: ['interface', 'errors', 'forms'],
        defaultNS: 'interface',
        lng: language,
        debug: false,

        interpolation: {
          escapeValue: false, // not needed for react!!
        },

        // react i18next special options
        react: {
          useSuspense: false,
          wait: true,
          bindI18n: 'languageChanged loaded',
          bindStore: 'added removed',
          nsMode: 'default',
        },

        initImmediate: true,
      });

  return i18n;
};
