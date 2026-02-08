import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Instagram, Globe } from "lucide-react";

export function FounderMessage() {
  return (
    <Card className="p-8 md:p-12 border-none bg-secondary/50 overflow-hidden relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="flex flex-col items-center text-center">
          <div className="relative group">
            <Avatar className="w-64 h-64 mb-6 border-8 border-background shadow-2xl transition-transform group-hover:scale-105">
              <AvatarImage src="/assets/profile.jpeg" className="object-cover" />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <div className="flex gap-4 justify-center mt-2">
               <a href="https://www.linkedin.com/in/shailyshaily/" className="p-2 bg-background rounded-full shadow-md hover:text-primary transition-all" target="_blank"><Linkedin size={20}/></a>
               <a href="https://www.instagram.com/shayleerealtorlife/" className="p-2 bg-background rounded-full shadow-md hover:text-primary transition-all" target="_blank"><Instagram size={20}/></a>
                <a href="https://shayleemadaan.com/" className="p-2 bg-background rounded-full shadow-md hover:text-primary transition-all" target="_blank"><Globe size={20}/></a>
            </div>
          </div>
          <h3 className="text-2xl font-black font-headline mt-4">Shaylee Madaan</h3>
          <p className="text-primary font-bold tracking-widest uppercase text-sm">Founder & CEO</p>
        </div>
        
        <div className="md:col-span-2">
                <h2 className="text-3xl font-bold font-headline text-accent mb-4">
                  A Message from Our Founder
                </h2>
                <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-6 mb-6">
                  "Prop Vibez’ vision is to become a trusted and premium real
                  estate advisory brand across NCR (India) and Dubai, known for
                  transparency, verified properties, and long-term value. <br />
                  Our mission is to help clients make the right property
                  decisions at the right time with complete clarity and
                  confidence by offering only legally safe and verified options,
                  providing end-to-end support from site visits and negotiations
                  to booking and documentation, and building strong client
                  relationships through honest guidance, professionalism, and a
                  lifestyle-focused approach to real estate."
                  <span className="block mt-4 text-primary font-semibold not-italic">
                    "Not just selling properties; I’m here to help you make the
                    right real estate decision."
                  </span>
                </blockquote>
              </div>
      </div>
    </Card>
  );
}