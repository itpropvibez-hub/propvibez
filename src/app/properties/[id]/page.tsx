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
import { MapPin, CheckCircle, User, Mail, Phone, Building2, Layers, LandPlot, Users, Home, ParkingCircle, Youtube, FileDown, AreaChart, BedDouble, Bath } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { MapView } from '@/components/map/MapView';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = properties.find((p) => p.id === params.id);

  if (!property) {
    notFound();
  }
  
  const propertyImages = property.imageIds.map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean);

   const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    }
    if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2)} Lac`;
    }
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const ProjectHighlight = ({ icon, label, value }: { icon: React.ReactNode, label: string, value?: string | number }) => {
    if (!value) return null;
    return (
        <div className="flex flex-col items-center text-center p-4 rounded-lg bg-secondary/50">
            <div className="text-primary mb-2">{icon}</div>
            <p className="font-bold text-lg">{value}</p>
            <p className="text-sm text-muted-foreground">{label}</p>
        </div>
    );
  };

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Image Carousel */}
            <Card className="mb-8 overflow-hidden animate-in fade-in-0 duration-500">
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
            <Card className="mb-8 animate-in fade-in-0 duration-500 delay-100">
              <CardHeader>
                <div className="flex justify-between items-start flex-wrap">
                  <div>
                    <Badge variant="default" className="mb-2 capitalize">{property.status}</Badge>
                    <CardTitle className="text-4xl font-bold font-headline text-accent">{property.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground text-lg mt-2">
                      <MapPin className="w-5 h-5 mr-2 text-primary" />
                      <span>{property.locationLine}</span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4 mt-4 sm:mt-0">
                     {property.startingPrice && (
                         <>
                            <p className="text-sm text-muted-foreground">Starting From</p>
                            <p className="text-4xl font-extrabold text-primary">
                               {formatPrice(property.startingPrice)}
                           </p>
                         </>
                     )}
                     {property.price && <p className="text-3xl font-extrabold text-primary">{formatPrice(property.price)}</p>}
                  </div>
                </div>
              </CardHeader>
            </Card>
            
            {/* Description */}
            <Card className="mb-8 animate-in fade-in-0 duration-500 delay-200">
                <CardHeader><CardTitle className="font-headline text-primary">About {property.title}</CardTitle></CardHeader>
                <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{property.description}</p>
                </CardContent>
            </Card>

            {/* Project Highlights */}
            {property.projectHighlights && (
                 <Card className="mb-8 animate-in fade-in-0 duration-500 delay-300">
                    <CardHeader><CardTitle className="font-headline text-primary">Project Highlights</CardTitle></CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                           <ProjectHighlight icon={<LandPlot size={32}/>} label="Total Land" value={property.projectHighlights.totalLand} />
                           <ProjectHighlight icon={<Building2 size={32}/>} label="Towers" value={property.projectHighlights.towers} />
                           <ProjectHighlight icon={<Layers size={32}/>} label="Floors" value={property.projectHighlights.floors} />
                           <ProjectHighlight icon={<Home size={32}/>} label="Residences" value={property.projectHighlights.totalResidences} />
                           <ProjectHighlight icon={<Users size={32}/>} label="Units per Floor" value={property.projectHighlights.unitsPerFloor} />
                           <ProjectHighlight icon={<AreaChart size={32}/>} label="Clubhouse" value={property.projectHighlights.clubhouseSize} />
                           <ProjectHighlight icon={<ParkingCircle size={32}/>} label="Parking" value={property.projectHighlights.parking} />
                        </div>
                    </CardContent>
                </Card>
            )}

             {/* Unit Plans */}
            {property.unitPlans && property.unitPlans.length > 0 && (
                <Card className="mb-8 animate-in fade-in-0 duration-500 delay-400">
                    <CardHeader><CardTitle className="font-headline text-primary">Unit Plans</CardTitle></CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Unit Type</TableHead>
                                    <TableHead className="text-right">Size (sq.ft.)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {property.unitPlans.map((plan, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{plan.type}</TableCell>
                                        <TableCell className="text-right">{plan.size.toLocaleString('en-IN')}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            )}
            
            <div className="grid md:grid-cols-2 gap-8 mb-8 animate-in fade-in-0 duration-500 delay-500">
                {/* Signature Features */}
                {property.features && property.features.length > 0 && (
                    <Card>
                        <CardHeader><CardTitle className="font-headline text-primary">Signature Features</CardTitle></CardHeader>
                        <CardContent className="space-y-3">
                            {property.features.map((feature, index) => (
                                <div key={index} className="flex items-start">
                                    <CheckCircle className="w-5 h-5 mr-3 text-green-600 mt-1 flex-shrink-0" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                )}

                {/* Residence Features */}
                {property.residenceFeatures && property.residenceFeatures.length > 0 && (
                    <Card>
                        <CardHeader><CardTitle className="font-headline text-primary">Inside Your Residence</CardTitle></CardHeader>
                        <CardContent className="space-y-3">
                            {property.residenceFeatures.map((feature, index) => (
                                <div key={index} className="flex items-start">
                                    <CheckCircle className="w-5 h-5 mr-3 text-green-600 mt-1 flex-shrink-0" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                )}
            </div>

            {/* Video & Brochure */}
            {(property.videoUrl || property.brochureUrl) && (
                 <Card className="mb-8 animate-in fade-in-0 duration-500 delay-600">
                    <CardHeader><CardTitle className="font-headline text-primary">Media</CardTitle></CardHeader>
                    <CardContent>
                        {property.videoUrl && (
                            <div className="mb-6">
                                <h3 className="font-semibold mb-2">Project Video</h3>
                                <div className="aspect-video rounded-lg overflow-hidden">
                                     <iframe
                                        className="w-full h-full"
                                        src={property.videoUrl}
                                        title="Project Video"
                                        allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        )}
                         {property.brochureUrl && (
                            <div>
                                <h3 className="font-semibold mb-2">Project Brochure</h3>
                                 <Button asChild>
                                    <a href={property.brochureUrl} target="_blank" rel="noopener noreferrer">
                                        <FileDown className="mr-2"/>
                                        Download Brochure
                                    </a>
                                 </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>
            )}

             {/* Map Location */}
             <Card className="animate-in fade-in-0 duration-500 delay-700">
                <CardHeader><CardTitle className="font-headline text-primary">Location</CardTitle></CardHeader>
                <CardContent>
                   <div className="h-[400px] rounded-lg overflow-hidden border">
                     <MapView properties={[property]} />
                   </div>
                </CardContent>
            </Card>

          </div>
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-primary border-2 shadow-lg animate-in fade-in-0 duration-500 delay-300">
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
