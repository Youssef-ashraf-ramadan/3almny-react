// npm install react-i18next i18next i18next-browser-languagedetector i18next-http-backend js-cookie

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "ar",

    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie", "localStorage"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

i18n.on("languageChanged", (lng) => {
  document.dir = lng === "ar" ? "rtl" : "ltr";
});

export default i18n;
