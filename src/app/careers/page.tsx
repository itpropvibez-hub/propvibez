import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Award, Briefcase, Calendar, MessageSquare, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

const openings = [
    {
        title: "Senior Property Advisor",
        location: "Noida",
        type: "Full-time",
    },
    // {
    //     title: "Commercial Leasing Manager",
    //     location: "Gurgaon",
    //     type: "Full-time",
    // },
    {
        title: "Digital Marketing Executive",
        location: "Noida",
        type: "Full-time",
    },
     {
        title: "Client Relationship Manager",
        location: "Noida",
        type: "Full-time",
    },
]

const testimonials = [
    {
        name: "Abhay K.",
        role: "Software Developer",
        avatar: "",
        review: "The energy here is infectious! We're constantly encouraged to innovate and think outside the box. It's more than just a job; it's a place where your contributions are truly valued."
    },
    // {
    //     name: "Abhay K.",
    //     role: "Marketing Team",
    //     avatar: "https://i.pravatar.cc/150?u=emp2",
    //     review: "PropVibez has an amazing work culture. The leadership is supportive, and there's a huge opportunity for growth. I'm proud to be part of a team that values integrity and client satisfaction above all."
    // }
]

export default function CareersPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center text-center text-white">
                 <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
                    alt="A team collaborating in an office"
                    fill
                    className="object-cover"
                    data-ai-hint="team meeting"
                />
                 <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black font-headline">Work With Us</h1>
                    <p className="text-xl md:text-2xl mt-4 font-light max-w-2xl mx-auto">
                        Build a rewarding career in real estate with a team that's shaping the future.
                    </p>
                </div>
            </section>

             {/* Why Join Us Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold font-headline text-accent mb-12 text-center">Why Build Your Career at PropVibez?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="p-6 text-center border-0 shadow-none">
                            <Star className="h-10 w-10 text-primary mx-auto mb-4"/>
                            <h3 className="text-xl font-semibold font-headline mb-2">Growth & Learning</h3>
                            <p className="text-muted-foreground text-sm">We invest in our people through continuous training, mentorship, and opportunities for advancement.</p>
                        </Card>
                        <Card className="p-6 text-center border-0 shadow-none">
                            <Award className="h-10 w-10 text-primary mx-auto mb-4"/>
                            <h3 className="text-xl font-semibold font-headline mb-2">Rewarding Culture</h3>
                            <p className="text-muted-foreground text-sm">We celebrate success with competitive compensation, incentives, and a supportive work environment.</p>
                        </Card>
                        <Card className="p-6 text-center border-0 shadow-none">
                            <Briefcase className="h-10 w-10 text-primary mx-auto mb-4"/>
                            <h3 className="text-xl font-semibold font-headline mb-2">Meaningful Impact</h3>
                            <p className="text-muted-foreground text-sm">Be a part of a team that helps people achieve their dreams of owning a home or growing their business.</p>
                        </Card>
                    </div>
                </div>
            </section>
            
            {/* Current Openings Section */}
            <section className="py-16 md:py-24 bg-secondary">
                 <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold font-headline text-accent mb-12 text-center">Current Openings</h2>
                    <div className="max-w-3xl mx-auto">
                        {openings.map(opening => (
                            <Card key={opening.title} className="mb-4 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                <div>
                                    <h3 className="font-bold font-headline text-lg text-primary">{opening.title}</h3>
                                    <p className="text-sm text-muted-foreground">{opening.location} &middot; {opening.type}</p>
                                </div>
                                <Button variant="outline" className="mt-4 sm:mt-0">Apply Now</Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

             {/* Employee Testimonials */}
             <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold font-headline text-accent mb-12 text-center">What Our Team Says</h2>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-xl mx-auto">
                        {testimonials.map(t => (
                            <Card key={t.name} className="p-6">
                                <CardContent className="p-0">
                                    <div className="flex items-center mb-4">
                                        <Avatar className="h-12 w-12 mr-4">
                                            <AvatarImage src={t.avatar} alt={t.name} />
                                            <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h4 className="font-semibold">{t.name}</h4>
                                            <p className="text-sm text-muted-foreground">{t.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground italic">"{t.review}"</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* General Application Form */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container mx-auto px-4">
                    <Card className="max-w-2xl mx-auto p-8 shadow-xl">
                        <CardHeader className="text-center p-0 mb-6">
                            <CardTitle className="text-3xl font-headline text-accent">Don't See a Fit?</CardTitle>
                            <CardDescription>
                                We are always looking for great talent. Send us your resume, and we'll get in touch if a suitable role opens up.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                             <form className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input id="name" placeholder="Your name here"/>
                                    </div>
                                     <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" type="email" placeholder="Your email here"/>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input id="phone" type="tel"/>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="position">Position of Interest</Label>
                                    <Input id="position" placeholder="e.g., Sales, Marketing"/>
                                </div>
                                 <div className="space-y-2">
                                    <Label htmlFor="resume">Resume/CV (Link)</Label>
                                    <Input id="resume" placeholder="Link to your resume (e.g., Google Drive, LinkedIn)"/>
                                </div>
                                <Button type="submit" className="w-full">Submit Application</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>

             {/* Feedback CTA */}
            <section className="py-16 md:py-24 text-center">
                 <div className="container mx-auto px-4">
                     <h2 className="text-3xl font-bold font-headline text-accent mb-4">Have Feedback For Us?</h2>
                     <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Whether you're a client or an employee, your feedback helps us improve. Share your thoughts with us.</p>
                     <Button variant="outline">
                         <MessageSquare className="mr-2 h-4 w-4"/>
                         Share Your Feedback
                    </Button>
                 </div>
            </section>

        </div>
    )
}
