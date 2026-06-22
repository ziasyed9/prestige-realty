import Hero from "@/components/Hero";
import FeaturedListings from "@/components/FeaturedListings";
import ContactSection from "@/components/ContactSection";

function AboutSection() {
  return (
    <section style={{ padding: "5rem 0", backgroundColor: "var(--color-stone-dark)" }}>
      <div className="container-site">
        <div className="about-grid">

          {/* LEFT — copy */}
          <div>
            <p style={{
              color: "var(--color-gold)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>
              Our Approach
            </p>

            <h2 className="heading-accent" style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              color: "var(--color-navy)",
              marginBottom: "1.5rem",
            }}>
              We only represent properties worth representing.
            </h2>

            <p style={{
              color: "var(--color-navy-muted)",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}>
              Prestige Properties is a boutique real estate agency focused on
              Vancouver&apos;s most livable and lovable properties. We don&apos;t
              take on every listing — we take on the right ones.
            </p>

            <p style={{
              color: "var(--color-navy-muted)",
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}>
              Our small team means every client gets direct access to senior
              agents who know every block of every neighbourhood we serve.
            </p>

            {/* CHECKPOINTS */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                "No junior agents — you deal with principals directly.",
                "Exclusive listings not found on MLS.",
                "In-house staging and photography included.",
              ].map((point) => (
                <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <div style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    backgroundColor: "var(--color-gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "0.125rem",
                  }}>
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="white">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-navy)", fontWeight: 500 }}>
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — stat grid */}
          <div className="stat-grid">
            {[
              { value: "12+",  label: "Years in Vancouver" },
              { value: "340+", label: "Properties Sold" },
              { value: "$2.4B", label: "Total Volume" },
              { value: "98%",  label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} style={{
                backgroundColor: "var(--color-stone)",
                padding: "2rem",
                textAlign: "center",
              }}>
                <p style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.5rem",
                  color: "var(--color-navy)",
                  fontWeight: 700,
                  marginBottom: "0.25rem",
                }}>
                  {stat.value}
                </p>
                <p style={{ color: "var(--color-navy-muted)", fontSize: "0.8rem" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
        }
        .stat-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
          background-color: var(--color-stone-dark);
          border: 1px solid var(--color-stone-dark);
          align-content: start;
        }
        @media (min-width: 1024px) {
          .about-grid { grid-template-columns: 1fr 1fr; align-items: center; }
        }
      `}</style>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedListings />
      <AboutSection />
      <ContactSection />
    </>
  );
}