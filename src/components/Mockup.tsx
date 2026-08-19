type Project = {
  brandColor: string;
  brandLight: string;
  brandMid: string;
  mockup: "saas" | "ecommerce" | "dashboard" | "landing";
};

export default function Mockup({ project }: { project: Project }) {
  const layouts: Record<string, React.ReactNode> = {
    saas: (
      <div style={{ background: "#0F0F1A", height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 14px", borderBottom: "1px solid #1E1E2E" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 16, height: 16, borderRadius: 4, background: project.brandMid }} />
            <div style={{ width: 36, height: 4, borderRadius: 2, background: "#fff", opacity: 0.6 }} />
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ width: 20, height: 5, borderRadius: 2, background: "#2A2A3E" }} />
            <div style={{ width: 20, height: 5, borderRadius: 2, background: "#2A2A3E" }} />
            <div style={{ padding: "2px 10px", borderRadius: 4, background: project.brandMid }}><div style={{ width: 16, height: 3, borderRadius: 1, background: "#fff" }} /></div>
          </div>
        </div>
        <div style={{ flex: 1, padding: 12, display: "flex", gap: 10 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ padding: 10, borderRadius: 8, background: "#1A1A2E", border: "1px solid #2A2A3E", flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <div style={{ width: 50, height: 4, borderRadius: 2, background: "#fff", opacity: 0.5 }} />
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <div style={{ width: 24, height: 14, borderRadius: 3, background: "#EF4444", opacity: 0.8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 10, height: 3, borderRadius: 1, background: "#fff" }} />
                  </div>
                </div>
              </div>
              {[0.7, 0.4, 0.9, 0.5, 0.3].map((w, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 0", borderTop: i > 0 ? "1px solid #2A2A3E" : "none" }}>
                  <div style={{ width: 6, height: 6, borderRadius: 3, background: i < 2 ? "#EF4444" : i < 4 ? "#F59E0B" : "#22C55E" }} />
                  <div style={{ width: `${w * 80}%`, height: 3, borderRadius: 2, background: "#fff", opacity: 0.2 }} />
                </div>
              ))}
            </div>
          </div>
          <div style={{ width: 90, display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ padding: 8, borderRadius: 8, background: "#1A1A2E", border: "1px solid #2A2A3E", textAlign: "center" }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: project.brandMid }}>72</div>
              <div style={{ width: 30, height: 2, borderRadius: 1, background: "#fff", opacity: 0.2, margin: "4px auto 0" }} />
            </div>
            <div style={{ padding: 8, borderRadius: 8, background: "#1A1A2E", border: "1px solid #2A2A3E", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 4 }}>
              {[60, 30, 10].map((h, i) => (
                <div key={i} style={{ width: "80%", height: 6, borderRadius: 3, background: "#2A2A3E", overflow: "hidden" }}>
                  <div style={{ width: `${h}%`, height: "100%", borderRadius: 3, background: i === 0 ? "#22C55E" : i === 1 ? "#F59E0B" : "#EF4444" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    ecommerce: (
      <div style={{ background: project.brandLight, height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ height: 8, background: project.brandColor, opacity: 0.9 }} />
        <div style={{ padding: "14px 12px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <div style={{ width: 44, height: 5, borderRadius: 3, background: project.brandColor }} />
            <div style={{ flex: 1 }} />
            <div style={{ width: 18, height: 5, borderRadius: 3, background: project.brandMid, opacity: 0.4 }} />
            <div style={{ width: 18, height: 5, borderRadius: 3, background: project.brandMid, opacity: 0.4 }} />
          </div>
          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ aspectRatio: "1", borderRadius: 4, background: project.brandColor, opacity: 0.12 + i * 0.04 }} />
                <div style={{ height: 3, width: "65%", borderRadius: 2, background: project.brandColor, opacity: 0.25 }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    dashboard: (
      <div style={{ background: "#0F172A", height: "100%", display: "flex" }}>
        <div style={{ width: 36, background: "#1E293B", display: "flex", flexDirection: "column", gap: 7, padding: "10px 6px", alignItems: "center" }}>
          <div style={{ width: 14, height: 14, borderRadius: 4, background: project.brandMid, opacity: 0.7 }} />
          {[0, 1, 2, 3].map((i) => <div key={i} style={{ width: 16, height: 16, borderRadius: 4, background: i === 0 ? project.brandMid : "#334155", opacity: i === 0 ? 0.25 : 0.4 }} />)}
        </div>
        <div style={{ flex: 1, padding: 10, display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ display: "flex", gap: 5 }}>
            {[0, 1, 2].map((i) => <div key={i} style={{ flex: 1, height: 28, borderRadius: 5, background: "#1E293B", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: "45%", height: 3, borderRadius: 2, background: i === 0 ? project.brandMid : "#475569", opacity: i === 0 ? 0.6 : 0.35 }} /></div>)}
          </div>
          <div style={{ flex: 1, borderRadius: 5, background: "#1E293B", display: "flex", alignItems: "flex-end", padding: "0 6px 6px", gap: 2 }}>
            {[35, 55, 40, 70, 50, 65, 80, 55, 68, 78].map((h, i) => <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "2px 2px 0 0", background: project.brandMid, opacity: 0.25 + (i % 3) * 0.12 }} />)}
          </div>
        </div>
      </div>
    ),
    landing: (
      <div style={{ background: project.brandLight, height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 12px" }}>
          <div style={{ width: 36, height: 5, borderRadius: 3, background: project.brandColor, opacity: 0.6 }} />
          <div style={{ padding: "2px 10px", borderRadius: 8, background: project.brandMid }}><div style={{ width: 14, height: 3, borderRadius: 2, background: "#fff" }} /></div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, padding: "0 18px" }}>
          <div style={{ width: "75%", height: 7, borderRadius: 4, background: project.brandColor, opacity: 0.5 }} />
          <div style={{ width: "55%", height: 7, borderRadius: 4, background: project.brandColor, opacity: 0.35 }} />
          <div style={{ padding: "5px 18px", borderRadius: 16, background: project.brandMid, marginTop: 6 }}><div style={{ width: 26, height: 3, borderRadius: 2, background: "#fff" }} /></div>
        </div>
        <div style={{ display: "flex", gap: 6, padding: "0 12px 10px", justifyContent: "center" }}>
          {[0, 1, 2].map((i) => <div key={i} style={{ width: 44, height: 30, borderRadius: 5, background: project.brandColor, opacity: 0.06 + i * 0.03 }} />)}
        </div>
      </div>
    ),
  };

  return (
    <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid #E5E7EB", background: "#F9FAFB", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "8px 12px", background: "#F3F4F6", borderBottom: "1px solid #E5E7EB" }}>
        <div style={{ width: 8, height: 8, borderRadius: 4, background: "#FCA5A5" }} />
        <div style={{ width: 8, height: 8, borderRadius: 4, background: "#FDE68A" }} />
        <div style={{ width: 8, height: 8, borderRadius: 4, background: "#86EFAC" }} />
        <div style={{ flex: 1, height: 18, borderRadius: 4, background: "#E5E7EB", marginLeft: 8, display: "flex", alignItems: "center", paddingLeft: 8 }}>
          <div style={{ width: "40%", height: 4, borderRadius: 2, background: "#D1D5DB" }} />
        </div>
      </div>
      <div style={{ height: 170 }}>{layouts[project.mockup]}</div>
    </div>
  );
}
