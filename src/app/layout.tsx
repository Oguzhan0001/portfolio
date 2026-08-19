import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oğuzhan Haberveren — Web Geliştirici",
  description:
    "İstanbul merkezli bağımsız web geliştirici. Hızlı, modern ve sonuç odaklı web siteleri ve uygulamalar geliştiriyorum.",
  openGraph: {
    title: "Oğuzhan Haberveren — Web Geliştirici",
    description: "İşinizi büyütecek web siteleri geliştiriyorum.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
