"use client";

import Link from "next/link";
import { useLocale } from "@/lib/useLocale";
import { t } from "@/lib/translations";

export default function BackButton() {
  const { locale } = useLocale();
  const s = t[locale];

  return (
    <Link
      href="/"
      style={{
        position: "fixed", top: 16, left: 16, zIndex: 999,
        display: "flex", alignItems: "center", gap: 6,
        padding: "10px 18px", background: "#0F0F0F", color: "#fff",
        fontSize: 13, fontWeight: 600, border: "none", borderRadius: 8,
        cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
        fontFamily: "'Space Grotesk', system-ui, sans-serif",
        textDecoration: "none",
      }}
    >
      {s.backButton}
    </Link>
  );
}