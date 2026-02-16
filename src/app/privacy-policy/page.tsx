
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background animate-in fade-in-0 duration-500">
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black font-headline text-accent">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Your privacy is important to us.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-6 md:p-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-3xl font-headline text-primary">Privacy Policy – PropVibez</CardTitle>
               <p className="text-muted-foreground pt-2">Last updated: 14 February 2026</p>
            </CardHeader>
            <CardContent className="p-0 space-y-6 text-muted-foreground leading-relaxed">
                <p>
                    PropVibez (“we”, “us”, “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you interact with us, including through our website, social media, phone, email, WhatsApp, or in person.
                </p>
                 <p>
                    By using our services or submitting your information to us, you agree to the practices described in this Privacy Policy.
                </p>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-headline text-accent">1. Who We Are</h2>
                    <p>
                        <strong>Business Name:</strong> PropVibez<br/>
                        <strong>Office Address:</strong> Unit no. 910, 9th Floor, Assotech Business Cresterra, Sector 135, Noida, UP, 201304<br/>
                        <strong>Phone:</strong> <a href="tel:+919871424020" className="text-primary hover:underline">+91 98714 24020</a><br/>
                        <strong>Email:</strong> <a href="mailto:info@propvibez.com" className="text-primary hover:underline">info@propvibez.com</a>
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-headline text-accent">2. Information We Collect</h2>
                    <p>We may collect the following types of information:</p>
                    <h3 className="text-xl font-bold font-headline text-accent/80">2.1 Information you provide directly</h3>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        <li>Name</li>
                        <li>Phone number</li>
                        <li>Email address</li>
                        <li>City / location</li>
                        <li>Budget / investment preferences</li>
                        <li>Project or property interests</li>
                        <li>Messages you send via WhatsApp, social media, forms, or email</li>
                    </ul>

                    <h3 className="text-xl font-bold font-headline text-accent/80">2.2 Automatically collected information</h3>
                     <p>When you visit our website or interact with our ads, we may automatically collect:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        <li>IP address and approximate location</li>
                        <li>Device type, browser type, operating system</li>
                        <li>Pages visited, time spent, and actions taken</li>
                        <li>Clicks on ads, forms, and call/WhatsApp buttons</li>
                    </ul>
                     <p>This may be collected via cookies, pixels, or similar technologies.</p>
                </div>
                
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-headline text-accent">3. How We Use Your Information</h2>
                    <p>We use your information to:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        <li>Respond to your enquiries about properties, projects, or services</li>
                        <li>Share project details, brochures, price sheets, and offers</li>
                        <li>Schedule and confirm site visits or calls</li>
                        <li>Provide updates on new launches, opportunities, and related services</li>
                        <li>Improve our marketing, advertising, and user experience</li>
                        <li>Analyse campaign performance (e.g., from Meta, Google, or other ad platforms)</li>
                        <li>Comply with legal, regulatory, and security requirements</li>
                    </ul>
                    <p>We may contact you via phone, WhatsApp, SMS, email, or other channels based on the details you share with us.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-headline text-accent">4. Cookies & Tracking Technologies</h2>
                    <p>Our website and ads may use cookies, pixels, and similar technologies to:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        <li>Remember your preferences</li>
                        <li>Measure website traffic and performance</li>
                        <li>Understand how users interact with our content and ads</li>
                        <li>Run retargeting or remarketing campaigns on platforms like Meta (Facebook/Instagram) and Google</li>
                    </ul>
                    <p>You can manage or block cookies through your browser settings, but some features of the website may not function properly if cookies are disabled.</p>
                </div>

                 <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-headline text-accent">5. Sharing of Information</h2>
                    <p>We do not sell your personal information.</p>
                    <p>We may share your information with:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        <li>Internal sales and advisory teams</li>
                        <li>Trusted partners such as real estate developers or channel partners, only as needed to serve your enquiry</li>
                        <li>Service providers (e.g., CRM tools, email/WhatsApp tools, ad platforms, analytics providers)</li>
                        <li>Authorities or regulators if required by law, regulation, or legal process</li>
                    </ul>
                    <p>All such third parties are expected to handle your information responsibly and only for the purposes outlined above.</p>
                </div>

                 <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-headline text-accent">6. Data Retention</h2>
                     <p>We retain your information for as long as necessary to:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        <li>Respond to your enquiries</li>
                        <li>Maintain records of our interactions</li>
                        <li>Fulfil legal, accounting, or reporting obligations</li>
                    </ul>
                    <p>If you no longer wish us to retain or use your data for marketing, you can request this (see “Your Rights & Choices” below).</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-headline text-accent">7. Data Security</h2>
                    <p>We take reasonable technical and organisational measures to protect your information from unauthorised access, misuse, loss, or disclosure.</p>
                    <p>However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                </div>

                 <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-headline text-accent">8. Your Rights & Choices</h2>
                    <p>You have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        <li>Request access to the personal information we hold about you</li>
                        <li>Request correction of inaccurate or incomplete information</li>
                        <li>Request that we stop using your information for marketing purposes</li>
                        <li>Request deletion of your information, subject to legal and business obligations</li>
                    </ul>
                    <p>To exercise these rights, contact us at:</p>
                    <p>
                        Email: <a href="mailto:info@propvibez.com" className="text-primary hover:underline">info@propvibez.com</a><br/>
                        Phone: <a href="tel:+919871424020" className="text-primary hover:underline">+91 98714 24020</a>
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-headline text-accent">9. Children’s Privacy</h2>
                    <p>Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from minors. If you believe a minor has provided us with information, please contact us so we can delete it.</p>
                </div>

                 <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-headline text-accent">10. Changes to This Privacy Policy</h2>
                    <p>We may update this Privacy Policy from time to time. Any changes will be posted with an updated “Last updated” date. Your continued use of our services after such changes indicates your acceptance of the revised policy.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-headline text-accent">11. Contact Us</h2>
                    <p>If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact:</p>
                     <p>
                        PropVibez<br/>
                        Unit no. 910, 9th Floor, Assotech Business Cresterra, Sector 135, Noida, UP, 201304<br/>
                        Phone: <a href="tel:+919871424020" className="text-primary hover:underline">+91 98714 24020</a><br/>
                        Email: <a href="mailto:info@propvibez.com" className="text-primary hover:underline">info@propvibez.com</a>
                    </p>
                </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
