import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Home, Building, Layers } from 'lucide-react';

const types = [
    { href: "/properties?type=Apartment", icon: <Home className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-white transition-colors" />, label: "Apartments" },
    { href: "/properties?type=House", icon: <Home className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-white transition-colors" />, label: "Houses" },
    { href: "/properties?type=Office", icon: <Building className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-white transition-colors" />, label: "Offices" },
    { href: "/properties?type=Retail", icon: <Building className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-white transition-colors" />, label: "Retail" },
    { href: "/properties?type=Plot", icon: <Layers className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-white transition-colors" />, label: "Plots" },
];

export function PropertyTypes() {
  return (
    <section id="property-types" className="py-12 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline text-accent">
          Explore a World of Properties
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {types.map((type, index) => (
            <Link href={type.href} className="group" key={index}>
              <Card className="p-6 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 group-hover:-translate-y-2 transform transition-all duration-300">
                {type.icon}
                <h3 className="font-semibold font-headline">{type.label}</h3>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
