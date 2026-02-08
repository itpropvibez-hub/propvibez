export type UnitPlan = {
  type: string; // "3 BHK + SQ + Family Lounge"
  size: number; // 3525
};

export type Property = {
  id: string;
  title: string; // This will now be the Project Name, e.g., "GREAT VALUE EKANAM"
  locationLine: string; // e.g., "Sector 107, Noida"
  price?: number;
  startingPrice?: number; // For projects
  address: string;
  city: 'Noida' | 'Greater Noida' | 'Gurgaon' | 'Delhi';
  beds?: number;
  baths?: number;
  sqft?: number;
  type: 'Apartment' | 'House' | 'Plot' | 'Studio' | 'Office' | 'Retail' | 'Land' | 'Project';
  status: 'For Sale' | 'For Rent' | 'New Launch';
  description: string;
  amenities: string[];
  imageIds: string[];
  location: {
    lat: number;
    lng: number;
  };
  agent: {
    name: string;
    avatarUrl: string;
  };
  pricePerSqft?: number;
  
  projectHighlights?: {
    totalLand?: string;
    towers?: string;
    floors?: string;
    totalResidences?: number;
    unitsPerFloor?: string;
    clubhouseSize?: string;
    parking?: string;
  };
  
  unitPlans?: UnitPlan[];

  features?: string[];
  
  residenceFeatures?: string[];
  
  videoUrl?: string;
  brochureUrl?: string;
};