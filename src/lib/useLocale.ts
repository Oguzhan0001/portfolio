"use client";

import { useState, useEffect } from "react";

export type Locale = "tr" | "en";

export function useLocale() {
  const [locale, setLocale] = useState<Locale>("tr");

  useEffect(() => {
    const match = document.cookie.match(/locale=(tr|en)/);
    if (match) {
      setLocale(match[1] as Locale);
    }
  }, []);

  const toggleLocale = () => {
    const newLocale = locale === "tr" ? "en" : "tr";
    document.cookie = `locale=${newLocale};path=/;max-age=${60 * 60 * 24 * 30}`;
    setLocale(newLocale);
  };

  return { locale, toggleLocale };
}