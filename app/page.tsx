import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div style={{ padding: "3rem", maxWidth: "400px" }}>
        <PropertyCard property={properties[0]} priority={true} />
      </div>
    </>
  );
}