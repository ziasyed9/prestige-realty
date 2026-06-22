import Image from "next/image";
import Link from "next/link";
import { PropertyCardData } from "@/types";
import { formatPrice } from "@/data/properties";

interface PropertyCardProps {
  property: PropertyCardData;
  priority?: boolean;
}

export default function PropertyCard({ property, priority = false }: PropertyCardProps) {

  const statusConfig = {
    "for-sale":    { label: "For Sale",    color: "var(--color-gold)" },
    "sold":        { label: "Sold",        color: "var(--color-navy-muted)" },
    "coming-soon": { label: "Coming Soon", color: "var(--color-navy)" },
  };

  const status = statusConfig[property.status];

  return (
    <Link href={`/listings/${property.id}`} style={{ textDecoration: "none", display: "block" }}>
      <article
        className="property-card"
        style={{
          backgroundColor: "white",
          boxShadow: "var(--shadow-card)",
          transition: "box-shadow 300ms",
          cursor: "pointer",
        }}
      >

        {/* IMAGE */}
        <div style={{ position: "relative", height: "16rem", overflow: "hidden" }}>
          <Image
            src={property.images[0]}
            alt={`${property.title} — ${property.address}`}
            fill
            priority={priority}
            style={{ objectFit: "cover", objectPosition: "center", transition: "transform 500ms" }}
            className="card-image"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* STATUS BADGE */}
          <div style={{
            position: "absolute",
            top: "0.75rem",
            left: "0.75rem",
            zIndex: 10,
            backgroundColor: status.color,
            color: "white",
            fontSize: "0.65rem",
            fontWeight: 600,
            padding: "0.25rem 0.625rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}>
            {status.label}
          </div>

          {/* HOVER OVERLAY */}
          <div className="card-overlay" style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(15,23,42,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            transition: "opacity 300ms",
          }}>
            <span style={{
              color: "white",
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              border: "1px solid white",
              padding: "0.5rem 1.25rem",
            }}>
              View Details
            </span>
          </div>
        </div>

        {/* CARD BODY */}
        <div style={{ padding: "1.25rem" }}>

          {/* NEIGHBOURHOOD */}
          <p style={{
            color: "var(--color-gold)",
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "0.375rem",
          }}>
            {property.neighborhood}
          </p>

          {/* TITLE */}
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.125rem",
            color: "var(--color-navy)",
            lineHeight: 1.3,
            marginBottom: "0.75rem",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}>
            {property.title}
          </h3>

          {/* ADDRESS */}
          <p style={{
            color: "var(--color-navy-muted)",
            fontSize: "0.8rem",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.375rem",
          }}>
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ flexShrink: 0 }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {property.address}
          </p>

          {/* SPECS ROW */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            fontSize: "0.8rem",
            color: "var(--color-navy-muted)",
            borderTop: "1px solid var(--color-stone-dark)",
            paddingTop: "1rem",
            marginBottom: "1rem",
          }}>

            <span style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {property.bedrooms} {property.bedrooms === 1 ? "Bed" : "Beds"}
            </span>

            <span style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {property.bathrooms} {property.bathrooms === 1 ? "Bath" : "Baths"}
            </span>

            <span style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              {property.sqft.toLocaleString()} sqft
            </span>

          </div>

          {/* PRICE */}
          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            color: "var(--color-navy)",
            fontWeight: 700,
          }}>
            {formatPrice(property.price)}
          </p>

        </div>

        {/* GOLD BOTTOM ACCENT LINE */}
        <div style={{ height: "2px", backgroundColor: "var(--color-stone-dark)" }}>
          <div className="card-accent-line" style={{
            height: "100%",
            backgroundColor: "var(--color-gold)",
            width: "0%",
            transition: "width 500ms",
          }} />
        </div>

      </article>

      {/* Hover effects via CSS — can't do these with inline styles */}
      <style>{`
        .property-card:hover { box-shadow: var(--shadow-card-hover); }
        .property-card:hover .card-image { transform: scale(1.05); }
        .property-card:hover .card-overlay { opacity: 1; }
        .property-card:hover .card-accent-line { width: 100%; }
      `}</style>

    </Link>
  );
}