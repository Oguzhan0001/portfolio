"use client";

import { useState } from "react";
import Link from "next/link";
import Mockup from "@/components/Mockup";
import { useLocale } from "@/lib/useLocale";
import { t } from "@/lib/translations";

const PROJECT_DATA = [
  {
    id: "klauz", title: "Klauz", year: "2026",
    stack: ["Next.js", "TypeScript", "Supabase", "Lemon Squeezy", "DeepSeek"],
    brandColor: "#1a1a2e", brandLight: "#E8E5FF", brandMid: "#6366F1",
    mockup: "saas" as const, liveUrl: "https://klauz.app", isLive: true,
  },
  {
    id: "meridian", title: "Meridian Coffee", year: "2024",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    brandColor: "#1B4332", brandLight: "#D8F3DC", brandMid: "#2D6A4F",
    mockup: "ecommerce" as const, liveUrl: null, isLive: false,
  },
  {
    id: "atlas", title: "Atlas Logistics", year: "2024",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    brandColor: "#1E3A5F", brandLight: "#DBEAFE", brandMid: "#3B82F6",
    mockup: "dashboard" as const, liveUrl: null, isLive: false,
  },
  {
    id: "nora", title: "Nora Wellness", year: "2023",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    brandColor: "#7C2D12", brandLight: "#FFEDD5", brandMid: "#EA580C",
    mockup: "landing" as const, liveUrl: null, isLive: false,
  },
];

export default function PortfolioPage() {
  const [hovered, setHovered] = useState<string | null>(null);
  const { locale, toggleLocale } = useLocale();
  const s = t[locale];
  const font = "'Space Grotesk', system-ui, sans-serif";
  const mono = "'IBM Plex Mono', monospace";

  return (
    <div style={{ fontFamily: font, color: "#0F0F0F", background: "#FFFFFF", minHeight: "100vh", lineHeight: 1.6 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "28px 24px 20px", maxWidth: 900, margin: "0 auto", borderBottom: "1px solid #E5E7EB" }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em" }}>Oğuzhan Haberveren</div>
          <div style={{ fontSize: 12, color: "#6B7280", fontFamily: mono, marginTop: 2 }}>Web {locale === "tr" ? "Geliştirici" : "Developer"}</div>
        </div>
        <nav style={{ display: "flex", gap: 20, fontSize: 13, color: "#6B7280", fontWeight: 500, alignItems: "center" }}>
          <button
            onClick={toggleLocale}
            style={{
              fontSize: 11, fontWeight: 700, fontFamily: mono,
              padding: "4px 10px", borderRadius: 4,
              background: "#F3F4F6", color: "#374151",
              border: "1px solid #E5E7EB", cursor: "pointer",
              letterSpacing: "0.05em",
            }}
          >
            {locale === "tr" ? "EN" : "TR"}
          </button>
          <a href="#projeler" style={{ color: "inherit", textDecoration: "none" }}>{s.nav.projects}</a>
          <a href="#hizmetler" style={{ color: "inherit", textDecoration: "none" }}>{s.nav.services}</a>
          <a href="#iletisim" style={{ color: "inherit", textDecoration: "none" }}>{s.nav.contact}</a>
        </nav>
      </header>

      <section style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px 56px" }}>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.03em", maxWidth: 620 }}>
          {s.hero.title}
        </h1>
        <p style={{ fontSize: 16, color: "#4B5563", maxWidth: 520, marginTop: 16, lineHeight: 1.7 }}>
          {s.hero.subtitle}
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
          <a href="#iletisim" style={{ display: "inline-flex", alignItems: "center", padding: "10px 22px", background: "#0F0F0F", color: "#fff", fontSize: 14, fontWeight: 600, borderRadius: 6, textDecoration: "none" }}>{s.hero.cta}</a>
          <a href="#projeler" style={{ display: "inline-flex", alignItems: "center", padding: "10px 22px", background: "transparent", color: "#0F0F0F", fontSize: 14, fontWeight: 500, borderRadius: 6, textDecoration: "none", border: "1px solid #D1D5DB" }}>{s.hero.cta2}</a>
        </div>
        <div style={{ display: "flex", gap: 32, marginTop: 48, paddingTop: 24, borderTop: "1px solid #E5E7EB", flexWrap: "wrap" }}>
          {s.stats.map((stat) => (
            <div key={stat.l}>
              <div style={{ fontSize: 22, fontWeight: 700 }}>{stat.n}</div>
              <div style={{ fontSize: 12, color: "#9CA3AF", fontFamily: mono, marginTop: 2 }}>{stat.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="projeler" style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 64px" }}>
        <h2 style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9CA3AF", fontFamily: mono, marginBottom: 32 }}>{s.projectsTitle}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {PROJECT_DATA.map((project) => {
            const isExternal = !!project.liveUrl;
            const Wrapper = isExternal ? "a" : Link;
            const wrapperProps = isExternal
              ? { href: project.liveUrl!, target: "_blank", rel: "noopener noreferrer" }
              : { href: `/projects/${project.id}` };
            const projectT = s.projects[project.id as keyof typeof s.projects];
            const badge = project.isLive ? s.badges.live : s.badges.concept;

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
                        background: project.isLive ? "#ECFDF5" : "#F3F4F6",
                        color: project.isLive ? "#059669" : "#6B7280",
                      }}>{badge}</span>
                    </div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 4 }}>
                      <span style={{ fontSize: 12, fontFamily: mono, color: "#6B7280" }}>{projectT.type}</span>
                      <span style={{ color: "#D1D5DB" }}>·</span>
                      <span style={{ fontSize: 12, fontFamily: mono, color: "#9CA3AF" }}>{project.year}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#0F0F0F", padding: "6px 14px", borderRadius: 6, background: hovered === project.id ? "#F3F4F6" : "transparent", border: `1px solid ${hovered === project.id ? "#D1D5DB" : "transparent"}`, transition: "all 0.15s" }}>
                    {isExternal ? s.viewSite : s.viewDetails}
                  </div>
                </div>
                <p style={{ fontSize: 14, color: "#4B5563", marginTop: 8, maxWidth: 560, lineHeight: 1.65 }}>{projectT.brief}</p>
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

      <section id="hizmetler" style={{ background: "#F8F8F6", borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px" }}>
          <h2 style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9CA3AF", fontFamily: mono, marginBottom: 32 }}>{s.servicesTitle}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {s.services.map((svc) => (
              <div key={svc.n} style={{ padding: "20px 0", borderTop: "2px solid #0F0F0F" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{svc.n}</h3>
                <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6 }}>{svc.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px" }}>
        <h2 style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9CA3AF", fontFamily: mono, marginBottom: 24 }}>{s.techTitle}</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Sentry", "Lemon Squeezy", "DeepSeek API", "PostCSS", "Vercel", "Node.js", "Git"].map((tech) => (
            <span key={tech} style={{ fontSize: 13, fontWeight: 500, padding: "7px 16px", borderRadius: 6, border: "1px solid #E5E7EB", color: "#374151" }}>{tech}</span>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 56px" }}>
        <div style={{ padding: 32, borderRadius: 10, border: "1px solid #E5E7EB" }}>
          <h2 style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9CA3AF", fontFamily: mono, marginBottom: 16 }}>{s.aboutTitle}</h2>
          <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.75, marginBottom: 12 }}>{s.about1}</p>
          <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.75 }}>{s.about2}</p>
        </div>
      </section>

      <section id="iletisim" style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 64px" }}>
        <div style={{ background: "#0F0F0F", borderRadius: 12, padding: "48px 32px", color: "#fff", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, marginBottom: 12 }}>{s.contactTitle}</h2>
          <p style={{ fontSize: 15, color: "#9CA3AF", maxWidth: 420, margin: "0 auto 28px", lineHeight: 1.6 }}>{s.contactSubtitle}</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:haberverenoguzhan@gmail.com" style={{ display: "inline-flex", padding: "12px 28px", background: "#fff", color: "#0F0F0F", fontSize: 14, fontWeight: 600, borderRadius: 6, textDecoration: "none" }}>{s.contactEmail}</a>
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