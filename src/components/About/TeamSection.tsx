import { TeamCard } from "./TeamCard";

const teamMembers = [
  {
    name: "Jatinder Singh",
    role: "Business Head (Dubai)",
    avatar: "/assets/employees/JatinderSingh.jpeg",
    bio: "Strategizing high-value acquisitions in the Dubai luxury sector with 10+ years of cross-border experience.",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Akshay Arora",
    role: "Director of Photography",
    avatar: "/assets/employees/AkshayArora.jpeg",
    bio: "Visual storyteller transforming properties into digital experiences through high-end cinematography.",
    socials: { linkedin: "#" }
  },
   {
    name: "Tushar Punhani",
    role: "Graphic Designer",
    avatar: "/assets/employees/TusharPunhani.png",
    bio: "Defining the PropVibez aesthetic through modern branding and impactful marketing collateral.",
    socials: { twitter: "#" }
  },
 {
    name: "Arpit Mishra",
    role: "Business Development",
    avatar: "/assets/employees/ArpitMishra.jpeg",
    bio: "Drives strategic residential expansion and uncovers lucrative investment opportunities across the Delhi NCR region.",
    socials: { linkedin: "#" }
  },
  {
    name: "Surabhi Singh",
    role: "Business Development",
    avatar: "/assets/employees/SurabhiSingh.jpeg",
    bio: "Focuses on cultivating high-value client relationships and navigating emerging markets for sustainable portfolio growth.",
    socials: { linkedin: "#" }
  },
  {
    name: "Arav Chaudhary",
    role: "Business Development",
    avatar: "/assets/employees/Arav.jpeg",
    bio: "Expert in market analysis and client acquisition, dedicated to connecting investors with premium, high-yield residential properties.",
    socials: { linkedin: "#" }
  },
  {
    name: "Abhay Kumar",
    role: "Software Developer",
    avatar: "/assets/employees/Abhay.jpg",
    // avatar: "/assets/employees/profileicon.jpg",
    bio: "Architecting the technical ecosystem that simplifies property search and client management.",
    socials: { linkedin: "#", github: "#" }
  },
];

export function TeamSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold font-headline text-accent mb-4">Meet the Experts</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our team brings together market intelligence, creative vision, and technical 
            innovation to redefine your real estate experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}