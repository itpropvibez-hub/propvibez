import { properties } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Square, MapPin, CheckCircle, User, Mail, Phone, BedDouble, Bath, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { MapView } from '@/components/map/MapView';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = properties.find((p) => p.id === params.id);

  if (!property) {
    notFound();
  }
  
  const isForRent = property.status === 'For Rent';
  const propertyImages = property.imageIds.map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Image Carousel */}
            <Card className="mb-8 overflow-hidden">
              <Carousel className="w-full">
                <CarouselContent>
                  {propertyImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-video">
                        {image && <Image src={image.imageUrl} alt={`${property.title} - image ${index + 1}`} fill className="object-cover" data-ai-hint={image.imageHint} />}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </Card>

            {/* Property Header */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex gap-2 mb-2">
                        <Badge variant="default">{property.type}</Badge>
                        <Badge variant="secondary">{property.status}</Badge>
                    </div>
                    <CardTitle className="text-3xl font-bold font-headline text-accent">{property.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground text-md mt-2">
                      <MapPin className="w-5 h-5 mr-2 text-primary" />
                      <span>{property.address}, {property.city}</span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                     <p className="text-3xl font-extrabold text-primary">
                        ₹{property.price.toLocaleString('en-IN')}
                        {isForRent && <span className="text-lg font-medium text-muted-foreground">/month</span>}
                    </p>
                    {property.pricePerSqft && (
                      <p className="text-sm text-muted-foreground">(₹{property.pricePerSqft.toLocaleString('en-IN')}/sq.ft.)</p>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Separator className="my-4" />
                <div className="flex justify-around text-center py-4">
                   <div className="flex flex-col items-center gap-2">
                    <Square className="w-7 h-7 text-primary" />
                    <span className="text-md">{property.sqft.toLocaleString('en-IN')} sq.ft.</span>
                  </div>
                  {property.beds && (
                    <div className="flex flex-col items-center gap-2">
                        <BedDouble className="w-7 h-7 text-primary" />
                        <span className="text-md">{property.beds} Beds</span>
                    </div>
                  )}
                   {property.baths && (
                    <div className="flex flex-col items-center gap-2">
                        <Bath className="w-7 h-7 text-primary" />
                        <span className="text-md">{property.baths} Baths</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            
            {/* Description */}
            <Card className="mb-8">
                <CardHeader><CardTitle className="font-headline text-primary">About this property</CardTitle></CardHeader>
                <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{property.description}</p>
                </CardContent>
            </Card>

            {/* Amenities */}
            <Card className="mb-8">
                <CardHeader><CardTitle className="font-headline text-primary">Amenities & Features</CardTitle></CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {property.amenities.map(amenity => (
                            <div key={amenity} className="flex items-center">
                                <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                                <span>{amenity}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

             {/* Map Location */}
             <Card>
                <CardHeader><CardTitle className="font-headline text-primary">Location</CardTitle></CardHeader>
                <CardContent>
                   <div className="h-[400px] rounded-lg overflow-hidden border">
                     <MapView properties={[property]} />
                   </div>
                </CardContent>
            </Card>

          </div>
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-primary border-2 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                        <AvatarImage src={property.agent.avatarUrl} alt={property.agent.name} />
                        <AvatarFallback>{property.agent.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="font-headline text-xl text-accent">Interested?</CardTitle>
                        <p className="text-muted-foreground">Contact: {property.agent.name}</p>
                    </div>
                </div>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
                        <Input placeholder="Your Name" className="pl-9"/>
                    </div>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
                        <Input type="email" placeholder="Your Email" className="pl-9"/>
                    </div>
                    <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
                        <Input type="tel" placeholder="Your Phone" className="pl-9"/>
                    </div>
                    <Textarea placeholder={`I am interested in "${property.title}"...`} />
                    <Button type="submit" className="w-full">Send Inquiry</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
