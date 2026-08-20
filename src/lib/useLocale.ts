"use client";

import { useState, useEffect } from "react";

export type Locale = "tr" | "en";

export function useLocale() {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    fetch("/api/locale")
      .then((res) => res.json())
      .then((data) => setLocale(data.locale))
      .catch(() => {});
  }, []);

  const toggleLocale = () => {
    setLocale((prev) => (prev === "tr" ? "en" : "tr"));
  };

  return { locale, toggleLocale };
}