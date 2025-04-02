"use client";

import Link from "next/link"
// Remove Image import if no other images are used on the page
// import Image from "next/image"
import { Button } from "@/components/ui/button"
// Restore Card and icon imports
import { Card, CardContent } from "@/components/ui/card"
import { FileText, BarChart, Target, Users, Award, Zap, Clock, CheckCircle, TrendingUp, ArrowRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MobileNav } from "@/components/ui/mobile-nav"
import CountUp from 'react-countup'
import { FadeIn, FadeInWhenVisible } from "@/components/ui/fade-in"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function BenefitsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header - Update Get Started Button Link */}
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
            <Link href="/benefits" className="text-sm font-medium text-blue-600 transition-colors">
              Benefits
            </Link>
            <Link href="/testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Testimonials
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {/* Updated Get Started Button */}
            <Button variant="default" className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-primary-foreground" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <MobileNav />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Updated Title and Subtitle */}
        <FadeIn yOffset={-20} duration={0.6}>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
                    The Onuoha Systems Advantage
                  </h1>
                  <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Detailed benefits of working with our professional resume service
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Key Benefits Section - RESTORED */}
        <FadeInWhenVisible delay={0.1}>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
              {/* First row of cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="flex flex-col items-center text-center p-6 bg-card text-card-foreground">
                  <BarChart className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">ATS-Optimized</h3>
                  <p className="text-muted-foreground">
                    Our resumes are specifically designed to pass through Applicant Tracking Systems, ensuring your
                    application gets seen by hiring managers.
                  </p>
                </Card>
                <Card className="flex flex-col items-center text-center p-6 bg-card text-card-foreground">
                  <Target className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">Industry Expertise</h3>
                  <p className="text-muted-foreground">
                    Our writers have experience across various industries and understand what recruiters are looking for
                    in your specific field.
                  </p>
                </Card>
                <Card className="flex flex-col items-center text-center p-6 bg-card text-card-foreground">
                  <Users className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">Personalized Approach</h3>
                  <p className="text-muted-foreground">
                    We tailor each resume to highlight your unique skills, experience, and career goals for maximum
                    impact.
                  </p>
                </Card>
              </div>
              {/* Second row of cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <Card className="flex flex-col items-center text-center p-6 bg-card text-card-foreground">
                  <Award className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">Satisfaction Guaranteed</h3>
                  <p className="text-muted-foreground">
                    We offer revisions until you're completely satisfied with your resume, ensuring you get exactly what
                    you need.
                  </p>
                </Card>
                <Card className="flex flex-col items-center text-center p-6 bg-card text-card-foreground">
                  <Zap className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">Fast Turnaround</h3>
                  <p className="text-muted-foreground">
                    Get your professionally written resume quickly, with standard delivery in 3-5 business days and rush
                    options available.
                  </p>
                </Card>
                <Card className="flex flex-col items-center text-center p-6 bg-card text-card-foreground">
                  <Clock className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">Time-Saving</h3>
                  <p className="text-muted-foreground">
                    Focus on your job search while we handle the time-consuming task of creating a professional, effective
                    resume.
                  </p>
                </Card>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Results Section */}
        <FadeInWhenVisible delay={0.1}>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">Proven Results</h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-lg lg:text-xl/relaxed">
                    Our clients see significant improvements in their job search success rates.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <CheckCircle className="h-10 w-10 text-blue-600" />
                  <p className="text-4xl font-bold text-blue-600">
                    <CountUp end={75} duration={2.5} suffix="%" />
                  </p>
                  <p className="text-muted-foreground">Increase in Interview Calls</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <TrendingUp className="h-10 w-10 text-blue-600" />
                  <p className="text-4xl font-bold text-blue-600">
                    <CountUp end={95} duration={2.5} suffix="%" />
                  </p>
                  <p className="text-muted-foreground">Client Satisfaction Rate</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Award className="h-10 w-10 text-blue-600" />
                  <p className="text-4xl font-bold text-blue-600">
                    <CountUp end={1000} duration={2.5} prefix="" suffix="+" />
                  </p>
                  <p className="text-muted-foreground">Successful Resumes Written</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <BarChart className="h-10 w-10 text-blue-600" />
                  <p className="text-4xl font-bold text-blue-600">
                    <CountUp end={40} duration={2.5} suffix="%" />
                  </p>
                  <p className="text-muted-foreground">Average Interview Rate Increase</p>
                </div>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Why Choose Us Section (Accordion) */}
        <FadeInWhenVisible delay={0.1}>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400">Why Us</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                    Expertise You Can Trust
                  </h2>
                  <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our team consists of certified professional resume writers with deep industry knowledge and a commitment to your success. We understand the nuances of modern hiring practices.
                  </p>
                  <Accordion type="single" collapsible className="w-full text-left border-t border-border">
                    <AccordionItem value="item-1" className="border-b border-border">
                      <AccordionTrigger className="text-foreground hover:no-underline">Certified Professionals</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Our writers hold industry-recognized certifications (like CPRW, NCRW) and stay updated on the latest resume trends and ATS requirements. We bring a high level of expertise to every project.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-b border-border">
                      <AccordionTrigger className="text-foreground hover:no-underline">Expert Industry Knowledge</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Our team includes writers with experience across various industries, including technology, healthcare, finance, marketing, and more. We understand the specific requirements and expectations in your field and can tailor your resume accordingly.
                      </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-3" className="border-b border-border">
                      <AccordionTrigger className="text-foreground hover:no-underline">ATS Optimization Expertise</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        We specialize in creating resumes that are optimized for Applicant Tracking Systems (ATS). We know how to incorporate the right keywords and formatting to ensure your resume gets past the initial screening and into the hands of a human recruiter.
                      </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-4" className="border-b border-border">
                      <AccordionTrigger className="text-foreground hover:no-underline">Highlight Your Achievements</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        We don't just list your job duties; we focus on showcasing your accomplishments and quantifying your results whenever possible. This approach demonstrates your value and impact to potential employers, making your resume stand out.
                      </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-5" className="border-b border-border">
                      <AccordionTrigger className="text-foreground hover:no-underline">Ongoing Support</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Our service doesn't end with the final resume delivery. We offer revision rounds to ensure your complete satisfaction and provide guidance on how to best utilize your new resume in your job search. We're invested in your success.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Our Process Section */}
        <FadeInWhenVisible delay={0.1}>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">Our Simple Process</h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Getting your professional resume is easy with our streamlined process
                  </p>
                </div>
              </div>
              <div className="max-w-3xl mx-auto">
                <div className="grid gap-10 items-start">
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-primary-foreground font-bold">1</div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-foreground">Consultation & Questionnaire</h3>
                        <p className="text-muted-foreground">
                          We start with a free consultation to understand your goals. Then, you'll fill out a detailed
                          questionnaire about your experience and achievements.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-primary-foreground font-bold">2</div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-foreground">Drafting & Collaboration</h3>
                        <p className="text-muted-foreground">
                          Your dedicated writer crafts the first draft, focusing on ATS optimization and highlighting your
                          strengths. We collaborate with you for feedback.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-primary-foreground font-bold">3</div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-foreground">Revisions & Finalization</h3>
                        <p className="text-muted-foreground">
                          We offer revision rounds based on your feedback to ensure you're completely satisfied with the
                          final product.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-primary-foreground font-bold">4</div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-foreground">Delivery</h3>
                        <p className="text-muted-foreground">
                          You receive your finalized resume in both Word (.docx) and PDF formats, ready for applications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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

