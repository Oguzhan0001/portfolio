"use client";

import { useState, useEffect } from "react";

export type Locale = "tr" | "en";

export function useLocale() {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const browserLang = navigator.language || "";
    setLocale(browserLang.startsWith("tr") ? "tr" : "en");
  }, []);

  const toggleLocale = () => {
    setLocale((prev) => (prev === "tr" ? "en" : "tr"));
  };

  return { locale, toggleLocale };
}