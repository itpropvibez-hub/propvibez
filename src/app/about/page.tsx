import Image from "next/image";
import { CompanyInfo } from "@/components/About/CompanyInfo";
import { FounderMessage } from "@/components/About/FounderMessage";
import { TeamSection } from "@/components/About/TeamSection";
import { JoinCommunity } from "@/components/About/JoinCommunity";

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* --- Hero Section --- */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600"
          alt="Luxury Real Estate"
          fill
          className="object-cover"
          priority
        />
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        
        <div className="relative z-10 px-4 space-y-4">
          <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter uppercase">
            Our Story
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto" />
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto text-gray-200">
            Defining the "Vibe" in Premium Real Estate Consultancy
          </p>
        </div>
      </section>

      {/* --- 1. Company Philosophy & Stats --- */}
      <CompanyInfo />

      {/* --- 2. Founder's Spotlight (Section with background contrast) --- */}
      <section className="bg-secondary/30 py-24 relative overflow-hidden">
        {/* Subtle decorative circle */}
        <div className="absolute -left-20 top-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4">
          <FounderMessage />
        </div>
      </section>

      {/* --- 3. The Professional Team Grid --- */}
      <TeamSection />

      {/* --- 4. Final CTA / Community Section --- */}
      <JoinCommunity />
      
      {/* --- 5. Footer Transition (Optional) --- */}
      <div className="h-20 bg-gradient-to-t from-muted/50 to-transparent" />
    </main>
  );
}