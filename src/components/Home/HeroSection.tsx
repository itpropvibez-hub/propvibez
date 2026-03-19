import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export function HeroSection() {
  const agentImage = PlaceHolderImages.find((img) => img.id === 'hero-main');
  const houseImage1 = PlaceHolderImages.find((img) => img.id === 'hero-bg-1');
  const houseImage2 = PlaceHolderImages.find((img) => img.id === 'hero-bg-2');

  return (
    <section className="bg-background overflow-x-hidden md:px-24">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
        {/* Left Side: Text Content */}
        <div className="relative text-center lg:text-left animate-in fade-in slide-in-from-left-12 duration-500 z-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter font-headline text-accent">
            Find Your <span className="text-primary">Dream Home</span> With Us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-lg mx-auto lg:mx-0">
            Discover modern homes, apartments, and commercial spaces that fit your lifestyle and budget. We make your property journey smooth and stress-free.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/properties">View Projects</Link>
          </Button>

            {/* Background House Illustration */}
            <div className="absolute bottom-[-10rem] left-[-5rem] w-[30rem] h-[20rem] opacity-10 -z-10 hidden lg:block">
                 <svg viewBox="0 0 200 200" className="text-accent" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <path d="M20,90 L100,20 L180,90 V180 H20 Z" />
                    <path d="M70,180 V120 H130 V180" />
                    <rect x="50" y="140" width="30" height="40" />
                     <rect x="120" y="140" width="30" height="40" />
                     <rect x="70" y="60" width="60" height="40" />
                </svg>
            </div>
        </div>

        {/* Right Side: Image Collage */}
        <div className="relative h-[450px] lg:h-[550px] animate-in fade-in slide-in-from-right-12 duration-500">
            <div className="absolute w-[85%] h-full rounded-bl-[80px] bg-accent/5 right-0 top-0"></div>
            
            {/* House Image 1 (Top) */}
            {houseImage1 && (
                <div className="absolute top-0 right-0 w-[90%] h-[65%] rounded-2xl overflow-hidden shadow-2xl z-10">
                     <Image
                        src={houseImage1.imageUrl}
                        alt={houseImage1.description}
                        fill
                        className="object-cover"
                        data-ai-hint={houseImage1.imageHint}
                        priority
                      />
                </div>
            )}
            
            {/* House Image 2 (Bottom Left) */}
            {houseImage2 && (
                 <div className="absolute bottom-10 left-0 w-3/5 h-2/5 rounded-2xl overflow-hidden shadow-2xl z-20 border-4 border-background">
                     <Image
                        src={houseImage2.imageUrl}
                        alt={houseImage2.description}
                        fill
                        className="object-cover"
                        data-ai-hint={houseImage2.imageHint}
                      />
                 </div>
            )}

            {/* Agent Image */}
            {agentImage && (
                 <div className="absolute bottom-0 right-[-40px] w-2/3 h-[95%] z-30">
                     <Image
                        src={agentImage.imageUrl}
                        alt={agentImage.description}
                        fill
                        className="object-contain object-bottom drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)]"
                        data-ai-hint={agentImage.imageHint}
                      />
                 </div>
            )}
        </div>
      </div>
    </section>
  );
}
