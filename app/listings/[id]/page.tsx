import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPropertyById, properties, formatPrice } from "@/data/properties";
import type { Metadata } from "next";

// Tells Next.js all the possible [id] values at build time.
// It pre-renders a static HTML file for every single property page.
export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

// Generates the correct <title> and <meta> for each property page.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const property = getPropertyById(id);
  if (!property) return { title: "Property Not Found" };
  return {
    title: property.title,
    description: property.description.slice(0, 160),
  };
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = getPropertyById(id);

  // If the id doesn't match any property, show Next.js's built-in 404 page.
  if (!property) notFound();

  const statusConfig = {
    "for-sale":    { label: "For Sale",    color: "var(--color-gold)" },
    "sold":        { label: "Sold",        color: "var(--color-navy-muted)" },
    "coming-soon": { label: "Coming Soon", color: "var(--color-navy)" },
  };

  const status = statusConfig[property.status];

  return (
    <div style={{ paddingTop: "4.5rem" }}>

      {/* HERO IMAGE */}
      <div style={{ position: "relative", height: "60vh", minHeight: "360px" }}>
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
        {/* Gradient at bottom for text legibility */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.2) 60%, transparent 100%)",
        }} />

        {/* Back button */}
        <div style={{ position: "absolute", top: "1.5rem", left: 0, right: 0, zIndex: 10 }}>
          <div className="container-site">
            <Link href="/listings" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              color: "rgba(255,255,255,0.85)",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 500,
              transition: "color 150ms",
            }}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Listings
            </Link>
          </div>
        </div>

        {/* Title overlay */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 10 }}>
          <div className="container-site" style={{ paddingBottom: "2rem" }}>
            <span style={{
              display: "inline-block",
              backgroundColor: status.color,
              color: "white",
              fontSize: "0.65rem",
              fontWeight: 600,
              padding: "0.25rem 0.625rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}>
              {status.label}
            </span>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "white",
              lineHeight: 1.15,
              marginBottom: "0.5rem",
            }}>
              {property.title}
            </h1>
            <p style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "0.875rem",
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
            }}>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {property.address}, {property.city}
            </p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container-site" style={{ padding: "3rem 1rem" }}>
        <div className="property-layout">

          {/* LEFT COLUMN */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

            {/* QUICK SPECS */}
            <div className="specs-grid">
              {[
                { label: "Bedrooms",    value: property.bedrooms },
                { label: "Bathrooms",   value: property.bathrooms },
                { label: "Square Feet", value: property.sqft.toLocaleString() },
                { label: "Year Built",  value: property.yearBuilt },
              ].map((spec) => (
                <div key={spec.label} style={{
                  backgroundColor: "var(--color-stone)",
                  padding: "1.5rem",
                  textAlign: "center",
                  border: "1px solid var(--color-stone-dark)",
                }}>
                  <p style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.75rem",
                    color: "var(--color-navy)",
                    fontWeight: 700,
                    marginBottom: "0.25rem",
                  }}>
                    {spec.value}
                  </p>
                  <p style={{
                    color: "var(--color-navy-muted)",
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}>
                    {spec.label}
                  </p>
                </div>
              ))}
            </div>

            {/* DESCRIPTION */}
            <div>
              <h2 className="heading-accent" style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.375rem",
                color: "var(--color-navy)",
                marginBottom: "1.25rem",
              }}>
                About This Property
              </h2>
              <p style={{
                color: "var(--color-navy-muted)",
                lineHeight: 1.8,
                fontSize: "0.95rem",
              }}>
                {property.description}
              </p>
            </div>

            {/* FEATURES */}
            <div>
              <h2 className="heading-accent" style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.375rem",
                color: "var(--color-navy)",
                marginBottom: "1.25rem",
              }}>
                Features &amp; Finishes
              </h2>
              <ul className="features-grid" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {property.features.map((feature) => (
                  <li key={feature} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.625rem",
                    fontSize: "0.875rem",
                    color: "var(--color-navy)",
                    marginBottom: "0.625rem",
                  }}>
                    <div style={{
                      width: "1rem", height: "1rem",
                      backgroundColor: "rgba(184,144,42,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, marginTop: "0.1rem",
                    }}>
                      <svg width="8" height="8" fill="var(--color-gold)" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* GALLERY */}
            {property.images.length > 1 && (
              <div>
                <h2 className="heading-accent" style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.375rem",
                  color: "var(--color-navy)",
                  marginBottom: "1.25rem",
                }}>
                  Gallery
                </h2>
                <div className="gallery-grid">
                  {property.images.slice(1).map((img, i) => (
                    <div key={i} style={{ position: "relative", height: "12rem", overflow: "hidden" }}>
                      <Image
                        src={img}
                        alt={`${property.title} — photo ${i + 2}`}
                        fill
                        style={{ objectFit: "cover", transition: "transform 500ms" }}
                        className="gallery-img"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* RIGHT COLUMN — sticky price card */}
          <aside>
            <div style={{
              position: "sticky",
              top: "5.5rem",
              backgroundColor: "white",
              boxShadow: "var(--shadow-card)",
              borderTop: "4px solid var(--color-gold)",
              padding: "1.75rem",
            }}>
              <p style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                color: "var(--color-navy)",
                fontWeight: 700,
                marginBottom: "0.25rem",
              }}>
                {formatPrice(property.price)}
              </p>
              <p style={{
                color: "var(--color-navy-muted)",
                fontSize: "0.875rem",
                marginBottom: "1.5rem",
              }}>
                {property.neighborhood} · {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
              </p>

              {/* KEY DETAILS */}
              <div style={{
                borderTop: "1px solid var(--color-stone-dark)",
                borderBottom: "1px solid var(--color-stone-dark)",
                padding: "1.25rem 0",
                marginBottom: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}>
                {[
                  { label: "Address", value: property.address },
                  { label: "Parking", value: `${property.parkingSpots} stall${property.parkingSpots > 1 ? "s" : ""}` },
                  { label: "Type",    value: property.type.charAt(0).toUpperCase() + property.type.slice(1) },
                  { label: "Status",  value: status.label },
                ].map((item) => (
                  <div key={item.label} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1rem",
                    fontSize: "0.875rem",
                  }}>
                    <span style={{ color: "var(--color-navy-muted)", flexShrink: 0 }}>{item.label}</span>
                    <span style={{ color: "var(--color-navy)", fontWeight: 500, textAlign: "right" }}>{item.value}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <Link href="/#contact" className="btn-primary" style={{ width: "100%" }}>
                  Book a Viewing
                </Link>
                <Link href="/#contact" className="btn-outline" style={{ width: "100%", fontSize: "0.875rem" }}>
                  Ask a Question
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </div>

      <style>{`
        .property-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        .specs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background-color: var(--color-stone-dark);
          border: 1px solid var(--color-stone-dark);
        }
        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }
        @media (min-width: 640px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .property-layout { grid-template-columns: 1fr 22rem; }
          .specs-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .gallery-img:hover { transform: scale(1.05); }
      `}</style>

    </div>
  );
}