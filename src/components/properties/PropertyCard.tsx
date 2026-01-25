import type { Property } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Square, MapPin, BedDouble, Bath, Tag } from 'lucide-react';
import Link from 'next/link';

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === property.imageIds[0]);
  const isForRent = property.status === 'For Rent';

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-primary/20 hover:shadow-2xl transition-all duration-300 flex flex-col group">
      <Link href={`/properties/${property.id}`} className="block">
        <div className="relative h-56 w-full overflow-hidden">
          {image && (
            <Image
              src={image.imageUrl}
              alt={property.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              data-ai-hint={image.imageHint}
            />
          )}
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <Badge variant="default" className="absolute top-3 right-3 bg-primary text-primary-foreground">
            {property.type}
          </Badge>
           <Badge variant="secondary" className="absolute top-3 left-3">
            {property.status}
          </Badge>
        </div>
      </Link>
      <CardHeader>
        <CardTitle className="text-xl font-bold truncate font-headline text-accent">
           <Link href={`/properties/${property.id}`} className="hover:text-primary transition-colors">{property.title}</Link>
        </CardTitle>
        <div className="flex items-center text-muted-foreground text-sm mt-1">
          <MapPin className="w-4 h-4 mr-1.5 text-primary" />
          <span>{property.address}, {property.city}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4">
            <p className="text-2xl font-extrabold text-primary">
                ₹{property.price.toLocaleString('en-IN')}
                {isForRent && <span className="text-base font-medium text-muted-foreground">/month</span>}
            </p>
            {property.pricePerSqft && (
                <p className="text-xs text-muted-foreground">
                    ₹{property.pricePerSqft.toLocaleString('en-IN')}/sq.ft.
                </p>
            )}
        </div>
        
        <div className="flex justify-around text-center border-t pt-4">
          <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground">
            <Square className="w-5 h-5 text-primary" />
            <span>{property.sqft.toLocaleString('en-IN')} sq.ft.</span>
          </div>
          {property.beds && (
            <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground">
              <BedDouble className="w-5 h-5 text-primary" />
              <span>{property.beds} Beds</span>
            </div>
          )}
          {property.baths && (
             <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground">
                <Bath className="w-5 h-5 text-primary" />
                <span>{property.baths} Baths</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
