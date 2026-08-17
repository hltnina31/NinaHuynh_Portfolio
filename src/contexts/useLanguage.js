import { useContext } from "react";
import LanguageContext from "./languageContextObject";

export default function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage må brukes innenfor LanguageProvider.");
  }

  return context;
}
