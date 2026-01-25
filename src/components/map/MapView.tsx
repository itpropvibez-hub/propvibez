'use client';

import type { Property } from "@/lib/types";

interface MapViewProps {
  properties: Property[];
}

export function MapView({ properties }: MapViewProps) {
  const location = properties[0];
  
  // This is the public "Search" URL format which is free and keyless
  // We use the address and city to help Google pinpoint the location
  const searchQuery = encodeURIComponent(`${location.address} ${location.city}`);
  
  // We use the 'output=embed' parameter to make it work in an iframe
  const mapSrc = `https://maps.google.com/maps?q=${searchQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <iframe
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      title="Office Location"
      src={mapSrc}
    />
  );
}


// "use client";

// import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
// import type { Property } from "@/lib/types";
// import { Home } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
// import { AlertCircle } from "lucide-react";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import Link from "next/link";

// type MapViewProps = {
//   properties: Property[];
// };

// export function MapView({ properties }: MapViewProps) {
//   const apiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY;

//   if (!apiKey) {
//     return (
//       <Alert variant="destructive" className="h-full flex flex-col justify-center">
//         <AlertCircle className="h-4 w-4" />
//         <AlertTitle>Google Maps API Key Missing</AlertTitle>
//         <AlertDescription>
//           The interactive map cannot be displayed. Please provide a valid Google Maps API key in your environment variables.
//           Follow the instructions in <code>.env.local.example</code>.
//         </AlertDescription>
//       </Alert>
//     );
//   }

//   const center = properties.length > 0
//     ? properties.reduce(
//         (acc, p) => ({
//           lat: acc.lat + p.location.lat,
//           lng: acc.lng + p.location.lng,
//         }),
//         { lat: 0, lng: 0 }
//       )
//     : { lat: 28.5355, lng: 77.3910 };

//     if(properties.length > 0) {
//         center.lat /= properties.length;
//         center.lng /= properties.length;
//     }
  
//   const zoom = properties.length === 1 ? 15 : 11;


//   return (
//     <APIProvider apiKey={apiKey}>
//       <Map
//         mapId={"propvibez-map"}
//         defaultCenter={center}
//         defaultZoom={zoom}
//         gestureHandling={"greedy"}
//         disableDefaultUI={true}
//         className="w-full h-full"
//       >
//         {properties.map((property) => (
//           <AdvancedMarker key={property.id} position={property.location}>
//             <Link href={`/properties/${property.id}`}>
//             <div className="relative group">
//               <div className="bg-primary text-primary-foreground rounded-full p-2 shadow-lg hover:scale-110 transition-transform">
//                 <Home className="h-5 w-5" />
//               </div>
//               <div className="absolute bottom-full mb-2 w-48 bg-white p-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -translate-x-1/2 left-1/2">
//                 <p className="font-bold text-sm truncate">{property.title}</p>
//                 <p className="text-xs text-muted-foreground">₹{(property.price / 100000).toLocaleString('en-IN')}L</p>
//               </div>
//             </div>
//             </Link>
//           </AdvancedMarker>
//         ))}
//       </Map>
//     </APIProvider>
//   );
// }
