import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Listings",
  description: "Browse available properties in Vancouver and the Lower Mainland.",
};

interface ListingsPageProps {
  searchParams: Promise<{
    type?: string;
    neighbourhood?: string;
    status?: string;
  }>;
}

export default async function ListingsPage({ searchParams }: ListingsPageProps) {
  const params = await searchParams;

  let filtered = [...properties];

  if (params.type) {
    filtered = filtered.filter((p) => p.type === params.type);
  }

  if (params.neighbourhood) {
    filtered = filtered.filter(
      (p) => p.neighborhood.toLowerCase() === decodeURIComponent(params.neighbourhood!).toLowerCase()
    );
  }

  if (params.status) {
    filtered = filtered.filter((p) => p.status === params.status);
  }

  const typeCounts = properties.reduce((acc, p) => {
    acc[p.type] = (acc[p.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const TYPES     = ["condo", "house", "townhouse", "penthouse", "loft"];
  const HOODS     = ["Downtown", "Yaletown", "Gastown", "Coal Harbour", "Kitsilano", "Lower Lonsdale"];
  const STATUSES  = [
    { value: "for-sale",    label: "For Sale" },
    { value: "coming-soon", label: "Coming Soon" },
    { value: "sold",        label: "Sold" },
  ];

  const activeFilters = [
    params.type && `Type: ${params.type}`,
    params.neighbourhood && `Area: ${decodeURIComponent(params.neighbourhood)}`,
    params.status && `Status: ${params.status}`,
  ].filter(Boolean);

  return (
    <div style={{ paddingTop: "4.5rem" }}>

      {/* PAGE HEADER */}
      <div style={{ backgroundColor: "var(--color-navy)", padding: "4rem 0" }}>
        <div className="container-site">
          <p style={{
            color: "var(--color-gold)",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}>
            {filtered.length} {filtered.length === 1 ? "Property" : "Properties"}
          </p>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            color: "white",
          }}>
            {params.type
              ? `${params.type.charAt(0).toUpperCase() + params.type.slice(1)}s in Vancouver`
              : params.neighbourhood
              ? `Properties in ${decodeURIComponent(params.neighbourhood)}`
              : "All Listings"}
          </h1>

          {/* ACTIVE FILTER CHIPS */}
          {activeFilters.length > 0 && (
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem", flexWrap: "wrap" }}>
              {activeFilters.map((f) => (
                <span key={f as string} style={{
                  backgroundColor: "rgba(184,144,42,0.2)",
                  color: "var(--color-gold-light)",
                  fontSize: "0.75rem",
                  padding: "0.25rem 0.75rem",
                  border: "1px solid rgba(184,144,42,0.3)",
                }}>
                  {f}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="container-site" style={{ padding: "3rem 1rem" }}>
        <div className="listings-layout">

          {/* SIDEBAR */}
          <aside>
            {/* Clear filters */}
            {activeFilters.length > 0 && (
              <a href="/listings" style={{
                display: "block",
                color: "var(--color-gold)",
                fontSize: "0.85rem",
                fontWeight: 500,
                marginBottom: "1.5rem",
                textDecoration: "underline",
              }}>
                Clear all filters
              </a>
            )}

            {/* TYPE FILTER */}
            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "var(--color-navy)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: "0.75rem",
              }}>
                Property Type
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                {TYPES.map((type) => {
                  const isActive = params.type === type;
                  const url = isActive ? "/listings" : `/listings?type=${type}`;
                  return (
                    <a key={type} href={url} style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.5rem 0.75rem",
                      fontSize: "0.875rem",
                      textDecoration: "none",
                      backgroundColor: isActive ? "var(--color-gold)" : "transparent",
                      color: isActive ? "white" : "var(--color-navy-muted)",
                      fontWeight: isActive ? 600 : 400,
                      transition: "all 150ms",
                    }}>
                      <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                      <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>{typeCounts[type] || 0}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* STATUS FILTER */}
            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "var(--color-navy)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: "0.75rem",
              }}>
                Status
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                {STATUSES.map(({ value, label }) => {
                  const isActive = params.status === value;
                  const url = isActive ? "/listings" : `/listings?status=${value}`;
                  return (
                    <a key={value} href={url} style={{
                      display: "block",
                      padding: "0.5rem 0.75rem",
                      fontSize: "0.875rem",
                      textDecoration: "none",
                      backgroundColor: isActive ? "var(--color-gold)" : "transparent",
                      color: isActive ? "white" : "var(--color-navy-muted)",
                      fontWeight: isActive ? 600 : 400,
                      transition: "all 150ms",
                    }}>
                      {label}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* NEIGHBOURHOOD FILTER */}
            <div>
              <h3 style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "var(--color-navy)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: "0.75rem",
              }}>
                Neighbourhood
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                {HOODS.map((hood) => {
                  const isActive = params.neighbourhood?.toLowerCase() === hood.toLowerCase();
                  const url = isActive ? "/listings" : `/listings?neighbourhood=${encodeURIComponent(hood)}`;
                  return (
                    <a key={hood} href={url} style={{
                      display: "block",
                      padding: "0.5rem 0.75rem",
                      fontSize: "0.875rem",
                      textDecoration: "none",
                      backgroundColor: isActive ? "var(--color-gold)" : "transparent",
                      color: isActive ? "white" : "var(--color-navy-muted)",
                      fontWeight: isActive ? 600 : 400,
                      transition: "all 150ms",
                    }}>
                      {hood}
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* GRID */}
          <div>
            <p style={{
              fontSize: "0.875rem",
              color: "var(--color-navy-muted)",
              marginBottom: "1.5rem",
            }}>
              Showing <strong style={{ color: "var(--color-navy)" }}>{filtered.length}</strong> properties
            </p>

            {filtered.length === 0 ? (
              <div style={{
                textAlign: "center",
                padding: "5rem 2rem",
                border: "1px solid var(--color-stone-dark)",
              }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--color-navy)", marginBottom: "0.5rem" }}>
                  No properties found
                </p>
                <p style={{ color: "var(--color-navy-muted)", fontSize: "0.875rem" }}>
                  Try adjusting your filters
                </p>
              </div>
            ) : (
              <div className="listings-grid">
                {filtered.map((property, index) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    priority={index < 3}
                  />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>

      <style>{`
        .listings-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
        .listings-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 640px) {
          .listings-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .listings-layout { grid-template-columns: 14rem 1fr; }
          .listings-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </div>
  );
}