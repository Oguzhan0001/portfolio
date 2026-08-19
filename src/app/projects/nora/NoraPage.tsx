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
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Features</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Science</a>
          <button style={{ padding: "8px 20px", background: sage, color: "#fff", fontSize: 13, fontWeight: 700, border: "none", borderRadius: 20, cursor: "pointer" }}>Download</button>
        </div>
      </nav>

      <section style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px 56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
        <div>
          <div style={{ display: "inline-block", padding: "5px 12px", borderRadius: 14, background: bgMint, fontSize: 12, fontWeight: 600, color: sage, marginBottom: 16 }}>#1 Wellness App in Turkey</div>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 46px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.035em" }}>Feel better.<br /><span style={{ color: sage }}>Know why.</span></h1>
          <p style={{ fontSize: 15, color: olive, lineHeight: 1.7, marginTop: 16, maxWidth: 400 }}>Nora tracks sleep, movement, and stress — then shows you exactly what&apos;s working and what isn&apos;t. No guesswork, no guilt.</p>
          <div style={{ display: "flex", gap: 12, marginTop: 28, alignItems: "center" }}>
            <button style={{ padding: "13px 28px", background: sage, color: "#fff", fontSize: 14, fontWeight: 700, border: "none", borderRadius: 24, cursor: "pointer" }}>Download Free</button>
            <span style={{ fontSize: 12, color: "#9CA3AF" }}>iOS & Android</span>
          </div>
          <div style={{ display: "flex", gap: 4, marginTop: 24, alignItems: "center" }}>
            {[1, 2, 3, 4, 5].map((i) => <span key={i} style={{ color: "#F59E0B", fontSize: 14 }}>★</span>)}
            <span style={{ fontSize: 12, color: olive, marginLeft: 6 }}>4.8 · 12K+ reviews</span>
          </div>
        </div>

        {/* Phone Mockup */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: 200, height: 400, borderRadius: 28, background: "#1A1A2E", border: "3px solid #2A2A40", padding: "12px 10px", boxShadow: "0 20px 50px rgba(0,0,0,0.12)" }}>
            <div style={{ width: 80, height: 18, borderRadius: 10, background: "#1A1A2E", margin: "-2px auto 8px", border: "3px solid #2A2A40" }} />
            <div style={{ height: "calc(100% - 26px)", borderRadius: 18, background: bgMint, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ padding: "8px 14px 4px", display: "flex", justifyContent: "space-between", fontSize: 9, fontWeight: 600, color: olive }}>
                <span>9:41</span>
                <div style={{ width: 12, height: 6, borderRadius: 2, background: olive }} />
              </div>
              <div style={{ padding: "16px 16px 12px" }}>
                <div style={{ fontSize: 11, color: olive }}>Good morning</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#1A1A2E" }}>Ayşe</div>
              </div>
              <div style={{ margin: "0 14px", padding: 14, borderRadius: 14, background: sage, color: "#fff" }}>
                <div style={{ fontSize: 9, opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.1em" }}>Wellness Score</div>
                <div style={{ fontSize: 32, fontWeight: 800, marginTop: 2 }}>84</div>
                <div style={{ fontSize: 10, opacity: 0.8, marginTop: 6 }}>↑ 12 pts from last week</div>
              </div>
              <div style={{ display: "flex", gap: 8, padding: "12px 14px", flex: 1 }}>
                {[{ l: "Sleep", v: "7h 42m", c: "#6366F1" }, { l: "Steps", v: "6,240", c: "#F59E0B" }].map((c) => (
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

      {/* Benefits */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "40px 24px 64px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8, textAlign: "center" }}>Three things that actually matter.</h2>
        <p style={{ fontSize: 14, color: olive, textAlign: "center", marginBottom: 44, maxWidth: 460, marginLeft: "auto", marginRight: "auto" }}>We deliberately left out calorie counting, weight tracking, and anything that makes you feel worse.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {[
            { t: "Sleep better", d: "Guided wind-down routines and smart alarm that wakes you in your lightest sleep phase.", m: "47 more minutes of deep sleep per night." },
            { t: "Move more", d: "Short, adaptive workouts that fit your energy level. 5 minutes or 45.", m: "82% exercise more consistently after 30 days." },
            { t: "Stress less", d: "Breathing exercises and journaling prompts backed by clinical research.", m: "Stress levels drop 31% in two weeks." },
          ].map((b, i) => (
            <div key={b.t} style={{ padding: 24, borderRadius: 16, background: i === 0 ? sage : "#fff", color: i === 0 ? "#fff" : "#1A1A2E", border: i === 0 ? "none" : "1px solid #E8E4DF" }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>{b.t}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.6, opacity: i === 0 ? 0.85 : 0.7, marginBottom: 16 }}>{b.d}</p>
              <div style={{ padding: "10px 12px", borderRadius: 8, background: i === 0 ? "rgba(255,255,255,0.15)" : bgMint, fontSize: 12, fontWeight: 600, color: i === 0 ? "#86EFAC" : sage }}>{b.m}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px 56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {[
            { t: "I've tried every wellness app. This is the first one I actually opened on day 30.", n: "Ayşe K.", r: "Product Designer" },
            { t: "The sleep tracking alone is worth it. I finally understand why some mornings feel worse.", n: "Can M.", r: "Software Engineer" },
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
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12, position: "relative" }}>Start feeling better this week.</h2>
          <p style={{ fontSize: 14, opacity: 0.8, maxWidth: 380, margin: "0 auto 28px", position: "relative" }}>Free for 30 days. Cancel anytime. Your data stays yours.</p>
          <button style={{ padding: "14px 36px", background: "#fff", color: sage, fontSize: 15, fontWeight: 800, border: "none", borderRadius: 24, cursor: "pointer", position: "relative" }}>Download Nora Free</button>
        </div>
      </section>

      <footer style={{ maxWidth: 960, margin: "0 auto", padding: "24px", borderTop: "1px solid #E8E4DF", display: "flex", justifyContent: "space-between", fontSize: 12, color: "#9CA3AF" }}>
        <span>© 2024 Nora Health Inc.</span>
        <div style={{ display: "flex", gap: 16 }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Privacy</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Instagram</a>
        </div>
      </footer>
    </div>
  );
}
