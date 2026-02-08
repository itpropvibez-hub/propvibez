import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, Mail, ArrowRight } from "lucide-react";

export function JoinCommunity() {
  return (
    <section className="py-20 bg-accent text-accent-foreground overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-secondary/10 rounded-full mb-6 text-secondary">
            <Users size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-headline mb-6 tracking-tight">
            Join the PropVibez Community
          </h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Whether you're a property seeker, an investor, or a talent looking for your next 
            big break, stay connected with the latest vibes in the real estate world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="group shadow-xl">
              <Link href="/careers">
                Work With Us <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white/20 hover:bg-white/10">
              <Link href="/contact">
                <Mail className="mr-2" size={18} /> Get Newsletter
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

//  <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold font-headline mb-4">
//             Join Our Growing Family
//           </h2>
//           <p className="max-w-2xl mx-auto mb-8">
//             We're always looking for passionate and talented individuals to join
//             our team. If you have a passion for real estate and a commitment to
//             excellence, we'd love to hear from you.
//           </p>
//           <Button asChild size="lg" variant="secondary">
//             <Link href="/careers">Explore Open Vacancies</Link>
//           </Button>
//         </div>