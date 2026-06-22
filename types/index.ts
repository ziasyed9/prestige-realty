export interface Property {
    id: string;
    title: string;
    price: number;
    address: string;
    city: string;
    neighborhood: string;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    type: PropertyType;
    status: PropertyStatus;
    description: string;
    features: string[];
    images: string[];
    yearBuilt: number;
    parkingSpots: number;
    isFeatured: boolean;
  }
  
  export type PropertyType = "condo" | "house" | "townhouse" | "penthouse" | "loft";
  
  export type PropertyStatus = "for-sale" | "sold" | "coming-soon";
  
  export type PropertyCardData = Pick<
    Property,
    | "id"
    | "title"
    | "price"
    | "address"
    | "neighborhood"
    | "bedrooms"
    | "bathrooms"
    | "sqft"
    | "type"
    | "status"
    | "images"
    | "isFeatured"
  >;