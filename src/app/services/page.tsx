import { WhatWeOffer } from './WhatWeOffer';
import { ServiceStepGuide } from './ServicesStepGuide';
import { ContactCTA } from './ContactCTA';

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black font-headline text-accent">Our Services</h1>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your unique needs.
          </p>
        </div>
      </section>

      <WhatWeOffer />
      <ServiceStepGuide />
      <ContactCTA />
    </main>
  );
}



// import Image from 'next/image';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { CheckCircle, Search, FileText, Handshake, Key } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';

// const Home = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
// const Building = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16"></rect><path d="M8 20V12h8v8"></path><path d="M8 12h8"></path><path d="M12 4v16"></path></svg>
// const TrendingUp = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
// const UserCheck = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
// const FileSignature = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m11.5 16.5-3 3L7 18"></path><path d="m20 12.5-3 3L15.5 14"></path></svg>
// const Banknote = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01"></path><path d="M18 12h.01"></path></svg>

// const services = [
//     {
//         title: "Residential Sales & Purchase",
//         description: "Helping you buy or sell apartments, villas, plots, and houses with expert negotiation and seamless paperwork.",
//         icon: <Home className="h-8 w-8" />
//     },
//     {
//         title: "Commercial Sales & Leasing",
//         description: "Specialized services for acquiring or leasing office spaces, retail shops, and industrial properties.",
//         icon: <Building className="h-8 w-8" />
//     },
//     {
//         title: "Property Investment Advisory",
//         description: "Providing data-driven insights and strategic advice to help you make profitable real estate investments.",
//         icon: <TrendingUp className="h-8 w-8" />
//     },
//     {
//         title: "Rental & Tenancy Management",
//         description: "Comprehensive support for landlords and tenants, ensuring a hassle-free rental experience.",
//         icon: <UserCheck className="h-8 w-8" />
//     },
//     {
//         title: "Legal & Documentation Support",
//         description: "Our legal experts assist with all documentation, due diligence, and title verification for a secure transaction.",
//         icon: <FileSignature className="h-8 w-8" />
//     },
//     {
//         title: "Home Loan Assistance",
//         description: "We partner with leading financial institutions to help you secure the best home loan deals quickly.",
//         icon: <Banknote className="h-8 w-8" />
//     },
// ]

// export default function ServicesPage() {
//   return (
//     <div className="bg-background">
//       {/* Hero Section */}
//       <section className="bg-secondary py-20 text-center">
//         <div className="container mx-auto px-4">
//           <h1 className="text-5xl md:text-6xl font-black font-headline text-accent">Our Services</h1>
//           <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
//             Comprehensive real estate solutions tailored to your unique needs.
//           </p>
//         </div>
//       </section>

//       {/* Key Services Section */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold font-headline text-accent mb-12 text-center">What We Offer</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map(service => (
//                  <Card key={service.title} className="text-center p-6 flex flex-col items-center">
//                     <div className="text-primary bg-primary/10 p-4 rounded-full mb-4">
//                         {service.icon}
//                     </div>
//                     <CardTitle className="font-headline text-xl mb-2">{service.title}</CardTitle>
//                     <CardContent className="text-muted-foreground text-sm flex-grow p-0">
//                         <p>{service.description}</p>
//                     </CardContent>
//                 </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Step-by-step Guide Section */}
//       <section className="py-16 md:py-24 bg-secondary">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold font-headline text-accent mb-12 text-center">Your Journey with PropVibez</h2>
//           <div className="relative max-w-4xl mx-auto">
//             {/* Timeline Line */}
//             <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
            
//             {/* Step 1 */}
//             <div className="mb-12 flex items-center w-full">
//               <div className="w-full md:w-1/2 md:pr-8">
//                 <Card className="p-6 shadow-lg">
//                   <Badge variant="default" className="mb-2">Step 1</Badge>
//                   <h3 className="text-xl font-bold font-headline mb-2">Discovery & Consultation</h3>
//                   <p className="text-sm text-muted-foreground">We start by understanding your needs, budget, and aspirations through a detailed consultation.</p>
//                 </Card>
//               </div>
//               <div className="hidden md:flex justify-center items-center w-12 h-12 rounded-full bg-primary text-primary-foreground absolute left-1/2 -translate-x-1/2 z-10">
//                 <Search className="h-6 w-6"/>
//               </div>
//               <div className="hidden md:block w-1/2"></div>
//             </div>

//             {/* Step 2 */}
//             <div className="mb-12 flex items-center w-full flex-row-reverse md:flex-row">
//               <div className="w-full md:w-1/2 md:pl-8 md:text-right">
//                  <Card className="p-6 shadow-lg md:text-left">
//                   <Badge variant="default" className="mb-2">Step 2</Badge>
//                   <h3 className="text-xl font-bold font-headline mb-2">Property Shortlisting</h3>
//                   <p className="text-sm text-muted-foreground">Our team presents a curated list of properties that match your criteria, complete with virtual tours and insights.</p>
//                 </Card>
//               </div>
//               <div className="hidden md:flex justify-center items-center w-12 h-12 rounded-full bg-primary text-primary-foreground absolute left-1/2 -translate-x-1/2 z-10">
//                 <FileText className="h-6 w-6"/>
//               </div>
//                <div className="hidden md:block w-1/2"></div>
//             </div>

//             {/* Step 3 */}
//             <div className="mb-12 flex items-center w-full">
//               <div className="w-full md:w-1/2 md:pr-8">
//                 <Card className="p-6 shadow-lg">
//                   <Badge variant="default" className="mb-2">Step 3</Badge>
//                   <h3 className="text-xl font-bold font-headline mb-2">Site Visits & Negotiation</h3>
//                   <p className="text-sm text-muted-foreground">We arrange site visits at your convenience and handle all negotiations to ensure you get the best possible deal.</p>
//                 </Card>
//               </div>
//               <div className="hidden md:flex justify-center items-center w-12 h-12 rounded-full bg-primary text-primary-foreground absolute left-1/2 -translate-x-1/2 z-10">
//                 <Handshake className="h-6 w-6"/>
//               </div>
//               <div className="hidden md:block w-1/2"></div>
//             </div>

//             {/* Step 4 */}
//             <div className="mb-12 flex items-center w-full flex-row-reverse md:flex-row">
//               <div className="w-full md:w-1/2 md:pl-8 md:text-right">
//                 <Card className="p-6 shadow-lg md:text-left">
//                   <Badge variant="default" className="mb-2">Step 4</Badge>
//                   <h3 className="text-xl font-bold font-headline mb-2">Possession & Beyond</h3>
//                   <p className="text-sm text-muted-foreground">We provide end-to-end support through the final paperwork and handover, celebrating with you as you get the keys to your new property.</p>
//                 </Card>
//               </div>
//               <div className="hidden md:flex justify-center items-center w-12 h-12 rounded-full bg-primary text-primary-foreground absolute left-1/2 -translate-x-1/2 z-10">
//                 <Key className="h-6 w-6"/>
//               </div>
//               <div className="hidden md:block w-1/2"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 md:py-24 bg-accent text-accent-foreground">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold font-headline mb-4">Ready to Begin Your Property Journey?</h2>
//           <p className="max-w-2xl mx-auto mb-8">
//             Let our experts guide you. Get in touch today for a free, no-obligation consultation.
//           </p>
//           <Button asChild size="lg" variant="secondary">
//             <Link href="/contact">Contact Us Now</Link>
//           </Button>
//         </div>
//       </section>
//     </div>
//   );
// }
