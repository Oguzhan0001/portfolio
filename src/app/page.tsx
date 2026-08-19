"use client";

import { useState } from "react";
import Link from "next/link";
import Mockup from "@/components/Mockup";

const PROJECT_DATA = [
  {
    id: "klauz",
    title: "Klauz",
    type: "SaaS Platform",
    year: "2026",
    brief: "AI destekli sözleşme risk analiz platformu. PDF veya Word sözleşme yükleyin, yapay zeka her maddeyi inceleyip risk raporu oluştursun. Sözleşme oluşturma ve versiyon karşılaştırma özellikleriyle birlikte.",
    stack: ["Next.js", "TypeScript", "Supabase", "Lemon Squeezy", "DeepSeek"],
    brandColor: "#1a1a2e",
    brandLight: "#E8E5FF",
    brandMid: "#6366F1",
    mockup: "saas" as const,
    liveUrl: "https://klauz.app",
    badge: "YAYINDA",
  },
  {
    id: "meridian",
    title: "Meridian Coffee",
    type: "E-Ticaret",
    year: "2024",
    brief: "Butik kahve markası için tasarlanan online mağaza konsepti. Abonelik sistemi, ürün filtreleme ve interaktif demleme rehberi içeriyor.",
    stack: ["Next.js", "Stripe", "Sanity CMS"],
    brandColor: "#1B4332",
    brandLight: "#D8F3DC",
    brandMid: "#2D6A4F",
    mockup: "ecommerce" as const,
    liveUrl: null,
    badge: "KONSEPT",
  },
  {
    id: "atlas",
    title: "Atlas Logistics",
    type: "Dashboard",
    year: "2024",
    brief: "Filo yönetim paneli konsepti. Gerçek zamanlı araç takibi, rota optimizasyonu, sürücü planlama ve otomatik rapor oluşturma arayüzü.",
    stack: ["React", "Node.js", "PostgreSQL", "Mapbox"],
    brandColor: "#1E3A5F",
    brandLight: "#DBEAFE",
    brandMid: "#3B82F6",
    mockup: "dashboard" as const,
    liveUrl: null,
    badge: "KONSEPT",
  },
  {
    id: "nora",
    title: "Nora Wellness",
    type: "Landing Page",
    year: "2023",
    brief: "Sağlık uygulaması için tasarlanan dönüşüm odaklı tanıtım sitesi konsepti. Mobil uygulama mockup'ı ve kullanıcı kazanım akışı içeriyor.",
    stack: ["Astro", "Tailwind CSS", "Vercel Analytics"],
    brandColor: "#7C2D12",
    brandLight: "#FFEDD5",
    brandMid: "#EA580C",
    mockup: "landing" as const,
    liveUrl: null,
    badge: "KONSEPT",
  },
];

export default function PortfolioPage() {
  const [hovered, setHovered] = useState<string | null>(null);
  const font = "'Space Grotesk', system-ui, sans-serif";
  const mono = "'IBM Plex Mono', monospace";

  return (
    <div style={{ fontFamily: font, color: "#0F0F0F", background: "#FFFFFF", minHeight: "100vh", lineHeight: 1.6 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "28px 24px 20px", maxWidth: 900, margin: "0 auto", borderBottom: "1px solid #E5E7EB" }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em" }}>Oğuzhan Haberveren</div>
          <div style={{ fontSize: 12, color: "#6B7280", fontFamily: mono, marginTop: 2 }}>Web Geliştirici</div>
        </div>
        <nav style={{ display: "flex", gap: 20, fontSize: 13, color: "#6B7280", fontWeight: 500 }}>
          <a href="#projeler" style={{ color: "inherit", textDecoration: "none" }}>Projeler</a>
          <a href="#hizmetler" style={{ color: "inherit", textDecoration: "none" }}>Hizmetler</a>
          <a href="#iletisim" style={{ color: "inherit", textDecoration: "none" }}>İletişim</a>
        </nav>
      </header>

      {/* Hero */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px 56px" }}>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.03em", maxWidth: 620 }}>
          İşinizi büyütecek web siteleri geliştiriyorum.
        </h1>
        <p style={{ fontSize: 16, color: "#4B5563", maxWidth: 520, marginTop: 16, lineHeight: 1.7 }}>
          İstanbul merkezli full-stack web geliştirici. Fikrinizi çalışan bir ürüne dönüştürüyorum — hızlı, modern ve kullanıcı dostu.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
          <a href="#iletisim" style={{ display: "inline-flex", alignItems: "center", padding: "10px 22px", background: "#0F0F0F", color: "#fff", fontSize: 14, fontWeight: 600, borderRadius: 6, textDecoration: "none" }}>Proje Başlat</a>
          <a href="#projeler" style={{ display: "inline-flex", alignItems: "center", padding: "10px 22px", background: "transparent", color: "#0F0F0F", fontSize: 14, fontWeight: 500, borderRadius: 6, textDecoration: "none", border: "1px solid #D1D5DB" }}>Projelerimi Gör ↓</a>
        </div>
        <div style={{ display: "flex", gap: 32, marginTop: 48, paddingTop: 24, borderTop: "1px solid #E5E7EB", flexWrap: "wrap" }}>
          {[
            { n: "Klauz.app", l: "Yayında olan SaaS ürün" },
            { n: "Full-Stack", l: "Frontend + Backend" },
            { n: "AI", l: "Yapay zeka entegrasyonu" },
          ].map((s) => (
            <div key={s.l}>
              <div style={{ fontSize: 22, fontWeight: 700 }}>{s.n}</div>
              <div style={{ fontSize: 12, color: "#9CA3AF", fontFamily: mono, marginTop: 2 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projeler */}
      <section id="projeler" style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 64px" }}>
        <h2 style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9CA3AF", fontFamily: mono, marginBottom: 32 }}>Projeler</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {PROJECT_DATA.map((project) => {
            const isExternal = !!project.liveUrl;
            const Wrapper = isExternal ? "a" : Link;
            const wrapperProps = isExternal
              ? { href: project.liveUrl!, target: "_blank", rel: "noopener noreferrer" }
              : { href: `/projects/${project.id}` };

            return (
              <Wrapper
                key={project.id}
                {...(wrapperProps as any)}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ textDecoration: "none", color: "inherit", display: "block", transition: "transform 0.15s", transform: hovered === project.id ? "translateY(-2px)" : "none" }}
              >
                <Mockup project={project} />
                <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>{project.title}</h3>
                      <span style={{
                        fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 4, fontFamily: mono,
                        background: project.badge === "YAYINDA" ? "#ECFDF5" : "#F3F4F6",
                        color: project.badge === "YAYINDA" ? "#059669" : "#6B7280",
                      }}>
                        {project.badge}
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 4 }}>
                      <span style={{ fontSize: 12, fontFamily: mono, color: "#6B7280" }}>{project.type}</span>
                      <span style={{ color: "#D1D5DB" }}>·</span>
                      <span style={{ fontSize: 12, fontFamily: mono, color: "#9CA3AF" }}>{project.year}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#0F0F0F", padding: "6px 14px", borderRadius: 6, background: hovered === project.id ? "#F3F4F6" : "transparent", border: `1px solid ${hovered === project.id ? "#D1D5DB" : "transparent"}`, transition: "all 0.15s" }}>
                    {isExternal ? "Siteyi Aç ↗" : "Detayları Gör →"}
                  </div>
                </div>
                <p style={{ fontSize: 14, color: "#4B5563", marginTop: 8, maxWidth: 560, lineHeight: 1.65 }}>{project.brief}</p>
                <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
                  {project.stack.map((tech) => (
                    <span key={tech} style={{ fontSize: 11, fontFamily: mono, fontWeight: 500, padding: "3px 10px", borderRadius: 4, background: "#F3F4F6", color: "#4B5563" }}>{tech}</span>
                  ))}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </section>

      {/* Hizmetler */}
      <section id="hizmetler" style={{ background: "#F8F8F6", borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px" }}>
          <h2 style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9CA3AF", fontFamily: mono, marginBottom: 32 }}>Hizmetler</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {[
              { n: "Web Siteleri", d: "Kurumsal sitelerden tek sayfalık tanıtım sayfalarına kadar, SEO uyumlu ve hızlı web siteleri." },
              { n: "Web Uygulamaları", d: "SaaS platformları, yönetim panelleri, dahili araçlar. Next.js ve Supabase ile modern çözümler." },
              { n: "AI Entegrasyonu", d: "Mevcut iş süreçlerinize yapay zeka entegrasyonu. Belge analizi, otomatik raporlama, chatbot geliştirme." },
              { n: "Landing Page", d: "Ürün ve hizmet tanıtımları için dönüşüm odaklı, mobil uyumlu tek sayfa tasarımları." },
            ].map((s) => (
              <div key={s.n} style={{ padding: "20px 0", borderTop: "2px solid #0F0F0F" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{s.n}</h3>
                <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teknolojiler */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px" }}>
        <h2 style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9CA3AF", fontFamily: mono, marginBottom: 24 }}>Teknolojiler</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Sentry", "Lemon Squeezy", "DeepSeek API", "PostCSS", "Vercel", "Node.js", "Git"].map((t) => (
            <span key={t} style={{ fontSize: 13, fontWeight: 500, padding: "7px 16px", borderRadius: 6, border: "1px solid #E5E7EB", color: "#374151" }}>{t}</span>
          ))}
        </div>
      </section>

      {/* Hakkımda */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 56px" }}>
        <div style={{ padding: 32, borderRadius: 10, border: "1px solid #E5E7EB" }}>
          <h2 style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9CA3AF", fontFamily: mono, marginBottom: 16 }}>Hakkımda</h2>
          <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.75, marginBottom: 12 }}>
            Full-stack web geliştirme alanında çalışıyorum. Klauz&apos;u — AI destekli bir sözleşme analiz platformunu — sıfırdan tasarlayıp geliştirdim. Next.js, Supabase, Lemon Squeezy ödeme entegrasyonu ve DeepSeek API ile çalışan, gerçek kullanıcılara hizmet veren bir SaaS ürünü.
          </p>
          <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.75 }}>
            Bir ürünü fikir aşamasından yayına almaya kadar tüm süreçte tek başıma yürütebiliyorum. Projeniz hakkında konuşmak isterseniz, yazmanız yeterli.
          </p>
        </div>
      </section>

      {/* İletişim */}
      <section id="iletisim" style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 64px" }}>
        <div style={{ background: "#0F0F0F", borderRadius: 12, padding: "48px 32px", color: "#fff", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, marginBottom: 12 }}>Bir projeniz mi var?</h2>
          <p style={{ fontSize: 15, color: "#9CA3AF", maxWidth: 420, margin: "0 auto 28px", lineHeight: 1.6 }}>Projenizi anlatın, 24 saat içinde dönüş yaparım. İlk görüşme ücretsizdir.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:haberverenoguzhan@gmail.com" style={{ display: "inline-flex", padding: "12px 28px", background: "#fff", color: "#0F0F0F", fontSize: 14, fontWeight: 600, borderRadius: 6, textDecoration: "none" }}>E-posta Gönder</a>
            <a href="https://www.linkedin.com/in/oguzhan-haberveren/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", padding: "12px 28px", background: "transparent", color: "#fff", fontSize: 14, fontWeight: 500, borderRadius: 6, textDecoration: "none", border: "1px solid #374151" }}>LinkedIn</a>
          </div>
        </div>
      </section>

      <footer style={{ maxWidth: 900, margin: "0 auto", padding: "20px 24px 32px", borderTop: "1px solid #E5E7EB", display: "flex", justifyContent: "space-between", fontSize: 12, color: "#9CA3AF", fontFamily: mono }}>
        <span>© 2026 Oğuzhan Haberveren</span>
        <div style={{ display: "flex", gap: 16 }}>
          <a href="https://github.com/Oguzhan0001" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>GitHub</a>
          <a href="https://www.linkedin.com/in/oguzhan-haberveren/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>LinkedIn</a>
          <a href="https://klauz.app" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>Klauz</a>
        </div>
      </footer>
    </div>
  );
}