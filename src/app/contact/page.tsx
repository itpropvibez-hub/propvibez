import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react"
import { MapView } from "@/components/map/MapView"
import type { Property } from "@/lib/types"
import Link from "next/link"

const officeLocation: Property = {
    id: 'office-location',
    title: 'PropVibez Main Branch',
    price: 0,
    address: 'Unit no. 910, 9th Floor, Assotech Business Cresterra, Sector 135',
    city: 'Noida',
    sqft: 5000,
    type: 'Office',
    status: 'For Rent',
    description: '',
    amenities: [],
    imageIds: [],
    location: { lat: 28.495785053605562, lng: 77.4023328764464 },
    agent: { name: '', avatarUrl: '' }
};

export default function ContactPage() {
    return (
        <div className="bg-background">
            {/* Header Section */}
            <section className="bg-secondary py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl md:text-6xl font-black font-headline text-accent">Get In Touch</h1>
                    <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
                        We're here to help you with all your real estate needs. Reach out to us today!
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <Card className="p-8 shadow-xl">
                            <CardHeader className="p-0 mb-6">
                                <CardTitle className="text-3xl font-headline text-accent">Send Us a Message</CardTitle>
                                <CardDescription>
                                    Have a question or a request? Fill out the form, and we'll get back to you shortly.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name</Label>
                                            <Input id="name" placeholder="John Doe"/>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email Address</Label>
                                            <Input id="email" type="email" placeholder="john.doe@example.com"/>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input id="phone" type="tel"/>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input id="subject" placeholder="e.g., Inquiry about a property"/>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Your Message</Label>
                                        <Textarea id="message" placeholder="Please type your message here..." rows={5}/>
                                    </div>
                                    <div className="flex justify-between items-center flex-wrap gap-4">
                                        <Button type="submit" size="lg">Send Message</Button>
                                        <Button variant="outline" size="lg">
                                            <Link href="https://wa.me/9871424020" target="_blank">
                                            {/* <MessageSquare className="mr-2 h-5 w-5"/> */}
                                            Chat With Us
                                            </Link>
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Contact Info & Map */}
                        <div className="space-y-8">
                             <Card className="p-8">
                                <CardHeader className="p-0 mb-4">
                                    <CardTitle className="text-2xl font-headline text-accent">Contact Information</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0 space-y-4">
                                    <div className="flex items-start">
                                        <MapPin className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0"/>
                                        <div>
                                            <h4 className="font-semibold">Our Office</h4>
                                            <p className="text-muted-foreground">{officeLocation.address}, {officeLocation.city}, UP, 201304</p>
                                        </div>
                                    </div>
                                     <div className="flex items-start">
                                        <Phone className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0"/>
                                        <div>
                                            <h4 className="font-semibold">Phone</h4>
                                            <p className="text-muted-foreground hover:text-primary transition-colors">
                                                <a href="tel:+911234567890">+91 98714 24020</a>
                                            </p>
                                        </div>
                                    </div>
                                     <div className="flex items-start">
                                        <Mail className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0"/>
                                        <div>
                                            <h4 className="font-semibold">Email</h4>
                                             <p className="text-muted-foreground hover:text-primary transition-colors">
                                                <a href="mailto:info@propvibez.com">info@propvibez.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                             </Card>
                             <div className="h-[400px] rounded-lg overflow-hidden border shadow-lg">
                                 <MapView properties={[officeLocation]} />
                             </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
