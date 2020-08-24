import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  ua: {
    translation: {
      "Прокат": "Прокат",
      "Трансфери": "Трансфери",
      "Асистенс": "Асистенс",
      "Контакти": "Контакти",
      "Привіт, Світ!": "Привіт, Світ!",
      "Прокат нових авто": "Прокат нових авто",
      "у Львові": "у Львові",
      "Орендувати": "Орендувати"
    }
  },
  ru: {
    translation: {
      "Прокат": "Прокат",
      "Трансфери": "Трансферы",
      "Асистенс": "Асистенс",
      "Контакти": "Контакты",
      "Привіт, Світ!": "Привет, Мир!",
      "Прокат нових авто": "Прокат новых авто",
      "у Львові": "во Львове",
      "Орендувати": "Арендовать"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;