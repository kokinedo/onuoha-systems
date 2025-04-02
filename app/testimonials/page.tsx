"use client";

import Link from "next/link"
// Import Image if you plan to add images to the success stories
// import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card" // Added CardHeader, CardTitle
import { FileText, Star, Quote, ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MobileNav } from "@/components/ui/mobile-nav"
import { FadeIn, FadeInWhenVisible } from "@/components/ui/fade-in"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function TestimonialsPage() {
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
            <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="/benefits" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Benefits
            </Link>
            <Link href="/testimonials" className="text-sm font-medium text-blue-600 transition-colors">
              Testimonials
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
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
        {/* Hero Section - Updated Title */}
        <FadeIn yOffset={-20} duration={0.6}>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
                    Client Success Stories {/* Updated Title */}
                  </h1>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    See what our clients have to say about their experience with Onuoha Systems
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Featured Success Stories Section */}
        <FadeInWhenVisible delay={0.1}>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                  Featured Success Stories
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg lg:text-xl/relaxed">
                  Real results from real clients
                </p>
              </div>

              {/* Story 1: Raj Patel */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                {/* Left Column: Quote & Client Info */}
                <div className="space-y-4">
                   <Card className="bg-card text-card-foreground p-6 shadow-lg">
                     <Quote className="h-8 w-8 text-blue-600 mb-4" />
                     <p className="text-lg italic text-card-foreground mb-4">
                       "After struggling for months to get interviews, I decided to try Onuoha Systems. Within two weeks of using my new resume, I received three interview requests and ultimately landed my dream job at a Fortune 500 company. The investment was absolutely worth it!"
                     </p>
                     <p className="font-semibold text-card-foreground">Raj Patel</p>
                     <p className="text-sm text-muted-foreground">Senior Project Manager</p>
                   </Card>
                </div>
                {/* Right Column: Challenge, Solution, Result */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">The Challenge</h3>
                    <p className="text-muted-foreground">
                      Raj had 10+ years of experience but was struggling to showcase his achievements effectively. His resume wasn't getting past ATS systems, and he wasn't receiving interview invitations despite being well-qualified.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Our Solution</h3>
                    <p className="text-muted-foreground">
                      We created an ATS-optimized resume that highlighted his project management achievements, quantified his results, and showcased his leadership skills. We also provided guidance on tailoring his resume for specific job applications.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">The Result</h3>
                    <p className="text-muted-foreground">
                      Three interview requests within two weeks, resulting in a job offer from his target company with a 15% salary increase from his previous position.
                    </p>
                  </div>
                </div>
              </div>

              {/* Story 2: Mei Zhang */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                 {/* Left Column: Challenge, Solution, Result (Order swapped for variety) */}
                 <div className="space-y-6 md:order-last">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">The Challenge</h3>
                    <p className="text-muted-foreground">
                      Mei was making a career transition from teaching to corporate training and development. Her resume was education-focused and didn't translate her skills to the corporate environment.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Our Solution</h3>
                    <p className="text-muted-foreground">
                      We completely restructured her resume to highlight transferable skills, created achievement statements that would resonate with corporate recruiters, and optimized for training and development keywords.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">The Result</h3>
                    <p className="text-muted-foreground">
                      Mei secured a position as a Training Specialist at a tech company within one month, successfully making her career transition with a competitive salary.
                    </p>
                  </div>
                </div>
                {/* Right Column: Quote & Client Info */}
                <div className="space-y-4 md:order-first">
                   <Card className="bg-card text-card-foreground p-6 shadow-lg">
                     <Quote className="h-8 w-8 text-blue-600 mb-4" />
                     <p className="text-lg italic text-card-foreground mb-4">
                       "Changing careers seemed impossible until I worked with Onuoha Systems. They helped me translate my teaching experience into corporate language, and their career coaching gave me the confidence to pursue positions I wouldn't have considered before. I'm now thriving in my new role!"
                     </p>
                     <p className="font-semibold text-card-foreground">Mei Zhang</p>
                     <p className="text-sm text-muted-foreground">Training Specialist</p>
                   </Card>
                </div>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Client Testimonials by Service Section (Tabs) */}
        <FadeInWhenVisible delay={0.1}>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                  Client Testimonials by Service
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg lg:text-xl/relaxed">
                  See what clients say about our specific services
                </p>
              </div>
              <Tabs defaultValue="ats-writing" className="w-full max-w-4xl mx-auto">
                <TabsList className="grid w-full grid-cols-3 mb-10 bg-muted text-muted-foreground border border-border">
                  <TabsTrigger value="ats-writing" className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">ATS Resume Writing</TabsTrigger>
                  <TabsTrigger value="resume-review" className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Resume Review</TabsTrigger>
                  <TabsTrigger value="career-coaching" className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Career Coaching</TabsTrigger>
                </TabsList>

                {/* Tab Content - ATS Resume Writing */}
                <TabsContent value="ats-writing">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="bg-card text-card-foreground">
                      <CardContent className="p-6 space-y-3">
                        <Quote className="h-6 w-6 text-muted-foreground" />
                        <p className="italic text-card-foreground">"After using Onuoha Systems' resume service, I started getting calls for interviews within days. Their ATS optimization really works!"</p>
                        <div>
                          <p className="font-semibold text-card-foreground">Aisha Patel</p>
                          <p className="text-sm text-muted-foreground">Marketing Professional</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-card text-card-foreground">
                      <CardContent className="p-6 space-y-3">
                        <Quote className="h-6 w-6 text-muted-foreground" />
                        <p className="italic text-card-foreground">"The keyword optimization was incredible. I applied to the same company that had rejected me before, and this time I got an interview and eventually the job!"</p>
                        <div>
                          <p className="font-semibold text-card-foreground">Jamal Washington</p>
                          <p className="text-sm text-muted-foreground">Software Developer</p>
                        </div>
                      </CardContent>
                    </Card>
                     <Card className="bg-card text-card-foreground">
                      <CardContent className="p-6 space-y-3">
                        <Quote className="h-6 w-6 text-muted-foreground" />
                        <p className="italic text-card-foreground">"As a recent graduate, I was struggling to showcase my limited experience. Onuoha Systems helped me create a resume that highlighted my potential and got me noticed."</p>
                        <div>
                          <p className="font-semibold text-card-foreground">Sofia Rodriguez</p>
                          <p className="text-sm text-muted-foreground">Business Analyst</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Tab Content - Resume Review */}
                <TabsContent value="resume-review">
                   <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Add specific testimonials for Resume Review here */}
                    <Card className="bg-card text-card-foreground">
                      <CardContent className="p-6 space-y-3">
                        <Quote className="h-6 w-6 text-muted-foreground" />
                        <p className="italic text-card-foreground">"The feedback during the resume review was invaluable. They pointed out weaknesses I hadn't even considered and gave actionable advice."</p>
                        <div>
                          <p className="font-semibold text-card-foreground">Ben Carter</p>
                          <p className="text-sm text-muted-foreground">Operations Manager</p>
                        </div>
                      </CardContent>
                    </Card>
                     <Card className="bg-card text-card-foreground">
                      <CardContent className="p-6 space-y-3">
                        <Quote className="h-6 w-6 text-muted-foreground" />
                        <p className="italic text-card-foreground">"Quick and thorough review. Helped me understand how recruiters see my resume and how to improve its impact significantly."</p>
                        <div>
                          <p className="font-semibold text-card-foreground">Chloe Davis</p>
                          <p className="text-sm text-muted-foreground">HR Specialist</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Tab Content - Career Coaching */}
                <TabsContent value="career-coaching">
                   <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Add specific testimonials for Career Coaching here */}
                    <Card className="bg-card text-card-foreground">
                      <CardContent className="p-6 space-y-3">
                        <Quote className="h-6 w-6 text-muted-foreground" />
                        <p className="italic text-card-foreground">"The career coaching sessions boosted my confidence immensely. I learned how to articulate my value and navigate interviews much more effectively."</p>
                        <div>
                          <p className="font-semibold text-card-foreground">Daniel Evans</p>
                          <p className="text-sm text-muted-foreground">Sales Director</p>
                        </div>
                      </CardContent>
                    </Card>
                     <Card className="bg-card text-card-foreground">
                      <CardContent className="p-6 space-y-3">
                        <Quote className="h-6 w-6 text-muted-foreground" />
                        <p className="italic text-card-foreground">"Helped me clarify my career path and develop a strategy for my job search. The coaching was personalized and incredibly helpful."</p>
                        <div>
                          <p className="font-semibold text-card-foreground">Olivia Green</p>
                          <p className="text-sm text-muted-foreground">Graphic Designer</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* CTA Section - Use FadeInWhenVisible - UPDATED FOR THEME AWARENESS */}
        <FadeInWhenVisible delay={0.1}>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Join Our Success Stories?
                  </h2>
                  <p className="max-w-[700px] text-primary-foreground/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Book your free consultation today and take the first step toward your dream job
                  </p>
                </div>
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
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

