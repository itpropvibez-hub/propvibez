export type Property = {
  id: string;
  title: string;
  price: number;
  address: string;
  city: 'Noida' | 'Greater Noida' | 'Gurgaon' | 'Delhi';
  beds?: number;
  baths?: number;
  sqft: number;
  type: 'Apartment' | 'House' | 'Plot' | 'Studio' | 'Office' | 'Retail' | 'Land';
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
  status: 'For Sale' | 'For Rent';
};
