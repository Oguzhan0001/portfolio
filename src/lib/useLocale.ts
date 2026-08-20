"use client";

import { useState, useEffect } from "react";

export type Locale = "tr" | "en";

export function useLocale() {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const match = document.cookie.match(/locale=(tr|en)/);
    if (match) {
      setLocale(match[1] as Locale);
    }
  }, []);

  const toggleLocale = () => {
    setLocale((prev) => (prev === "tr" ? "en" : "tr"));
  };

  return { locale, toggleLocale };
}