"use client";

import BackButton from "@/components/BackButton";
import { useLocale } from "@/lib/useLocale";

const tr = {
  nav: { product: "Ürün", pricing: "Fiyatlar", login: "Giriş Yap", cta: "Ücretsiz Başla" },
  pill: "Türkiye genelinde 200+ filo takip ediliyor",
  title: ["Her aracın nerede olduğunu bilin.", "Her zaman."],
  desc: "Lojistik şirketlerine gerçek zamanlı görünürlük, akıllı rotalar ve daha iyi kararlar için veri sağlayan filo yönetim yazılımı.",
  cta1: "14 Gün Ücretsiz Dene", cta2: "Demo İzle",
  dashLabels: [{ l: "Aktif", v: "187" }, { l: "Yolda", v: "143" }, { l: "Beklemede", v: "31" }, { l: "Çevrimdışı", v: "13" }],
  mapLabel: "İstanbul Metropoliten · Canlı",
  stats: [{ v: "%23", l: "Yakıt tasarrufu" }, { v: "4.2M", l: "Takip edilen teslimat" }, { v: "%99.7", l: "Çalışma süresi" }, { v: "12dk", l: "Ort. yanıt süresi" }],
  featTitle: "Filo yönetimi için ihtiyacınız olan her şey.",
  features: [
    { i: "◉", t: "Canlı Filo Takibi", d: "Tüm araçları tek haritada görün. 15 saniyede bir güncellenen GPS verileri." },
    { i: "⬡", t: "Rota Optimizasyonu", d: "Yakıt maliyetlerini %23'e kadar düşüren yapay zeka destekli rotalama." },
    { i: "▤", t: "Otomatik Raporlar", d: "Günlük, haftalık, aylık — oluşturulup e-postanıza teslim edilir." },
    { i: "◫", t: "Sürücü Yönetimi", d: "Vardiya planlama, uyumluluk takibi ve performans puanlama." },
  ],
  ctaTitle: "Filonuzu net bir şekilde görmeye hazır mısınız?",
  ctaSub: "14 gün ücretsiz deneme. Kredi kartı gerekmez.",
  ctaBtn: "Ücretsiz Denemeyi Başlat",
  footer: { copy: "© 2024 Atlas Lojistik", privacy: "Gizlilik", terms: "Kullanım Koşulları" },
};

const en = {
  nav: { product: "Product", pricing: "Pricing", login: "Log In", cta: "Start Free" },
  pill: "Now tracking 200+ fleets across Turkey",
  title: ["Know where every vehicle is.", "Always."],
  desc: "Fleet management software that gives logistics companies real-time visibility, smarter routes, and the data to make better decisions.",
  cta1: "Start 14-Day Free Trial", cta2: "Watch Demo",
  dashLabels: [{ l: "Active", v: "187" }, { l: "En Route", v: "143" }, { l: "Idle", v: "31" }, { l: "Offline", v: "13" }],
  mapLabel: "Istanbul Metropolitan · Live",
  stats: [{ v: "23%", l: "Fuel savings" }, { v: "4.2M", l: "Deliveries tracked" }, { v: "99.7%", l: "Uptime" }, { v: "12min", l: "Avg response" }],
  featTitle: "Everything you need to run a fleet.",
  features: [
    { i: "◉", t: "Live Fleet Tracking", d: "See every vehicle on a single map. Real-time GPS updates every 15 seconds." },
    { i: "⬡", t: "Route Optimization", d: "AI-powered routing that cuts fuel costs by up to 23%." },
    { i: "▤", t: "Automated Reports", d: "Daily, weekly, monthly — generated and delivered to your inbox." },
    { i: "◫", t: "Driver Management", d: "Scheduling, compliance tracking, and performance scoring." },
  ],
  ctaTitle: "Ready to see your fleet clearly?",
  ctaSub: "14-day free trial. No credit card required.",
  ctaBtn: "Start Your Free Trial",
  footer: { copy: "© 2024 Atlas Logistics", privacy: "Privacy", terms: "Terms" },
};

const teal = "#00D4AA"; const navy = "#0B1426"; const slate = "#94A3B8";
const statColors = [teal, "#3B82F6", "#F59E0B", "#EF4444"];

export default function AtlasPage() {
  const { locale } = useLocale();
  const s = locale === "tr" ? tr : en;
  const sans = "'Inter', system-ui, sans-serif";
  const mono = "'IBM Plex Mono', monospace";

  return (
    <div style={{ fontFamily: sans, color: "#F8FAFC", background: navy, minHeight: "100vh" }}>
      <BackButton />
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: 6, background: `linear-gradient(135deg, ${teal}, #0891B2)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800 }}>A</div>
          <span style={{ fontSize: 17, fontWeight: 700 }}>Atlas</span>
        </div>
        <div style={{ display: "flex", gap: 24, fontSize: 13, color: slate, fontWeight: 500, alignItems: "center" }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>{s.nav.product}</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>{s.nav.pricing}</a>
          <a href="#" style={{ color: "#F8FAFC", textDecoration: "none" }}>{s.nav.login}</a>
          <button style={{ padding: "8px 18px", background: teal, color: navy, fontSize: 13, fontWeight: 700, border: "none", borderRadius: 6, cursor: "pointer" }}>{s.nav.cta}</button>
        </div>
      </nav>

      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "56px 24px 48px", textAlign: "center" }}>
        <div style={{ display: "inline-block", padding: "5px 14px", borderRadius: 20, border: "1px solid #1E3A5F", fontSize: 12, fontWeight: 500, color: teal, fontFamily: mono, marginBottom: 20 }}>{s.pill}</div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.04em", maxWidth: 700, margin: "0 auto" }}>
          {s.title[0]} <span style={{ color: teal }}>{s.title[1]}</span>
        </h1>
        <p style={{ fontSize: 16, color: slate, maxWidth: 520, margin: "20px auto 32px", lineHeight: 1.65 }}>{s.desc}</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button style={{ padding: "13px 32px", background: teal, color: navy, fontSize: 14, fontWeight: 700, border: "none", borderRadius: 6, cursor: "pointer" }}>{s.cta1}</button>
          <button style={{ padding: "13px 32px", background: "transparent", color: "#F8FAFC", fontSize: 14, fontWeight: 500, border: "1px solid #334155", borderRadius: 6, cursor: "pointer" }}>{s.cta2}</button>
        </div>
      </section>

      <section style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px 64px" }}>
        <div style={{ borderRadius: 12, border: "1px solid #1E293B", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
          <div style={{ display: "flex", gap: 5, padding: "10px 14px", background: "#111827", borderBottom: "1px solid #1E293B" }}>
            {[0, 1, 2].map(i => <div key={i} style={{ width: 8, height: 8, borderRadius: 4, background: "#374151" }} />)}
          </div>
          <div style={{ display: "flex", height: 280, background: "#0F172A" }}>
            <div style={{ width: 52, background: "#111827", borderRight: "1px solid #1E293B", padding: "14px 8px", display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
              <div style={{ width: 24, height: 24, borderRadius: 6, background: teal, opacity: 0.8 }} />
              <div style={{ width: 16, height: 1, background: "#1E293B", margin: "4px 0" }} />
              {[0, 1, 2, 3].map(i => <div key={i} style={{ width: 22, height: 22, borderRadius: 5, background: i === 0 ? teal : "#1E293B", opacity: i === 0 ? 0.25 : 0.3 }} />)}
            </div>
            <div style={{ flex: 1, padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", gap: 10 }}>
                {s.dashLabels.map((d, i) => (
                  <div key={d.l} style={{ flex: 1, padding: "10px 12px", background: "#111827", borderRadius: 8, border: "1px solid #1E293B" }}>
                    <div style={{ fontSize: 9, color: slate, fontFamily: mono, marginBottom: 4 }}>{d.l}</div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: statColors[i] }}>{d.v}</div>
                  </div>
                ))}
              </div>
              <div style={{ flex: 1, borderRadius: 8, background: "#111827", border: "1px solid #1E293B", position: "relative", overflow: "hidden" }}>
                {[25, 50, 75].map(p => <div key={`h${p}`} style={{ position: "absolute", top: `${p}%`, left: 0, right: 0, height: 1, background: "#1E293B" }} />)}
                {[25, 50, 75].map(p => <div key={`v${p}`} style={{ position: "absolute", left: `${p}%`, top: 0, bottom: 0, width: 1, background: "#1E293B" }} />)}
                {[{ x: 20, y: 30 }, { x: 45, y: 55 }, { x: 70, y: 25 }, { x: 35, y: 70 }, { x: 80, y: 60 }, { x: 15, y: 50 }, { x: 55, y: 40 }, { x: 65, y: 75 }, { x: 40, y: 20 }, { x: 25, y: 65 }].map((pos, i) => (
                  <div key={i} style={{ position: "absolute", left: `${pos.x}%`, top: `${pos.y}%`, width: 8, height: 8, borderRadius: 4, background: i < 7 ? teal : "#F59E0B", opacity: 0.8, boxShadow: `0 0 8px ${i < 7 ? teal : "#F59E0B"}40` }} />
                ))}
                <div style={{ position: "absolute", bottom: 8, right: 10, fontSize: 9, fontFamily: mono, color: "#475569" }}>{s.mapLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid #1E293B", borderBottom: "1px solid #1E293B" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, textAlign: "center" }}>
          {s.stats.map(st => (
            <div key={st.l}><div style={{ fontSize: 32, fontWeight: 800, color: teal }}>{st.v}</div><div style={{ fontSize: 12, color: slate, fontFamily: mono, marginTop: 4 }}>{st.l}</div></div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "64px 24px" }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 40 }}>{s.featTitle}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {s.features.map(f => (
            <div key={f.t} style={{ padding: 24, borderRadius: 10, border: "1px solid #1E293B", background: "#111827" }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: `${teal}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: teal, marginBottom: 14 }}>{f.i}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{f.t}</h3>
              <p style={{ fontSize: 13, color: slate, lineHeight: 1.6 }}>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ borderTop: "1px solid #1E293B" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "56px 24px", textAlign: "center" }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>{s.ctaTitle}</h2>
          <p style={{ fontSize: 14, color: slate, marginBottom: 24 }}>{s.ctaSub}</p>
          <button style={{ padding: "14px 36px", background: teal, color: navy, fontSize: 15, fontWeight: 700, border: "none", borderRadius: 6, cursor: "pointer" }}>{s.ctaBtn}</button>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid #1E293B", padding: 24, maxWidth: 1000, margin: "0 auto", display: "flex", justifyContent: "space-between", fontSize: 12, color: "#475569", fontFamily: mono }}>
        <span>{s.footer.copy}</span>
        <div style={{ display: "flex", gap: 16 }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>{s.footer.privacy}</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>{s.footer.terms}</a>
        </div>
      </footer>
    </div>
  );
}