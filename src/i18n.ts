import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "ua",
    resources: {
      en: {
        translation: {
          home: "Home",
          loginLink: "Login",
          profile: "Profile",
          news: "News",
          homeHeader: "Today news",
          showMore: "Show more",
          noMore:"No more news",
          loginHead:"Enter your username/email and password please",
          loginField:"Login",
          password: "Password",
          signIn: "Sign In",
          requiredField: "This field is required",
          loginError: "Login is not correct",
          passwordError: "Password is not correct",
        },
      },
      ua: {
        translation: {
          home: "Додому",
          loginLink: "Увійти",
          profile: "Профіль",
          news: "Новини",
          homeHeader: "Сьогоднішні новини",
          noMore:"Це всі новини",
          loginHead:"Введіть свій логін та пароль будь-ласка",
          showMore: "Завантажити ще",
          loginField:"Ім'я користувача",
          password: "Пароль",
          signIn: "Увійти",
          requiredField: "Це поле є обов'язковим",
          loginError: "Ім'я користувача введено неправильно.",
          passwordError: "Пароль введено неправильно.",
        },
      },
    },
  });
