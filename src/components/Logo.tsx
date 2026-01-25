import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center group">
      <div className="flex items-center gap-2">
        {/* Container for the PNG Logo */}
        <div className="relative w-48 h-24 mx-10">
          <Image 
            src="/assets/logo.png" 
            alt="PropVibez Logo" 
            fill 
            className="object-contain"
            priority // High priority for LCP (Largest Contentful Paint)
          />
        </div>

        {/* <span className="text-2xl font-bold tracking-tight font-headline text-primary group-hover:text-accent transition-colors">
          PropVibez
        </span> */}
      </div>
      {/* <p className="text-xs text-muted-foreground tracking-widest uppercase">
        Elevate Your Lifestyle
      </p> */}
    </Link>
  );
}