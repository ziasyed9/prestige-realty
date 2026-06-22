import { Property } from "@/types";

export const properties: Property[] = [
  {
    id: "prop-001",
    title: "Glass Penthouse at The Pacific",
    price: 3_200_000,
    address: "1480 Howe St, Unit PH2",
    city: "Vancouver",
    neighborhood: "Downtown",
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2100,
    type: "penthouse",
    status: "for-sale",
    description:
      "An architectural statement perched above Vancouver's skyline. Floor-to-ceiling glass wraps every room in panoramic views of the mountains, water, and city. The chef's kitchen features Italian cabinetry and a waterfall island.",
    features: [
      "Private rooftop terrace",
      "Direct elevator access",
      "Chef's kitchen with waterfall island",
      "In-floor radiant heating",
      "Smart home automation",
      "360° mountain and water views",
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
    yearBuilt: 2021,
    parkingSpots: 2,
    isFeatured: true,
  },
  {
    id: "prop-002",
    title: "Industrial Loft on Water Street",
    price: 1_149_000,
    address: "55 Water St, Unit 601",
    city: "Vancouver",
    neighborhood: "Gastown",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1340,
    type: "loft",
    status: "for-sale",
    description:
      "Original exposed brick and Douglas fir beams anchor this converted warehouse loft in the heart of Gastown. Soaring 14-foot ceilings and oversized factory windows flood the open plan with natural light.",
    features: [
      "Exposed brick and Douglas fir beams",
      "14-foot ceilings",
      "Polished concrete floors",
      "Custom steel kitchen island",
      "Walk to Steam Clock",
      "EV-ready parking stall",
    ],
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    ],
    yearBuilt: 1912,
    parkingSpots: 1,
    isFeatured: true,
  },
  {
    id: "prop-003",
    title: "Yaletown Corner Suite",
    price: 899_000,
    address: "1238 Richards St, Unit 802",
    city: "Vancouver",
    neighborhood: "Yaletown",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 780,
    type: "condo",
    status: "for-sale",
    description:
      "A sun-soaked corner unit wrapped in glass, with west-facing views over Emery Barnes Park. Steps from the Seawall, Yaletown's restaurants, and the Canada Line.",
    features: [
      "Corner unit with wrap-around views",
      "Bosch appliance package",
      "Wide-plank oak floors",
      "Steps to Seawall",
      "Rooftop garden and gym",
    ],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80",
    ],
    yearBuilt: 2018,
    parkingSpots: 1,
    isFeatured: true,
  },
  {
    id: "prop-004",
    title: "Heritage Home on West 12th",
    price: 4_750_000,
    address: "3012 W 12th Ave",
    city: "Vancouver",
    neighborhood: "Kitsilano",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    type: "house",
    status: "for-sale",
    description:
      "A meticulously restored 1928 Craftsman home on one of Kitsilano's most coveted streets. Original old-growth fir millwork and a wrap-around porch preserve the heritage character.",
    features: [
      "Original old-growth fir millwork",
      "Leaded glass windows",
      "Wrap-around front porch",
      "2022 rear addition",
      "Heated three-car garage",
      "South-facing garden",
    ],
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    ],
    yearBuilt: 1928,
    parkingSpots: 3,
    isFeatured: true,
  },
  {
    id: "prop-005",
    title: "North Shore Townhouse",
    price: 1_489_000,
    address: "88 Fell Ave, Unit 14",
    city: "North Vancouver",
    neighborhood: "Lower Lonsdale",
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1680,
    type: "townhouse",
    status: "for-sale",
    description:
      "A strata-titled townhouse in the heart of Lower Lonsdale, minutes from the SeaBus and Lonsdale Quay.",
    features: [
      "Private rooftop deck with Inlet views",
      "Double tandem garage",
      "Walk to SeaBus",
      "Gas fireplace",
    ],
    images: [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80",
    ],
    yearBuilt: 2016,
    parkingSpots: 2,
    isFeatured: false,
  },
  {
    id: "prop-006",
    title: "Coal Harbour Marina View",
    price: 2_100_000,
    address: "1600 Hornby St, Unit 1205",
    city: "Vancouver",
    neighborhood: "Coal Harbour",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1250,
    type: "condo",
    status: "coming-soon",
    description:
      "A rare south-facing suite overlooking Coal Harbour Marina. Five-star amenities, sub-zero appliances, and marble bathrooms.",
    features: [
      "South-facing marina views",
      "75-foot lap pool",
      "24/7 concierge",
      "Sub-Zero appliances",
      "Marble bathrooms",
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80",
    ],
    yearBuilt: 2020,
    parkingSpots: 1,
    isFeatured: false,
  },
];

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.isFeatured);
}

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(price);
}