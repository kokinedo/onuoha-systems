"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Award, CheckCircle, Clock, Zap, Users, ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MobileNav } from "@/components/ui/mobile-nav"
import { FadeIn, FadeInWhenVisible } from "@/components/ui/fade-in"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header - Solid background, ThemeToggle added */}
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
            <Link href="/services" className="text-sm font-medium text-foreground transition-colors">
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
            <Button variant="default" className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-primary-foreground" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <MobileNav />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Use FadeIn */}
        <FadeIn yOffset={-20} duration={0.6}>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
                    Our Resume Services
                  </h1>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Professional resume writing services tailored to your career goals and optimized for ATS systems
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Service Packages Section (Tabs) - Use FadeInWhenVisible */}
        <FadeInWhenVisible delay={0.1}>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
            <div className="container px-4 md:px-6">
              <Tabs defaultValue="ats" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-10 bg-muted text-muted-foreground border border-border">
                  <TabsTrigger value="ats" className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">ATS Resume Writing</TabsTrigger>
                  <TabsTrigger value="review" className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Resume Review</TabsTrigger>
                  <TabsTrigger value="coaching" className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Career Coaching</TabsTrigger>
                </TabsList>

                {/* ATS Resume Writing Tab - Centered */}
                <TabsContent value="ats">
                  {/* Centered Text Block */}
                  <div className="max-w-3xl mx-auto text-center mb-12"> {/* Centered block */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground">ATS Resume Writing</h3>
                      <p className="text-muted-foreground">
                        Our core service. We craft a brand new resume from scratch, tailored to your target roles and
                        optimized to pass Applicant Tracking Systems. Perfect for career changers, recent graduates, or
                        anyone needing a complete resume overhaul.
                      </p>
                      {/* Centered List Items */}
                      <div className="space-y-4 inline-block text-left"> {/* Inline-block + text-left for list alignment */}
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <p className="text-muted-foreground">Keyword optimization for your target roles</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <p className="text-muted-foreground">ATS-friendly formatting and layout</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <p className="text-muted-foreground">Achievement-focused content that stands out</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <p className="text-muted-foreground">Tailored to your industry and career level</p>
                        </div>
                      </div>
                      {/* Centered Button */}
                      <div className="mt-6">
                        <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                          <Link
                            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3aOfGZfeUdsIhAt7ilBvhGtzzo6hKVsgmUfDKqrLp895XoWiCTH-iy_ADrFdO2FL8HAphywKGP"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Get Started
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <Clock className="h-8 w-8 text-blue-600 mb-2" />
                        <CardTitle>Our Process</CardTitle>
                        <CardDescription>How we create your ATS-optimized resume</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 list-decimal list-inside">
                          <li>In-depth consultation to understand your goals</li>
                          <li>Industry and job role keyword research</li>
                          <li>Custom resume draft creation</li>
                          <li>Revisions based on your feedback</li>
                          <li>Final polished resume delivery</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <Zap className="h-8 w-8 text-blue-600 mb-2" />
                        <CardTitle>What's Included</CardTitle>
                        <CardDescription>Everything you get with our service</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Custom ATS-optimized resume</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Matching cover letter template</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>LinkedIn profile optimization tips</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Two rounds of revisions</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <Award className="h-8 w-8 text-blue-600 mb-2" />
                        <CardTitle>Pricing</CardTitle>
                        <CardDescription>Transparent pricing for our services</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="text-2xl font-bold">$199</div>
                          <p className="text-sm text-gray-500">Entry-Level Resume</p>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">$249</div>
                          <p className="text-sm text-gray-500">Mid-Career Resume</p>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">$299</div>
                          <p className="text-sm text-gray-500">Executive Resume</p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href="/contact">Contact for Details</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                {/* Resume Review Tab - Centered */}
                <TabsContent value="review">
                  {/* Centered Text Block */}
                  <div className="max-w-3xl mx-auto text-center mb-12"> {/* Centered block */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">Resume Review</h3>
                      <p className="text-muted-foreground">
                        Already have a resume but not sure if it's effective? Our experts provide a detailed critique,
                        assessing ATS compatibility, content, formatting, and overall impact, with actionable recommendations.
                      </p>
                      {/* Centered List Items */}
                      <div className="space-y-4 inline-block text-left"> {/* Inline-block + text-left for list alignment */}
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <p>Detailed feedback on content and formatting</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <p>ATS compatibility assessment</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <p>Specific recommendations for improvement</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <p>Industry-specific optimization suggestions</p>
                        </div>
                      </div>
                       {/* Centered Button */}
                      <div className="mt-6">
                        <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                           <Link
                            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3aOfGZfeUdsIhAt7ilBvhGtzzo6hKVsgmUfDKqrLp895XoWiCTH-iy_ADrFdO2FL8HAphywKGP"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Get Started
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     {/* ... Card 1 (Process) ... */}
                     {/* ... Card 2 (Included) ... */}
                     {/* ... Card 3 (Pricing) ... */}
                  </div>
                </TabsContent>

                {/* Career Coaching Tab - Centered */}
                <TabsContent value="coaching">
                   {/* Centered Text Block */}
                  <div className="max-w-3xl mx-auto text-center mb-12"> {/* Centered block */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">Career Coaching</h3>
                      <p className="text-muted-foreground">
                        Navigate your career path with confidence. Our coaching sessions cover interview preparation, salary
                        negotiation, career strategy, LinkedIn optimization, and more, tailored to your individual needs.
                      </p>
                       {/* Centered List Items */}
                      <div className="space-y-4 inline-block text-left"> {/* Inline-block + text-left for list alignment */}
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <p>One-on-one coaching sessions</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <p>Job search strategy development</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <p>Interview preparation and practice</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <p>Salary negotiation guidance</p>
                        </div>
                      </div>
                       {/* Centered Button */}
                      <div className="mt-6">
                        <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                           <Link
                            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3aOfGZfeUdsIhAt7ilBvhGtzzo6hKVsgmUfDKqrLp895XoWiCTH-iy_ADrFdO2FL8HAphywKGP"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Get Started
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* The three cards remain below, not centered */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     {/* ... Card 1 (Process) ... */}
                     {/* ... Card 2 (Included) ... */}
                     {/* ... Card 3 (Pricing) ... */}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* How It Works Section - Use FadeInWhenVisible */}
        <FadeInWhenVisible delay={0.1}>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-8 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                    How It Works
                  </h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-lg lg:text-xl/relaxed">
                    Our process is designed to be simple, collaborative, and effective.
                  </p>
                </div>
                <div className="max-w-3xl w-full space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-primary-foreground font-bold">1</div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-foreground">Choose Your Package & Consult</h3>
                      <p className="text-muted-foreground">
                        Select the service package that best fits your needs. Book a free consultation to discuss your
                        goals and ask questions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-primary-foreground font-bold">2</div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-foreground">Provide Information</h3>
                      <p className="text-muted-foreground">
                        Submit your existing resume (if any) and complete our comprehensive questionnaire to provide details
                        about your career history, skills, and achievements.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-primary-foreground font-bold">3</div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-foreground">Drafting & Collaboration</h3>
                      <p className="text-muted-foreground">
                        Your assigned writer creates the first draft, optimized for ATS and tailored to your target roles.
                        You'll review and provide feedback.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-primary-foreground font-bold">4</div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-foreground">Revisions & Final Delivery</h3>
                      <p className="text-muted-foreground">
                        We incorporate your feedback through revision rounds until you are satisfied. Your final documents
                        are delivered in Word and PDF formats.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* CTA Section - Updated Colors */}
        <FadeInWhenVisible delay={0.1}>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                    Ready to Get Started?
                  </h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Book your free consultation today and take the first step toward your dream job
                  </p>
                </div>
                <Button size="lg" className="bg-blue-600 text-primary-foreground hover:bg-blue-700" asChild>
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
      </main>

      {/* Footer - Theme Aware - FINAL VERSION */}
      <footer className="w-full py-6 bg-muted text-muted-foreground border-t border-border">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-foreground">Onuoha Systems</span>
              </div>
              <p className="text-muted-foreground">Professional resume writing services to help you land your dream job.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
                <li><Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
                <li><Link href="/benefits" className="text-muted-foreground hover:text-foreground transition-colors">Benefits</Link></li>
                <li><Link href="/testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-6 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Onuoha Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

