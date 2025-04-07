import { LoginUA } from "./login/LoginUA";
import { LoginRU } from "./login/LoginRU";
import { ErrorRU } from "./error/ErrorRU"
import { ErrorUA } from "./error/ErrorUA"


import i18next from "i18next";
import { initReactI18next } from "react-i18next";


i18next.use(initReactI18next).init({
  resources: {
    uk: {
      translation: {
        ...LoginUA,
        ...ErrorUA,

      },
    },
    ru: {
      translation: {
        ...LoginRU,
        ...ErrorRU,
      },
    },
  },
  lng: "uk",
  fallbackLng: "ru",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
