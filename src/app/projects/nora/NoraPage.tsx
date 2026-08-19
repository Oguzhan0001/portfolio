"use client";

import BackButton from "@/components/BackButton";

export default function NoraPage() {
  const sans = "'Plus Jakarta Sans', system-ui, sans-serif";
  const sage = "#2D6A4F";
  const bgMain = "#FEFBF6";
  const bgMint = "#F0F7F4";
  const olive = "#6B705C";

  return (
    <div style={{ fontFamily: sans, color: "#1A1A2E", background: bgMain, minHeight: "100vh" }}>
      <BackButton />

      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", maxWidth: 960, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 26, height: 26, borderRadius: 13, background: sage, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: "#86EFAC" }} />
          </div>
          <span style={{ fontSize: 18, fontWeight: 800 }}>nora</span>
        </div>
        <div style={{ display: "flex", gap: 20, fontSize: 13, color: olive, fontWeight: 500, alignItems: "center" }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Özellikler</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Bilim</a>
          <button style={{ padding: "8px 20px", background: sage, color: "#fff", fontSize: 13, fontWeight: 700, border: "none", borderRadius: 20, cursor: "pointer" }}>İndir</button>
        </div>
      </nav>

      <section style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px 56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
        <div>
          <div style={{ display: "inline-block", padding: "5px 12px", borderRadius: 14, background: bgMint, fontSize: 12, fontWeight: 600, color: sage, marginBottom: 16 }}>Türkiye&apos;nin 1 Numaralı Sağlık Uygulaması</div>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 46px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.035em" }}>Daha iyi hisset.<br /><span style={{ color: sage }}>Nedenini bil.</span></h1>
          <p style={{ fontSize: 15, color: olive, lineHeight: 1.7, marginTop: 16, maxWidth: 400 }}>Nora uyku, hareket ve stresi takip eder — sonra neyin işe yarayıp neyin yaramadığını gösterir. Tahmin yok, suçluluk yok.</p>
          <div style={{ display: "flex", gap: 12, marginTop: 28, alignItems: "center" }}>
            <button style={{ padding: "13px 28px", background: sage, color: "#fff", fontSize: 14, fontWeight: 700, border: "none", borderRadius: 24, cursor: "pointer" }}>Ücretsiz İndir</button>
            <span style={{ fontSize: 12, color: "#9CA3AF" }}>iOS ve Android</span>
          </div>
          <div style={{ display: "flex", gap: 4, marginTop: 24, alignItems: "center" }}>
            {[1, 2, 3, 4, 5].map((i) => <span key={i} style={{ color: "#F59E0B", fontSize: 14 }}>★</span>)}
            <span style={{ fontSize: 12, color: olive, marginLeft: 6 }}>4.8 · 12.000+ değerlendirme</span>
          </div>
        </div>

        {/* Telefon Mockup */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: 200, height: 400, borderRadius: 28, background: "#1A1A2E", border: "3px solid #2A2A40", padding: "12px 10px", boxShadow: "0 20px 50px rgba(0,0,0,0.12)" }}>
            <div style={{ width: 80, height: 18, borderRadius: 10, background: "#1A1A2E", margin: "-2px auto 8px", border: "3px solid #2A2A40" }} />
            <div style={{ height: "calc(100% - 26px)", borderRadius: 18, background: bgMint, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ padding: "8px 14px 4px", display: "flex", justifyContent: "space-between", fontSize: 9, fontWeight: 600, color: olive }}>
                <span>9:41</span>
                <div style={{ width: 12, height: 6, borderRadius: 2, background: olive }} />
              </div>
              <div style={{ padding: "16px 16px 12px" }}>
                <div style={{ fontSize: 11, color: olive }}>Günaydın</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#1A1A2E" }}>Ayşe</div>
              </div>
              <div style={{ margin: "0 14px", padding: 14, borderRadius: 14, background: sage, color: "#fff" }}>
                <div style={{ fontSize: 9, opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.1em" }}>Sağlık Puanı</div>
                <div style={{ fontSize: 32, fontWeight: 800, marginTop: 2 }}>84</div>
                <div style={{ fontSize: 10, opacity: 0.8, marginTop: 6 }}>↑ Geçen haftaya göre 12 puan</div>
              </div>
              <div style={{ display: "flex", gap: 8, padding: "12px 14px", flex: 1 }}>
                {[{ l: "Uyku", v: "7sa 42dk", c: "#6366F1" }, { l: "Adım", v: "6.240", c: "#F59E0B" }].map((c) => (
                  <div key={c.l} style={{ flex: 1, padding: 10, borderRadius: 12, background: "#fff", border: "1px solid #E5E7EB" }}>
                    <div style={{ width: 6, height: 6, borderRadius: 3, background: c.c, marginBottom: 6 }} />
                    <div style={{ fontSize: 8, color: olive }}>{c.l}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#1A1A2E" }}>{c.v}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-around", padding: "10px 0", borderTop: "1px solid #E5E7EB" }}>
                {["●", "◆", "■", "▲"].map((icon, i) => <div key={i} style={{ fontSize: 10, color: i === 0 ? sage : "#CBD5E1" }}>{icon}</div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faydalar */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "40px 24px 64px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8, textAlign: "center" }}>Gerçekten önemli olan üç şey.</h2>
        <p style={{ fontSize: 14, color: olive, textAlign: "center", marginBottom: 44, maxWidth: 460, marginLeft: "auto", marginRight: "auto" }}>Kalori sayımı, kilo takibi ve sizi kendiniz hakkında kötü hissettiren her şeyi bilinçli olarak dışarıda bıraktık.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {[
            { t: "Daha iyi uyu", d: "Uyku öncesi yatıştırma rutinleri ve sizi en hafif uyku evrenizde uyandıran akıllı alarm.", m: "Kullanıcılar her gece ortalama 47 dakika daha derin uyuyor." },
            { t: "Daha çok hareket et", d: "Enerji seviyenize uyum sağlayan kısa egzersizler. 5 dakika ya da 45 — her sabah siz seçin.", m: "Kullanıcıların %82'si 30 gün sonra daha düzenli egzersiz yapıyor." },
            { t: "Daha az stres", d: "Klinik araştırmalarla desteklenen nefes egzersizleri ve günlük yazma önerileri.", m: "İlk iki haftada stres seviyeleri %31 düşüyor." },
          ].map((b, i) => (
            <div key={b.t} style={{ padding: 24, borderRadius: 16, background: i === 0 ? sage : "#fff", color: i === 0 ? "#fff" : "#1A1A2E", border: i === 0 ? "none" : "1px solid #E8E4DF" }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>{b.t}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.6, opacity: i === 0 ? 0.85 : 0.7, marginBottom: 16 }}>{b.d}</p>
              <div style={{ padding: "10px 12px", borderRadius: 8, background: i === 0 ? "rgba(255,255,255,0.15)" : bgMint, fontSize: 12, fontWeight: 600, color: i === 0 ? "#86EFAC" : sage }}>{b.m}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Yorumlar */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px 56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {[
            { t: "Her sağlık uygulamasını denedim. Bu, 30. günde de açtığım ilk uygulama.", n: "Ayşe K.", r: "Ürün Tasarımcısı" },
            { t: "Sadece uyku takibi bile buna değer. Neden bazı sabahlar daha kötü hissettiğimi sonunda anlıyorum.", n: "Can M.", r: "Yazılım Mühendisi" },
          ].map((t) => (
            <div key={t.n} style={{ padding: 28, borderRadius: 16, border: "1px solid #E8E4DF", background: "#fff" }}>
              <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>{[1, 2, 3, 4, 5].map((i) => <span key={i} style={{ color: "#F59E0B", fontSize: 12 }}>★</span>)}</div>
              <p style={{ fontSize: 15, lineHeight: 1.65, marginBottom: 16, fontWeight: 500 }}>&ldquo;{t.t}&rdquo;</p>
              <div style={{ fontSize: 13, fontWeight: 700 }}>{t.n}</div>
              <div style={{ fontSize: 12, color: olive }}>{t.r}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px 64px" }}>
        <div style={{ borderRadius: 20, background: sage, padding: "56px 32px", textAlign: "center", color: "#fff", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: 80, background: "rgba(255,255,255,0.06)" }} />
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12, position: "relative" }}>Bu hafta daha iyi hissetmeye başlayın.</h2>
          <p style={{ fontSize: 14, opacity: 0.8, maxWidth: 380, margin: "0 auto 28px", position: "relative" }}>İlk 30 gün ücretsiz. İstediğiniz zaman iptal edin. Verileriniz sizin kalır.</p>
          <button style={{ padding: "14px 36px", background: "#fff", color: sage, fontSize: 15, fontWeight: 800, border: "none", borderRadius: 24, cursor: "pointer", position: "relative" }}>Nora&apos;yı Ücretsiz İndir</button>
        </div>
      </section>

      <footer style={{ maxWidth: 960, margin: "0 auto", padding: "24px", borderTop: "1px solid #E8E4DF", display: "flex", justifyContent: "space-between", fontSize: 12, color: "#9CA3AF" }}>
        <span>© 2024 Nora Sağlık A.Ş.</span>
        <div style={{ display: "flex", gap: 16 }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Gizlilik</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Instagram</a>
        </div>
      </footer>
    </div>
  );
}