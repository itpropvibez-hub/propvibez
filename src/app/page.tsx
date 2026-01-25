import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { properties } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { Home, Building, Layers, TrendingUp, ShieldCheck, Star } from 'lucide-react';
import Link from 'next/link';
import { WhatWeOffer } from './services/WhatWeOffer';
import { ServiceStepGuide } from './services/ServicesStepGuide';
import { ContactCTA } from './services/ContactCTA';
import { FounderVideos } from '@/components/Home/FounderVideos';
import { WhyUs } from '@/components/Home/WhyUs';

export default function P() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
  const featuredProperties = properties.slice(0, 3);

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint} 
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center gap-6 px-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter font-headline text-shadow-lg">
            Your Dream Property Awaits
          </h1>
          <p className="text-lg md:text-2xl font-light max-w-2xl">
            Find the finest residential and commercial properties here.
          </p>
           <Button asChild size="lg" className="mt-4">
              <Link href="/contact">Get in Touch</Link>
            </Button>
        </div>
      </section>
      
      <WhatWeOffer />
      <FounderVideos />
      <ServiceStepGuide />
      <ContactCTA />
      <WhyUs />

      {/* <section id="property-types" className="py-12 md:py-24 bg-secondary">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-center mb-12 font-headline text-accent">
            Explore a World of Properties
          </h2>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            <Link href="/properties" className="group">
              <Card className="p-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Home className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-white" />
                <h3 className="font-semibold font-headline">Apartments</h3>
              </Card>
            </Link>
            <Link href="/properties" className="group">
              <Card className="p-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Home className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-white" />
                <h3 className="font-semibold font-headline">Houses</h3>
              </Card>
            </Link>
             <Link href="/properties" className="group">
              <Card className="p-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Building className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-white" />
                <h3 className="font-semibold font-headline">Offices</h3>
              </Card>
            </Link>
             <Link href="/properties" className="group">
              <Card className="p-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Building className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-white" />
                <h3 className="font-semibold font-headline">Retail</h3>
              </Card>
            </Link>
             <Link href="/properties" className="group">
              <Card className="p-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Layers className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-white" />
                <h3 className="font-semibold font-headline">Plots</h3>
              </Card>
            </Link>
           </div>
         </div>
      </section> */}

      {/* <section id="featured" className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline text-accent">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/properties">View All Properties</Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* <section id="why-us" className="py-12 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline text-accent">
            The PropVibez Advantage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <Star className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-headline">
                Curated Listings
              </h3>
              <p className="text-muted-foreground">
                We offer a handpicked selection of the finest properties, ensuring quality and value for your investment and lifestyle needs.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <TrendingUp className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-headline">
                Market Expertise
              </h3>
              <p className="text-muted-foreground">
                Our deep understanding of the Delhi NCR real estate market helps you make informed decisions, whether you're buying or renting.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
               <div className="bg-primary/10 p-4 rounded-full">
                <ShieldCheck className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-headline">
                Transparent Process
              </h3>
              <p className="text-muted-foreground">
                Experience a seamless and professional journey, from property search to final possession, with our dedicated and honest team.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
