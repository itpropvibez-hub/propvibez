import Image from "next/image";

const stats = [
  // { label: "Years Experience", value: "10+" },
  // { label: "Properties Verified", value: "500+" },
  // { label: "Happy Clients", value: "1.2k" },
  // { label: "Market Regions", value: "Delhi & Dubai" },
];

export function CompanyInfo() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Visuals */}
          <div className="relative group">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl z-10">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
                alt="PropVibez Office"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative back-box */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary rounded-2xl -z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">
                Who We Are
              </h2>
              <h3 className="text-4xl md:text-5xl font-black font-headline text-accent leading-tight">
                Redefining the Real Estate <br /> 
                <span className="text-primary italic">Experience.</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                PropVibez is a premier real estate consultancy firm dedicated to
                making your property journey seamless and rewarding. Founded on
                the principles of transparency, integrity, and client-centricity, 
                we have become a trusted name across the Delhi NCR and Dubai markets.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it's a dream home or a high-yield commercial investment, 
                we combine deep local market knowledge with innovative digital 
                tools to bring you only legally safe and verified options.
              </p>
            </div>

            {/* Stats Grid */}
            {/* <div className="grid grid-cols-2 gap-8 pt-6 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black text-accent">{stat.value}</p>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}