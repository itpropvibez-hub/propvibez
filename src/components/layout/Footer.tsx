import { Logo } from '@/components/Logo';
import { Facebook, Twitter, Instagram, Linkedin  } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto md:px-4 py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 flex flex-col gap-4 items-center md:items-start">
            <Logo />
            <p className="text-muted-foreground text-sm text-center md:text-left">
              Your partner in finding the perfect property.
            </p>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3 font-headline text-primary">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link></li>
                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
                 <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Services</Link></li>
                {/* <li><Link href="/properties" className="text-sm text-muted-foreground hover:text-primary">Properties</Link></li> */}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 font-headline text-primary">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
                <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-primary">Careers</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Feedback</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 font-headline text-primary">Connect</h4>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/share/17sMJHGU4D/?mibextid=wwXIfr" target='_blank' className="text-muted-foreground hover:text-primary"><Facebook size={20} /></Link>
                {/* <Link href="#" className="text-muted-foreground hover:text-primary" target='_blank'><Twitter size={20} /></Link> */}
                <Link href="https://www.instagram.com/propvibez?igsh=NDRvZjdob240dm1r&utm_source=qr" target='_blank' className="text-muted-foreground hover:text-primary"><Instagram size={20} /></Link>
                <Link href="https://www.linkedin.com/company/prop-vibez/" className="text-muted-foreground hover:text-primary" target='_blank'><Linkedin size={20} /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PropVibez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
