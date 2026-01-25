import { Card, CardContent, CardTitle } from '@/components/ui/card';
// import { SERVICES_DATA } from './data'; // Adjust path accordingly

const Home = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
const Building = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16"></rect><path d="M8 20V12h8v8"></path><path d="M8 12h8"></path><path d="M12 4v16"></path></svg>
const TrendingUp = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
const UserCheck = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
const FileSignature = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m11.5 16.5-3 3L7 18"></path><path d="m20 12.5-3 3L15.5 14"></path></svg>
const Banknote = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01"></path><path d="M18 12h.01"></path></svg>


const services = [
    {
        title: "Residential Sales & Purchase",
        description: "Helping you buy or sell apartments, villas, plots, and houses with expert negotiation and seamless paperwork.",
        icon: <Home className="h-8 w-8" />
    },
    {
        title: "Commercial Sales & Leasing",
        description: "Specialized services for acquiring or leasing office spaces, retail shops, and industrial properties.",
        icon: <Building className="h-8 w-8" />
    },
    {
        title: "Property Investment Advisory",
        description: "Providing data-driven insights and strategic advice to help you make profitable real estate investments.",
        icon: <TrendingUp className="h-8 w-8" />
    },
    {
        title: "Rental & Tenancy Management",
        description: "Comprehensive support for landlords and tenants, ensuring a hassle-free rental experience.",
        icon: <UserCheck className="h-8 w-8" />
    },
    {
        title: "Legal & Documentation Support",
        description: "Our legal experts assist with all documentation, due diligence, and title verification for a secure transaction.",
        icon: <FileSignature className="h-8 w-8" />
    },
    {
        title: "Home Loan Assistance",
        description: "We partner with leading financial institutions to help you secure the best home loan deals quickly.",
        icon: <Banknote className="h-8 w-8" />
    },
]

export const WhatWeOffer = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-headline text-accent mb-12 text-center">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="text-center p-6 flex flex-col items-center hover:bg-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-primary bg-primary/10 p-4 rounded-full mb-4">
                {service.icon}
              </div>
              <CardTitle className="font-headline text-xl mb-2">{service.title}</CardTitle>
              <CardContent className="text-muted-foreground text-sm flex-grow p-0">
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};