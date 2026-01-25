import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const ContactCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold font-headline mb-4">
          Ready to Begin Your Property Journey?
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Let our experts guide you. Get in touch today for a free, no-obligation consultation.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/contact">Contact Us Now</Link>
        </Button>
      </div>
    </section>
  );
};