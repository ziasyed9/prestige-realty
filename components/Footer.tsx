import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Properties: [
      { label: "All Listings", href: "/listings" },
      { label: "Condos",       href: "/listings?type=condo" },
      { label: "Houses",       href: "/listings?type=house" },
      { label: "Penthouses",   href: "/listings?type=penthouse" },
    ],
    Neighbourhoods: [
      { label: "Yaletown",     href: "/listings?neighbourhood=Yaletown" },
      { label: "Gastown",      href: "/listings?neighbourhood=Gastown" },
      { label: "Coal Harbour", href: "/listings?neighbourhood=Coal Harbour" },
      { label: "Kitsilano",    href: "/listings?neighbourhood=Kitsilano" },
    ],
    Company: [
      { label: "About Us", href: "/#about" },
      { label: "Contact",  href: "/#contact" },
    ],
  };

  return (
    <footer style={{ backgroundColor: "var(--color-navy-light)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="container-site" style={{ padding: "3.5rem 0 2rem" }}>

        {/* TOP GRID */}
        <div className="footer-grid" style={{ marginBottom: "3rem" }}>

          {/* BRAND */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{
                width: "2rem", height: "2rem",
                backgroundColor: "var(--color-gold)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: "var(--font-display)", color: "white", fontWeight: 700, fontSize: "0.875rem" }}>P</span>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-display)", color: "white", fontWeight: 700 }}>Prestige</p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Properties</p>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: "18rem" }}>
              Boutique real estate for those who care about where they live. Serving Greater Vancouver since 2012.
            </p>
          </div>

          {/* LINK COLUMNS */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 style={{
                color: "white",
                fontSize: "0.8rem",
                fontWeight: 600,
                marginBottom: "1rem",
              }}>
                {category}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} style={{
                      color: "rgba(255,255,255,0.45)",
                      fontSize: "0.85rem",
                      textDecoration: "none",
                      transition: "color 150ms",
                    }}
                    className="footer-link"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* BOTTOM BAR */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          alignItems: "center",
          textAlign: "center",
        }} className="footer-bottom">
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem" }}>
            &copy; {currentYear} Prestige Properties Inc. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem" }}>
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>

      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }
        @media (min-width: 768px) {
          .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; }
          .footer-bottom { flex-direction: row; justify-content: space-between; text-align: left; }
        }
        .footer-link:hover { color: var(--color-gold) !important; }
      `}</style>
    </footer>
  );
}