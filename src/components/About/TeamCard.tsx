import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Twitter, Globe } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  // socials?: { linkedin?: string; twitter?: string; portfolio?: string };
}

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <Card className="group relative overflow-hidden p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-none bg-card/50 backdrop-blur-sm">
      <div className="relative mx-auto mb-6 w-40 h-40">
        <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse group-hover:scale-110 transition-transform" />
        <Avatar className="w-full h-full border-4 border-background shadow-lg">
          <AvatarImage src={member.avatar} alt={member.name} className="object-cover" />
          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
      
      <h3 className="text-xl font-bold font-headline mb-1">{member.name}</h3>
      <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
        {member.role}
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        {member.bio}
      </p>

      {/* <div className="flex justify-center gap-4 text-muted-foreground">
        {member.socials?.linkedin && (
          <a href={member.socials.linkedin} className="hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
        )}
        {member.socials?.twitter && (
          <a href={member.socials.twitter} className="hover:text-primary transition-colors">
            <Twitter size={18} />
          </a>
        )}
        <a href="#" className="hover:text-primary transition-colors">
          <Globe size={18} />
        </a>
      </div> */}
    </Card>
  );
}