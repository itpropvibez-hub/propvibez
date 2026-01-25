import { Star, TrendingUp, ShieldCheck } from 'lucide-react';

const advantages = [
    { icon: <Star className="h-10 w-10 text-primary" />, title: "Curated Listings", description: "We offer a handpicked selection of the finest properties, ensuring quality and value for your investment and lifestyle needs." },
    { icon: <TrendingUp className="h-10 w-10 text-primary" />, title: "Market Expertise", description: "Our deep understanding of the Delhi NCR real estate market helps you make informed decisions, whether you're buying or renting." },
    { icon: <ShieldCheck className="h-10 w-10 text-primary" />, title: "Transparent Process", description: "Experience a seamless and professional journey, from property search to final possession, with our dedicated and honest team." },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-12 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline text-accent">
          The PropVibez Advantage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {advantages.map((advantage, index) => (
                <div key={index} className="flex flex-col items-center gap-4 p-8 rounded-lg hover:bg-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="bg-primary/10 p-4 rounded-full">
                        {advantage.icon}
                    </div>
                    <h3 className="text-xl font-semibold font-headline">
                        {advantage.title}
                    </h3>
                    <p className="text-muted-foreground">
                        {advantage.description}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
