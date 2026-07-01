import React, { createContext, useContext, useState, useCallback } from "react";
import en from "./en";
import fr from "./fr";

const translations = { en, fr };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("portfolio-lang") || "fr";
  });

  const switchLang = useCallback((newLang) => {
    setLang(newLang);
    localStorage.setItem("portfolio-lang", newLang);
  }, []);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, switchLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
