"use client";

import Link from "next/link"
// Remove Image import if no other images are used on the page
// import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileText, BarChart, Target, Users, Award, Zap, Clock, CheckCircle, TrendingUp, ArrowRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MobileNav } from "@/components/ui/mobile-nav"
import CountUp from 'react-countup'
import { FadeIn, FadeInWhenVisible } from "@/components/ui/fade-in"

export default function BenefitsPage() {
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
            <Button variant="default" className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700">Get Started</Button>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Use FadeIn */}
        <FadeIn yOffset={-20} duration={0.6}>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Why Choose Onuoha Systems
                  </h1>
                  <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Discover the benefits of working with our professional resume writing service
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Key Benefits Section - Use FadeInWhenVisible */}
        <FadeInWhenVisible delay={0.1}>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="flex flex-col items-center text-center p-6">
                  <BarChart className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">ATS-Optimized</h3>
                  <p className="text-gray-500">
                    Our resumes are specifically designed to pass through Applicant Tracking Systems, ensuring your
                    application gets seen by hiring managers.
                  </p>
                </Card>

                <Card className="flex flex-col items-center text-center p-6">
                  <Target className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Industry Expertise</h3>
                  <p className="text-gray-500">
                    Our writers have experience across various industries and understand what recruiters are looking for
                    in your specific field.
                  </p>
                </Card>

                <Card className="flex flex-col items-center text-center p-6">
                  <Users className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Personalized Approach</h3>
                  <p className="text-gray-500">
                    We tailor each resume to highlight your unique skills, experience, and career goals for maximum
                    impact.
                  </p>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <Card className="flex flex-col items-center text-center p-6">
                  <Award className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Satisfaction Guaranteed</h3>
                  <p className="text-gray-500">
                    We offer revisions until you're completely satisfied with your resume, ensuring you get exactly what
                    you need.
                  </p>
                </Card>

                <Card className="flex flex-col items-center text-center p-6">
                  <Zap className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
                  <p className="text-gray-500">
                    Get your professionally written resume quickly, with standard delivery in 3-5 business days and rush
                    options available.
                  </p>
                </Card>

                <Card className="flex flex-col items-center text-center p-6">
                  <Clock className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Time-Saving</h3>
                  <p className="text-gray-500">
                    Focus on your job search while we handle the time-consuming task of creating a professional, effective
                    resume.
                  </p>
                </Card>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Detailed Benefits Section - Centered Accordion - Use FadeInWhenVisible */}
        <FadeInWhenVisible delay={0.1}>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Onuoha Systems Advantage</h2>
                  <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Detailed benefits of working with our professional resume service
                  </p>
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Higher Interview Rate</AccordionTrigger>
                    <AccordionContent>
                      Our clients report a significant increase in interview invitations after using our resume
                      services. By highlighting your achievements and optimizing for ATS systems, your resume stands out
                      to employers and increases your chances of getting called for interviews.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Expert Industry Knowledge</AccordionTrigger>
                    <AccordionContent>
                      Our team includes writers with experience across various industries, including technology,
                      healthcare, finance, marketing, and more. We understand the specific requirements and expectations
                      in your field and can tailor your resume accordingly.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>ATS Optimization Expertise</AccordionTrigger>
                    <AccordionContent>
                      We stay up-to-date with the latest Applicant Tracking System algorithms and requirements. Our
                      resumes are designed to pass through these systems while still being engaging and readable for
                      human recruiters.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Highlight Your Achievements</AccordionTrigger>
                    <AccordionContent>
                      Many job seekers struggle to effectively communicate their accomplishments. Our writers are
                      skilled at identifying and showcasing your achievements in a way that demonstrates your value to
                      potential employers.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>Ongoing Support</AccordionTrigger>
                    <AccordionContent>
                      Our relationship doesn't end when we deliver your resume. We offer ongoing support and advice to
                      help you navigate your job search and make the most of your new resume.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Statistics Section - Use FadeInWhenVisible */}
        <FadeInWhenVisible delay={0.1}>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Impact</h2>
                  <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    The numbers speak for themselves
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-center space-y-2">
                  <BarChart className="h-10 w-10 text-blue-600" />
                  <div className="text-4xl font-bold">
                    <CountUp end={85} duration={2.5} enableScrollSpy scrollSpyOnce suffix="%" />
                  </div>
                  <p className="text-center text-gray-500">of our clients receive interview invitations within 30 days</p>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <Award className="h-10 w-10 text-blue-600" />
                  <div className="text-4xl font-bold">
                    <CountUp end={95} duration={2.5} enableScrollSpy scrollSpyOnce suffix="%" />
                  </div>
                  <p className="text-center text-gray-500">client satisfaction rate based on feedback</p>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <FileText className="h-10 w-10 text-blue-600" />
                  <div className="text-4xl font-bold">
                    <CountUp end={1000} duration={2.5} enableScrollSpy scrollSpyOnce prefix="" suffix="+" />
                  </div>
                  <p className="text-center text-gray-500">successful resumes written for clients across industries</p>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <TrendingUp className="h-10 w-10 text-blue-600" />
                  <div className="text-4xl font-bold">
                    <CountUp end={40} duration={2.5} enableScrollSpy scrollSpyOnce suffix="%" />
                  </div>
                  <p className="text-center text-gray-500">average increase in interview rate after using our services</p>
                </div>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* CTA Section - Use FadeInWhenVisible */}
        <FadeInWhenVisible delay={0.1}>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Experience These Benefits?
                  </h2>
                  <p className="max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Book your free consultation today and take the first step toward your dream job
                  </p>
                </div>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
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

        {/* Why Choose Us Section - Centered Content - Use FadeInWhenVisible */}
        <FadeInWhenVisible delay={0.1}>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
            <div className="container px-4 md:px-6">
              {/* Removed grid layout, added max-width and centering */}
              <div className="max-w-3xl mx-auto text-center"> {/* Center text within this block */}
                <div className="space-y-4">
                  {/* The "Why Us" badge should remain inline, text-center on parent handles overall centering */}
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Why Us</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Expertise You Can Trust
                  </h2>
                  {/* Centered paragraph */}
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our team consists of certified professional resume writers (CPRWs) with years of experience across
                    various industries. We stay updated on the latest hiring trends and ATS technologies to ensure your
                    resume gets noticed.
                  </p>
                  {/* Accordion remains, text inside will be left-aligned by default which is fine */}
                  <Accordion type="single" collapsible className="w-full text-left"> {/* Ensure accordion text is left-aligned */}
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Certified Professionals</AccordionTrigger>
                      <AccordionContent>
                        Our writers hold industry-recognized certifications like CPRW, ensuring high standards.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Industry Specialization</AccordionTrigger>
                      <AccordionContent>
                        We match you with writers experienced in your specific field for targeted expertise.
                      </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-3">
                      <AccordionTrigger>ATS Knowledge</AccordionTrigger>
                      <AccordionContent>
                        Deep understanding of how Applicant Tracking Systems work to optimize your resume's visibility.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Our Process Section - Centered Steps & Fixed Circles - Use FadeInWhenVisible */}
        <FadeInWhenVisible delay={0.1}>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Simple Process</h2>
                  <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Getting your professional resume is easy with our streamlined process
                  </p>
                </div>
              </div>
              <div className="max-w-3xl mx-auto">
                <div className="grid gap-10 items-start">
                  <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="flex items-start gap-4">
                      {/* Consistent Circle Styling */}
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">1</div>
                      <div className="text-left"> {/* Ensure text aligns left */}
                        <h3 className="text-xl font-bold">Consultation & Questionnaire</h3>
                        <p className="text-gray-500">
                          We start with a free consultation to understand your goals. Then, you'll fill out a detailed
                          questionnaire about your experience and achievements.
                        </p>
                      </div>
                    </div>
                    {/* Step 2 */}
                    <div className="flex items-start gap-4">
                       {/* Consistent Circle Styling */}
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">2</div>
                      <div className="text-left"> {/* Ensure text aligns left */}
                        <h3 className="text-xl font-bold">Drafting & Collaboration</h3>
                        <p className="text-gray-500">
                          Your dedicated writer crafts the first draft, focusing on ATS optimization and highlighting your
                          strengths. We collaborate with you for feedback.
                        </p>
                      </div>
                    </div>
                    {/* Step 3 */}
                    <div className="flex items-start gap-4">
                       {/* Consistent Circle Styling */}
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">3</div>
                      <div className="text-left"> {/* Ensure text aligns left */}
                        <h3 className="text-xl font-bold">Revisions & Finalization</h3>
                        <p className="text-gray-500">
                          We offer revision rounds based on your feedback to ensure you're completely satisfied with the
                          final product.
                        </p>
                      </div>
                    </div>
                    {/* Step 4 */}
                    <div className="flex items-start gap-4">
                       {/* Consistent Circle Styling */}
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">4</div>
                      <div className="text-left"> {/* Ensure text aligns left */}
                        <h3 className="text-xl font-bold">Delivery</h3>
                        <p className="text-gray-500">
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

      {/* Footer - White background and dark text */}
      <footer className="w-full py-6 bg-white text-black border-t border-gray-200"> {/* White bg, black text, light border */}
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                {/* Adjust icon color if needed, primary might be light on dark theme, but okay here */}
                <FileText className="h-6 w-6 text-blue-600" /> {/* Or use text-primary if defined well */}
                <span className="text-xl font-bold text-black">Onuoha Systems</span> {/* Black text */}
              </div>
              <p className="text-gray-600">Professional resume writing services to help you land your dream job.</p> {/* Dark gray text */}
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-black">Quick Links</h3> {/* Black heading */}
              <ul className="space-y-2">
                {/* Dark gray links, hover to black */}
                <li><Link href="/" className="text-gray-600 hover:text-black transition-colors">Home</Link></li> {/* Added Home link */}
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

