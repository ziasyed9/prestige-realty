import Link from "next/link";
import { getFeaturedProperties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";

export default function FeaturedListings() {
  const featured = getFeaturedProperties();

  return (
    <section style={{ padding: "5rem 0", backgroundColor: "var(--color-stone)" }}>
      <div className="container-site">

        {/* SECTION HEADER */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          marginBottom: "3rem",
        }} className="listings-header">

          <div>
            <p style={{
              color: "var(--color-gold)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}>
              Hand-Selected
            </p>
            <h2 className="heading-accent" style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              color: "var(--color-navy)",
            }}>
              Featured Properties
            </h2>
          </div>

          <Link href="/listings" className="btn-outline" style={{ alignSelf: "flex-start", whiteSpace: "nowrap" }}>
            All Listings
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

        </div>

        {/* PROPERTY GRID */}
        <div className="featured-grid">
          {featured.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              priority={index < 2}
            />
          ))}
        </div>

      </div>

      <style>{`
        .listings-header {
          flex-direction: column;
        }
        .featured-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 640px) {
          .featured-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .featured-grid { grid-template-columns: repeat(4, 1fr); }
          .listings-header {
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
          }
        }
      `}</style>

    </section>
  );
}