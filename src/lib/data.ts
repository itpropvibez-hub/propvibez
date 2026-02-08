import type { Property } from './types';

export const properties: Property[] = [
  {
    id: 'ekanam-noida',
    title: 'Great Value Ekanam',
    locationLine: 'Sector 107, Noida',
    startingPrice: 43000000,
    address: 'Sector 107',
    city: 'Noida',
    type: 'Apartment',
    status: 'New Launch',
    description:
      'A landmark address offering a lifestyle above the clouds. GREAT VALUE EKANAM presents an exclusive collection of residences where luxury is redefined. With its towering presence and world-class amenities, Ekanam is set to become the most coveted address in Noida.',
    amenities: [
      'Infinity Pool',
      'Restaurant & Bar',
      'World-Class Clubhouse',
      'Kids Pool & Jacuzzi',
      'Valet Parking',
      'High-Speed Elevators',
      'Horizontal Gardens'
    ],
    imageIds: ['proj-ekanam-ext', 'proj-ekanam-ext1', 'proj-ekanam-ext2', 'proj-ekanam-pool', 'proj-ekanam-int'],
    location: { lat: 28.5535, lng: 77.3653 }, // Approx location for Sector 107
    agent: {
      name: 'Jatinder Singh',
      avatarUrl: '/assets/employees/JatinderSingh.jpeg',
    },
    projectHighlights: {
      totalLand: '4 Acres',
      towers: '3 Towers',
      floors: 'G+46',
      totalResidences: 282,
      unitsPerFloor: '3 units per floor',
      clubhouseSize: '50,000 sq.ft',
      parking: '4-Level Basement with Valet Service',
    },
    unitPlans: [
      { type: '3 BHK + SQ + Family Lounge', size: 3525 },
      { type: '4 BHK + SQ + Family Lounge', size: 5525 },
    ],
    features: [
      'Horizontal Gardens on refuge floors (16, 24, 32)',
      '40th Floor Infinity Pool, Kids Pool, Jacuzzi, Restaurant & Bar',
      'Centrally Air-Conditioned Lift Lobbies on Every Floor',
    ],
    residenceFeatures: [
      'Home Automation for modern living',
      'PM 2.5 Air Filtration in every apartment',
      'Walk-in Closets in every bedroom',
      'VRV Air Conditioning system',
      'Imported German Modular Kitchen with high-end appliances',
    ],
    videoUrl: '/assets/projects/GREAT VALUE EKANAM/Video1.mp4', // Placeholder video
    brochureUrl: '/assets/projects/GREAT VALUE EKANAM/GVR_Ekanam_Handout.pdf', // Placeholder brochure
  },
  {
    id: 'arista-luxe-noida',
    title: 'Arista Luxe',
    locationLine: 'Sector 79, Noida',
    startingPrice: 28000000,
    address: 'Sector 79',
    city: 'Noida',
    type: 'Apartment',
    status: 'New Launch',
    description:
      'Experience the pinnacle of luxury living with Arista Luxe. Following the successful delivery of 6 towers, this new launch introduces 4 exclusive towers of ultra-luxury residences. Designed for the discerning few, Arista Luxe combines opulent interiors with breathtaking views and unmatched amenities.',
    amenities: ['Modern Clubhouse', 'Swimming Pool', 'Gymnasium', 'Multi-tier Security', 'Landscaped Gardens', 'Sports Facilities'],
    imageIds: ['proj-arista-ext', 'proj-arista-int', 'proj-arista-club', 'proj-arista-4', 'proj-arista-5'],
    location: { lat: 28.558, lng: 77.406 }, // Approx location for Sector 79
    agent: {
      name: 'Dhruv Gupta',
      avatarUrl: '/assets/employees/DhuruvGupta.jpeg',
    },
    projectHighlights: {
      totalLand: '10 Acres',
      towers: '4 New Towers',
      floors: 'G+25 to G+31',
      totalResidences: 342,
      parking: 'Basement Parking',
    },
    unitPlans: [
      { type: '3 BHK + Servant', size: 2353 },
      { type: '3 BHK + Servant', size: 2367 },
      { type: '3 BHK + Servant', size: 2393 },
      { type: '4 BHK + Servant', size: 3098 },
      { type: '4 BHK + Servant', size: 4025 },
      { type: '5 BHK + Servant', size: 5026 },
    ],
    features: ['Part of a 10-acre development', '6 towers already delivered', 'Separate elevators for different unit types'],
    residenceFeatures: ['Spacious Layouts', 'Premium Fittings', 'Large Balconies', 'Excellent Ventilation'],
    videoUrl: 'https://www.youtube.com/embed/z59e7XVrI4I?si=TiU5dMW7l7t834VQ',
    brochureUrl: '/assets/projects/Arista/E Brochure.pdf', 
    // pricelist: '',
  },
  {
    id: 'oasis-grandstand-noida',
    title: 'Oasis GrandStand',
    locationLine: 'Sector 22D, Yamuna Expressway',
    startingPrice: 9000000,
    address: 'Sector 22D, Yamuna Expressway',
    city: 'Greater Noida',
    type: 'Apartment',
    status: 'For Sale',
    description:
      'Oasis GrandStand offers a vibrant community lifestyle along the Yamuna Expressway. With a range of well-designed apartments and modern amenities, it\'s an ideal choice for families and professionals looking for comfort and connectivity.',
    amenities: ['Clubhouse', 'Swimming Pool', 'Gym', 'Jogging Track', '24/7 Security'],
    imageIds: ['res-apt-1-ext', 'res-apt-1-ext-1', 'res-apt-1-ext-2', 'res-apt-1-ext-3', 'res-apt-1-ext-4'],
    location: { lat: 28.385, lng: 77.58 }, // Approx location for Sector 22D
    agent: {
      name: 'Dhruv Gupta',
      avatarUrl: '/assets/employees/DhuruvGupta.jpeg',
    },
    projectHighlights: {
      totalLand: '10 Acres',
      towers: 'Multiple Towers',
      floors: 'G+19',
    },
    unitPlans: [
      { type: '2 BHK', size: 950 },
      { type: '3 BHK', size: 1250 },
    ],
    features: ['Located on Yamuna Expressway', 'Proximity to proposed Film City'],
    residenceFeatures: ['Affordable luxury', 'Modern design', 'Well-ventilated apartments'],
     videoUrl: 'https://www.youtube.com/embed/nY41NAsGgq4?si=hw55jhgCZOqugBHV',
    brochureUrl: '/assets/projects/Oasis GrandStand/GrandStand Big E-Brochure.pdf',
  },
  {
    id: 'the-monarque-yamuna',
    title: 'The Monarque',
    locationLine: 'Sector 22D, Yamuna Expressway',
    startingPrice: 42300000, // From image: ₹4.23 Cr Onwards
    address: 'Sector 22D, Yamuna Expressway',
    city: 'Greater Noida',
    type: 'Apartment',
    status: 'New Launch',
    description:
      'Introducing The Monarque — Uber Luxury Residences part of a 100-acre Golf-themed township. Where European-inspired architecture meets panoramic golf and forest views. Designed for an "unreal estate" of mind, it redefines what it means to live luxuriously.',
    amenities: [
      '12-hole Golf Course access',
      'Club Monarque (3 Zones)',
      'Double-Height Lobby',
      'All-Weather Swimming Pool',
      'Deck Balcony with Jacuzzi',
      '18m Entry Boulevard',
      'Multiple Clubhouses'
    ],
    imageIds: ['proj-monarque-1', 'proj-monarque-2', 'proj-monarque-3', 'proj-monarque-int1', 'proj-monarque-int2', 'proj-monarque-int3', 'proj-monarque-int4', 'proj-monarque-living', 'proj-monarque-bedroom', 'proj-monarque-balcony'],
    location: { lat: 28.384, lng: 77.542 }, 
    agent: {
      name: 'Shaylee Madaan',
      avatarUrl: '/assets/employees/profile.jpeg',
    },
    projectHighlights: {
      totalLand: 'Part of 100-acre Township',
      towers: '3 Majestic Towers',
      // proximity: '15 min from Noida International Airport',
      // density: 'Extremely Low Density Living',
      // design: 'Renowned Architect Confluence Consultancy',
    },
    unitPlans: [
      { type: '3.5 BHK Luxury Home', size: 2800 }, // Size estimated based on segment
      { type: '4.5 BHK Luxury Home', size: 3800 },
    ],
    features: [
      'Overlooking Acres of Forest Reserves',
      'No Vehicular Movement inside the project',
      'Close to Film City & Eastern Peripheral Expressway',
    ],
    residenceFeatures: [
      'Private Jacuzzis in units',
      'Golf Course views',
      'Ultra-luxury finishes',
    ],
    videoUrl: 'https://www.youtube.com/embed/OGOkOCSomiE?list=TLGGbWJYlfJxQUEwODAyMjAyNg', 
    brochureUrl: '/assets/projects/TheMonarque/The Monarque Brochure A3.pdf', 
    // reraNumber: 'UPRERAPRJ710489/10/2025',
  },
  {
    id: 'rg-mirage-noida',
    title: 'RG Mirage',
    locationLine: 'Sector 120, Noida',
    startingPrice: 26160000, // Calculated from image: 2180 sq.ft * ₹12,000
    address: 'Sector 120',
    city: 'Noida',
    type: 'Apartment',
    status: 'For Sale',
    description:
      'Situated in Sector 120, RG Mirage is a stunning development designed by renowned fashion designer JJ Valaya. These residences feature an impressive 11-foot ceiling height, offering an expansive and airy living environment in the heart of Noida.',
    amenities: [
      'Terrace Garden',
      'Free Club Membership',
      'Power Back-up (3 KVA Free)',
      'Covered Car Parking',
      'High-rise View Points'
    ],
    imageIds: ['proj-rgmirage-ext', 'proj-rgmirage-ext2', 'proj-rgmirage-int', 'proj-rgmirage-int2', 'proj-rgmirage-club' ],
    location: { lat: 28.5912, lng: 77.3978 },
    agent: {
      name: 'Dhruv Gupta',
      avatarUrl: '/assets/employees/DhruvGupta.jpeg',
    },
    projectHighlights: {
      totalLand: '2.27 Acres',
      towers: '2 Towers',
      floors: 'G+28',
      // ceilingHeight: '11 Feet',
      // possession: 'December 2026',
    },
    unitPlans: [
      { type: '3 BHK + Study', size: 2180 },
      { type: '3 BHK + Study', size: 2242 },
    ],
    features: [
      'Interior Design Influence by JJ Valaya',
      'Pre-launch offer price: ₹12,000 per sq.ft',
      'Excellent connectivity to FNG (500m) and Metro (2.2km)',
    ],
    residenceFeatures: [
      'Wardrobes in all bedrooms',
      'Modular Kitchen with Cabinets',
      'Four Split ACs included',
      'Large Balconies with FNG connectivity views',
    ],
    videoUrl: '/assets/projects/RG Mirage/Video.mp4',
    brochureUrl: '',
    // reraNumber: 'UPRERAPRJ766232',
  },
];