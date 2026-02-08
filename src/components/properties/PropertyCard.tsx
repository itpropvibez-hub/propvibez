import type { Property } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { MapPin, Building2, Layers, LandPlot, Download, Youtube, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === property.imageIds[0]);

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    }
    if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2)} Lac`;
    }
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-primary/20 hover:shadow-2xl transition-all duration-300 flex flex-col group h-full">
      <div className="relative h-64 w-full overflow-hidden">
        <Link href={`/properties/${property.id}`} className="block h-full w-full">
          {image && (
            <Image
              src={image.imageUrl}
              alt={property.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              data-ai-hint={image.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </Link>
        <Badge variant="secondary" className="absolute top-3 left-3 capitalize">
          {property.status}
        </Badge>
         <div className="absolute bottom-3 right-3 flex gap-2">
            {property.brochureUrl && (
                <Button size="icon" variant="secondary" asChild>
                    <a href={property.brochureUrl} target="_blank" rel="noopener noreferrer" aria-label="Download Brochure">
                        <Download />
                    </a>
                </Button>
            )}
             {property.videoUrl && (
                <Button size="icon" variant="secondary" asChild>
                    <a href={property.videoUrl} target="_blank" rel="noopener noreferrer" aria-label="Watch Video">
                        <Youtube />
                    </a>
                </Button>
            )}
        </div>
      </div>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold truncate font-headline text-accent">
           <Link href={`/properties/${property.id}`} className="hover:text-primary transition-colors">{property.title}</Link>
        </CardTitle>
        <div className="flex items-center text-muted-foreground text-sm mt-1">
          <MapPin className="w-4 h-4 mr-1.5 text-primary" />
          <span>{property.locationLine}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        {property.startingPrice && (
            <div className="mb-4">
                <p className="text-xs text-muted-foreground">Starting From</p>
                <p className="text-2xl font-extrabold text-primary">
                    {formatPrice(property.startingPrice)}
                </p>
            </div>
        )}
        
        {property.projectHighlights && (
            <div className="grid grid-cols-3 gap-2 text-center text-xs text-muted-foreground border-t pt-4">
                {property.projectHighlights.totalLand && (
                    <div className="flex flex-col items-center gap-1">
                        <LandPlot className="w-6 h-6 text-primary" />
                        <span>{property.projectHighlights.totalLand}</span>
                    </div>
                )}
                {property.projectHighlights.towers && (
                    <div className="flex flex-col items-center gap-1">
                        <Building2 className="w-6 h-6 text-primary" />
                        <span>{property.projectHighlights.towers}</span>
                    </div>
                )}
                {property.projectHighlights.floors && (
                    <div className="flex flex-col items-center gap-1">
                        <Layers className="w-6 h-6 text-primary" />
                        <span>{property.projectHighlights.floors}</span>
                    </div>
                )}
            </div>
        )}

      </CardContent>
      <CardFooter className="p-4 bg-secondary/50">
        <Button asChild className="w-full" variant="default">
             <Link href={`/properties/${property.id}`}>
                View Details
                <ArrowRight className="ml-2"/>
            </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
