import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section style={{ position: "relative", height: "100vh", minHeight: "600px", display: "flex", alignItems: "flex-end" }}>

      {/* BACKGROUND IMAGE */}
      <Image
        src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80"
        alt="Vancouver skyline at dusk with North Shore mountains"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes="100vw"
      />

      {/* DARK GRADIENT OVERLAY */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.4) 50%, rgba(15,23,42,0.1) 100%)",
      }} />

      {/* CONTENT — sits above the overlay */}
      <div className="container-site" style={{ position: "relative", zIndex: 10, paddingBottom: "5rem", width: "100%" }}>
        <div style={{ maxWidth: "42rem" }}>

          {/* EYEBROW */}
          <p style={{
            color: "var(--color-gold)",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}>
            Vancouver · BC
          </p>

          {/* HEADLINE */}
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
            color: "white",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}>
            Vancouver Real Estate, Curated.
          </h1>

          {/* SUBTITLE */}
          <p style={{
            fontSize: "1.125rem",
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.7,
            maxWidth: "32rem",
            marginBottom: "2.5rem",
          }}>
            From glass penthouses above Coal Harbour to heritage homes in Kitsilano — we represent properties that deserve to be found.
          </p>

          {/* CTA BUTTONS */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/listings" className="btn-primary">
              View All Listings
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/#contact" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              border: "1px solid rgba(255,255,255,0.6)",
              color: "white",
              fontWeight: 600,
              padding: "0.75rem 1.5rem",
              textDecoration: "none",
              transition: "background 200ms",
            }}>
              Book a Viewing
            </Link>
          </div>

          {/* STATS STRIP */}
          <div style={{
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            maxWidth: "28rem",
          }}>
            {[
              { value: "12+", label: "Years in Vancouver" },
              { value: "340+", label: "Properties Sold" },
              { value: "$2.4B", label: "Total Sales Volume" },
            ].map((stat) => (
              <div key={stat.label}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "white", fontWeight: 700 }}>
                  {stat.value}
                </p>
                <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.55)", marginTop: "0.25rem" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}