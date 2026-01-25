import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Search, FileText, Handshake, Key } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Discovery & Consultation",
    description: "We start by understanding your needs, budget, and aspirations.",
    icon: <Search className="h-6 w-6"/>,
  },
  {
    id: 2,
    title: "Property Shortlisting",
    description: "A curated list of properties complete with virtual tours and insights.",
    icon: <FileText className="h-6 w-6"/>,
  },
  {
    id: 3,
    title: "Site Visits & Negotiation",
    description: "We handle all negotiations to ensure you get the best possible deal.",
    icon: <Handshake className="h-6 w-6"/>,
  },
  {
    id: 4,
    title: "Possession & Beyond",
    description: "End-to-end support through the final paperwork and handover.",
    icon: <Key className="h-6 w-6"/>,
  },
];

export const ServiceStepGuide = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-headline text-accent mb-12 text-center">
          Your Journey with PropVibez
        </h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block -translate-x-1/2"></div>
          
          {steps.map((step, index) => {
            // Logic: Even index (0, 2) = Left side, Odd index (1, 3) = Right side
            const isRightSide = index % 2 !== 0;

            return (
              <div 
                key={step.id} 
                className={`mb-12 flex items-center w-full justify-between ${
                  isRightSide ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Box */}
                <div className="w-full md:w-[45%]">
                  <Card className="p-6 shadow-lg">
                    <Badge variant="default" className="mb-2">Step {step.id}</Badge>
                    <h3 className="text-xl font-bold font-headline mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </Card>
                </div>

                {/* Icon Circle (Centered on line) */}
                <div className="hidden md:flex justify-center items-center w-12 h-12 rounded-full bg-primary text-primary-foreground absolute left-1/2 -translate-x-1/2 z-10 border-4 border-secondary">
                  {step.icon}
                </div>

                {/* Empty Spacer for the other side */}
                <div className="hidden md:block w-[45%]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};