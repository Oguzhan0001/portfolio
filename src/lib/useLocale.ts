"use client";

import { useState, useEffect } from "react";

export type Locale = "tr" | "en";

export function useLocale() {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const manual = document.cookie.match(/locale_manual=(tr|en)/);
    const auto = document.cookie.match(/locale=(tr|en)/);
    setLocale((manual?.[1] || auto?.[1] || "en") as Locale);
  }, []);

  const toggleLocale = () => {
    const newLocale = locale === "tr" ? "en" : "tr";
    document.cookie = `locale_manual=${newLocale};path=/`;
    setLocale(newLocale);
  };

  return { locale, toggleLocale };
}