"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, FileText, Award, Users, ArrowRight, Mail } from "lucide-react"
import { MobileNav } from "@/components/ui/mobile-nav"
import { FadeIn, FadeInWhenVisible } from "@/components/ui/fade-in"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background border-border">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-foreground">Onuoha Systems</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="/benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Benefits
            </Link>
            <Link href="/testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="default" className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700">Get Started</Button>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Updated for centered content */}
        <FadeIn yOffset={-20} duration={0.6}>
          <section className="w-full py-12 md:py-20 lg:py-28 bg-background">
            <div className="container px-4 md:px-6">
              {/* Change grid to single column and center items */}
              <div className="flex flex-col items-center justify-center text-center space-y-6"> {/* Center content */}
                {/* Text content container */}
                <div className="max-w-3xl space-y-4"> {/* Limit width and add spacing */}
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
                    Get Noticed with ATS-Optimized Resumes
                  </h1>
                  <p className="text-muted-foreground md:text-lg lg:text-xl">
                    Custom resume writing services designed to pass Applicant Tracking Systems and land you more
                    interviews.
                  </p>
                </div>
                {/* Button container - centered */}
                <div className="flex flex-col gap-2 sm:flex-row justify-center"> {/* Center buttons */}
                  <Button variant="default" size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                    <Link
                      href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3aOfGZfeUdsIhAt7ilBvhGtzzo6hKVsgmUfDKqrLp895XoWiCTH-iy_ADrFdO2FL8HAphywKGP"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a Consultation
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-100 hover:text-blue-700" asChild>
                    <Link href="/services">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Services Section */}
        <FadeInWhenVisible delay={0.1}>
          <section id="services" className="w-full py-12 md:py-20 lg:py-28 bg-muted/40">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">Our Services</h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-lg lg:text-xl/relaxed">
                    Professional resume services tailored to your career goals
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <Card className="bg-card text-card-foreground">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <FileText className="h-12 w-12 text-blue-600" />
                    <h3 className="text-xl font-bold">ATS Resume Writing</h3>
                    <p className="text-muted-foreground">
                      Custom resumes optimized to pass Applicant Tracking Systems and reach human recruiters.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card text-card-foreground">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <Award className="h-12 w-12 text-blue-600" />
                    <h3 className="text-xl font-bold">Resume Review</h3>
                    <p className="text-muted-foreground">
                      Professional analysis of your existing resume with detailed improvement recommendations.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card text-card-foreground">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <Users className="h-12 w-12 text-blue-600" />
                    <h3 className="text-xl font-bold">Career Coaching</h3>
                    <p className="text-muted-foreground">
                      One-on-one guidance to help you navigate your job search and career development.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Benefits Section */}
        <FadeInWhenVisible delay={0.1}>
          <section id="benefits" className="w-full py-12 md:py-20 lg:py-28 bg-background">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">Why Choose Us</h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-lg lg:text-xl/relaxed">
                    Stand out from the competition with our expert resume services
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">ATS-Optimized</h3>
                    <p className="text-muted-foreground mt-2">
                      Our resumes are specifically designed to pass through Applicant Tracking Systems, ensuring your
                      application gets seen.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Industry Expertise</h3>
                    <p className="text-muted-foreground mt-2">
                      Our writers have experience across various industries and understand what recruiters are looking
                      for.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Personalized Approach</h3>
                    <p className="text-muted-foreground mt-2">
                      We tailor each resume to highlight your unique skills, experience, and career goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Satisfaction Guaranteed</h3>
                    <p className="text-muted-foreground mt-2">
                      We offer revisions until you're completely satisfied with your resume.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Testimonials Section */}
        <FadeInWhenVisible delay={0.1}>
          <section id="testimonials" className="w-full py-12 md:py-20 lg:py-28 bg-background">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">Client Success Stories</h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-lg lg:text-xl/relaxed">
                    See what our clients have to say about our services
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <p className="italic text-muted-foreground">
                      "After using Onuoha Systems' resume service, I started getting calls for interviews within days.
                      Their ATS optimization really works!"
                    </p>
                    <div>
                      <p className="font-bold">Aisha Patel</p>
                      <p className="text-sm text-muted-foreground">Marketing Professional</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <p className="italic text-muted-foreground">
                      "I was struggling to get past the application stage. After getting my resume rewritten, I landed
                      three interviews in one week!"
                    </p>
                    <div>
                      <p className="font-bold">Miguel Hernandez</p>
                      <p className="text-sm text-muted-foreground">Software Engineer</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <p className="italic text-muted-foreground">
                      "The career coaching combined with the resume service gave me the confidence and tools I needed to
                      make a successful career change."
                    </p>
                    <div>
                      <p className="font-bold">Zainab Okonkwo</p>
                      <p className="text-sm text-muted-foreground">Finance Professional</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-center mt-8">
                <Button variant="outline" className="flex items-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-100 hover:text-blue-700" asChild>
                  <Link href="/testimonials">
                    View More Success Stories
                    <ArrowRight className="h-4 w-4 text-blue-600" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* CTA Section */}
        <FadeInWhenVisible delay={0.1}>
          <section className="w-full py-12 md:py-20 lg:py-28 bg-white text-black">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                    Ready to Transform Your Resume?
                  </h2>
                  <p className="max-w-[700px] text-gray-700 md:text-lg lg:text-xl/relaxed">
                    Get started today and increase your chances of landing your dream job
                  </p>
                </div>
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700" asChild>
                  <Link
                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3aOfGZfeUdsIhAt7ilBvhGtzzo6hKVsgmUfDKqrLp895XoWiCTH-iy_ADrFdO2FL8HAphywKGP"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Your Free Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Contact Section */}
        <FadeInWhenVisible delay={0.1}>
          <section id="contact" className="w-full py-12 md:py-20 lg:py-28 bg-muted/40">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 lg:grid-cols-2">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">Contact Us</h2>
                  <p className="text-muted-foreground md:text-lg">
                    Ready to get started or have questions? Reach out to us using the form or book a consultation.
                  </p>
                  <Button size="lg" variant="default" className="bg-blue-600 hover:bg-blue-700" asChild>
                    <Link
                      href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3aOfGZfeUdsIhAt7ilBvhGtzzo6hKVsgmUfDKqrLp895XoWiCTH-iy_ADrFdO2FL8HAphywKGP"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a Free Consultation
                    </Link>
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium leading-none text-foreground">Name</label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium leading-none text-foreground">Email</label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium leading-none text-foreground">Subject</label>
                    <Input id="subject" placeholder="Enter subject" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none text-foreground">Message</label>
                    <Textarea id="message" placeholder="Enter your message" />
                  </div>
                  <Button size="lg" variant="default" className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </div>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>
      </main>

      {/* Footer - White background and dark text */}
      <footer className="w-full py-6 bg-white text-black border-t border-gray-200"> {/* White bg, black text, light border */}
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-6 w-6 text-blue-600" /> {/* Blue icon */}
                <span className="text-xl font-bold text-black">Onuoha Systems</span> {/* Black text */}
              </div>
              <p className="text-gray-600">Professional resume writing services to help you land your dream job.</p> {/* Dark gray text */}
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-black">Quick Links</h3> {/* Black heading */}
              <ul className="space-y-2">
                {/* Dark gray links, hover to black */}
                <li><Link href="/" className="text-gray-600 hover:text-black transition-colors">Home</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-black transition-colors">Services</Link></li>
                <li><Link href="/benefits" className="text-gray-600 hover:text-black transition-colors">Benefits</Link></li>
                <li><Link href="/testimonials" className="text-gray-600 hover:text-black transition-colors">Testimonials</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-black transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-black">Legal</h3> {/* Black heading */}
              <ul className="space-y-2">
                 {/* Dark gray links, hover to black */}
                <li><Link href="/privacy-policy" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-gray-600 hover:text-black transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          {/* Light border, dark gray text */}
          <div className="mt-8 border-t border-gray-200 pt-6 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Onuoha Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

