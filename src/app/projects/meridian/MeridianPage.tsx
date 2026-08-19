"use client";

import BackButton from "@/components/BackButton";

const PRODUCTS = [
  { name: "Ethiopian Yirgacheffe", origin: "Sidamo, Ethiopia", roast: "Light", notes: "Blueberry, jasmine, citrus zest", price: "$18.50", bg: "#2D5A3E" },
  { name: "Colombian Supremo", origin: "Huila, Colombia", roast: "Medium", notes: "Caramel, walnut, dark chocolate", price: "$16.00", bg: "#5C4033" },
  { name: "Sumatra Mandheling", origin: "Aceh, Indonesia", roast: "Dark", notes: "Cedar, tobacco, molasses", price: "$17.50", bg: "#1A3A2A" },
];

export default function MeridianPage() {
  const serif = "'Libre Caslon Text', Georgia, serif";
  const sans = "'DM Sans', system-ui, sans-serif";
  const green = "#1A3A2A";
  const cream = "#FAF7F2";
  const amber = "#C67D4A";

  return (
    <div style={{ fontFamily: sans, color: green, background: cream, minHeight: "100vh" }}>
      <BackButton />

      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", maxWidth: 960, margin: "0 auto" }}>
        <div style={{ fontFamily: serif, fontSize: 20, fontWeight: 700 }}>Meridian</div>
        <div style={{ display: "flex", gap: 20, fontSize: 13, fontWeight: 500, color: "#5C7A6A" }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Shop</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Subscriptions</a>
          <a href="#" style={{ color: green, textDecoration: "none", fontWeight: 600 }}>Cart (0)</a>
        </div>
      </nav>

      <section style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px 64px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: amber, marginBottom: 16 }}>Single-Origin Specialty Coffee</p>
          <h1 style={{ fontFamily: serif, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, lineHeight: 1.15 }}>Coffee worth<br />waking up for.</h1>
          <p style={{ fontSize: 15, color: "#5C7A6A", lineHeight: 1.7, marginTop: 16, maxWidth: 380 }}>We source, roast, and deliver exceptional single-origin coffees from small farms. Freshly roasted, at your door within 48 hours.</p>
          <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
            <button style={{ padding: "12px 28px", background: green, color: cream, fontSize: 14, fontWeight: 600, border: "none", borderRadius: 4, cursor: "pointer" }}>Shop Now</button>
            <button style={{ padding: "12px 28px", background: "transparent", color: green, fontSize: 14, fontWeight: 500, border: `1.5px solid ${green}`, borderRadius: 4, cursor: "pointer" }}>Subscribe</button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: 240, height: 300 }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: 190, height: 260, borderRadius: 100, background: green, opacity: 0.08 }} />
            <div style={{ position: "absolute", bottom: 20, left: 10, width: 170, height: 230, borderRadius: 8, background: green, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 20 }}>
              <div style={{ width: 50, height: 3, background: amber, borderRadius: 2, marginBottom: 8 }} />
              <div style={{ fontFamily: serif, fontSize: 15, color: cream, fontWeight: 700 }}>Ethiopian<br />Yirgacheffe</div>
              <div style={{ fontSize: 11, color: "#A8C5B5", marginTop: 6 }}>Light Roast · 250g</div>
            </div>
            <div style={{ position: "absolute", top: 30, right: 15, width: 50, height: 50, borderRadius: 25, background: amber, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#fff" }}>NEW</div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", borderTop: "1px solid #E8DFD4", borderBottom: "1px solid #E8DFD4" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "56px 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 32 }}>
            <h2 style={{ fontFamily: serif, fontSize: 28, fontWeight: 700 }}>This month&apos;s selection</h2>
            <a href="#" style={{ fontSize: 13, fontWeight: 600, color: amber, textDecoration: "none" }}>View all →</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {PRODUCTS.map((p) => (
              <div key={p.name} style={{ border: "1px solid #E8DFD4", borderRadius: 8, overflow: "hidden" }}>
                <div style={{ height: 150, background: p.bg, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <div style={{ width: 50, height: 70, borderRadius: 4, background: "rgba(255,255,255,0.15)" }} />
                  <div style={{ position: "absolute", top: 10, left: 10, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.7)" }}>{p.roast}</div>
                </div>
                <div style={{ padding: 16 }}>
                  <h3 style={{ fontFamily: serif, fontSize: 16, fontWeight: 700, marginBottom: 2 }}>{p.name}</h3>
                  <p style={{ fontSize: 12, color: "#8B7D6B", marginBottom: 8 }}>{p.origin}</p>
                  <p style={{ fontSize: 12, color: "#5C7A6A", fontStyle: "italic", marginBottom: 12 }}>{p.notes}</p>
                  <div style={{ fontSize: 16, fontWeight: 700 }}>{p.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 960, margin: "0 auto", padding: "56px 24px" }}>
        <h2 style={{ fontFamily: serif, fontSize: 28, fontWeight: 700, marginBottom: 32 }}>From farm to your cup</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[
            { t: "Source", d: "Direct relationships with farms in 9 countries. Every lot is cupped and scored before we commit." },
            { t: "Roast", d: "Small-batch roasting in a restored Probat from 1972. Each origin gets its own profile." },
            { t: "Deliver", d: "Roasted on Tuesday, shipped on Wednesday. You brew it at peak flavor." },
          ].map((s, i) => (
            <div key={s.t} style={{ borderTop: `2px solid ${i === 0 ? amber : "#E8DFD4"}`, paddingTop: 20 }}>
              <h3 style={{ fontFamily: serif, fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{s.t}</h3>
              <p style={{ fontSize: 13, color: "#5C7A6A", lineHeight: 1.65 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: green, color: cream }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "56px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: serif, fontSize: 32, fontWeight: 700, marginBottom: 12 }}>Your first bag is on us.</h2>
          <p style={{ fontSize: 14, color: "#A8C5B5", maxWidth: 400, margin: "0 auto 24px" }}>Subscribe and get a free 250g bag with your first delivery.</p>
          <button style={{ padding: "14px 36px", background: amber, color: "#fff", fontSize: 14, fontWeight: 700, border: "none", borderRadius: 4, cursor: "pointer" }}>Claim Your Free Bag</button>
        </div>
      </section>

      <footer style={{ maxWidth: 960, margin: "0 auto", padding: "28px 24px", display: "flex", justifyContent: "space-between", fontSize: 12, color: "#8B7D6B" }}>
        <span>© 2024 Meridian Coffee Co.</span>
        <div style={{ display: "flex", gap: 16 }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Instagram</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Privacy</a>
        </div>
      </footer>
    </div>
  );
}
