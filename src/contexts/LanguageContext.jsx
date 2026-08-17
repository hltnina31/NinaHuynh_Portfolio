import { useEffect, useState } from "react";
import no from "../translations/no";
import en from "../translations/en";
import vn from "../translations/vn";
import LanguageContext from "./languageContextObject";

const translations = { no, en, vn };
const supportedLanguages = Object.keys(translations);
const storageKey = "portfolio-language";

function getInitialLanguage() {
  try {
    const savedLanguage = localStorage.getItem(storageKey);
    return supportedLanguages.includes(savedLanguage) ? savedLanguage : "no";
  } catch {
    return "no";
  }
}

function getNestedValue(source, key) {
  return key.split(".").reduce((value, keyPart) => value?.[keyPart], source);
}

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);
  const activeTranslations = translations[language];

  function t(key) {
    return getNestedValue(activeTranslations, key) ?? key;
  }

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, language);
    } catch {
      // Norwegian remains the safe default if storage is unavailable.
    }

    document.documentElement.lang = language === "vn" ? "vi" : language;
    document.title = activeTranslations.meta.title;
  }, [activeTranslations, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
