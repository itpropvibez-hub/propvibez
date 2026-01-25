import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Shaily Madaan',
    role: 'Founder & CEO',
    avatar: '/assets/profile.jpeg',
    bio: 'With over 15 years of experience in the Delhi NCR real estate market, Rohan founded PropVibez with a vision to simplify property transactions through technology and trust.',
  },
  {
    name: 'Priya Verma',
    role: 'Head of Sales',
    avatar: 'https://i.pravatar.cc/150?u=sales',
    bio: 'Priya leads our dynamic sales team, ensuring every client receives personalized attention and finds the property that perfectly fits their needs.',
  },
  {
    name: 'Amit Singh',
    role: 'Lead Property Advisor',
    avatar: 'https://i.pravatar.cc/150?u=advisor1',
    bio: 'Amit is a seasoned expert in residential properties, with a knack for identifying high-growth investment opportunities for our clients.',
  },
  {
    name: 'Sunita Kumar',
    role: 'Commercial Real Estate Specialist',
    avatar: 'https://i.pravatar.cc/150?u=advisor2',
    bio: 'Sunita specializes in commercial leasing and sales, helping businesses find the ideal space to grow and thrive in the competitive market.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200"
          alt="Modern house exterior"
          fill
          className="object-cover"
          priority
          data-ai-hint="house exterior"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-black font-headline">About PropVibez</h1>
          <p className="text-xl md:text-2xl mt-4 font-light max-w-2xl mx-auto">
            Your Trusted Partner in Real Estate
          </p>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center md:m-10">
            <div>
              <h2 className="text-4xl font-bold font-headline text-accent mb-6">Who We Are</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                PropVibez is a premier real estate consultancy firm dedicated to making your property journey seamless and rewarding. Founded on the principles of transparency, integrity, and client-centricity, to become a trusted name in the Delhi NCR real estate landscape.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're looking to buy your dream home, rent a stylish apartment, or invest in a high-yield commercial property, our team of experts is here to guide you every step of the way. We combine deep market knowledge with innovative technology to bring you curated listings and invaluable insights.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                 <Image
                    src="/favicon.ico"
                    alt="PropVibez Logo"
                    fill
                    className="object-contain"
                    data-ai-hint="real estate agent"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 border-none">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="flex flex-col items-center text-center">
                <Avatar className="w-64 h-64 mb-4 border-4 border-primary">
                  <AvatarImage src={teamMembers[0].avatar} alt={teamMembers[0].name} className="object-cover"/>
                  <AvatarFallback>{teamMembers[0].name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-2xl font-bold font-headline">{teamMembers[0].name}</h3>
                <p className="text-primary font-semibold">{teamMembers[0].role}</p>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold font-headline text-accent mb-4">A Message from Our Founder</h2>
                <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-6 mb-6">
    "I started PropVibez to challenge the status quo. The real estate journey can be complex and intimidating, but it doesn't have to be. Our mission is to empower you with the right information and expert guidance, ensuring you make confident decisions that elevate your lifestyle and secure your future."
    
    <span className="block mt-4 text-primary font-semibold not-italic">
      "Not just selling properties; I’m here to help you make the right real estate decision."
    </span>
  </blockquote>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Meet The Team Section */}
      {/* <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-headline text-accent mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="p-6 text-center hover:shadow-primary/20 hover:shadow-lg transition-shadow">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold font-headline">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      
       {/* Join Our Team Section */}
      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold font-headline mb-4">Join Our Growing Family</h2>
            <p className="max-w-2xl mx-auto mb-8">
                We're always looking for passionate and talented individuals to join our team. If you have a passion for real estate and a commitment to excellence, we'd love to hear from you.
            </p>
            <Button asChild size="lg" variant="secondary">
                <Link href="/careers">Explore Open Vacancies</Link>
            </Button>
        </div>
      </section>

    </div>
  );
}
