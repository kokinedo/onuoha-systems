"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { MobileNav } from "@/components/ui/mobile-nav"
import { FadeIn, FadeInWhenVisible } from "@/components/ui/fade-in"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function ContactPage() {
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
            <Link href="/testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Testimonials
            </Link>
            <Link href="/contact" className="text-sm font-medium text-blue-600 transition-colors">
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
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-foreground">Contact Us</h1>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We're here to help with your resume and career development needs
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Contact Information Section - Use FadeInWhenVisible */}
        <FadeInWhenVisible delay={0.1}>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 lg:grid-cols-2">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Get in Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    Have questions about our services or want to discuss your specific needs? Reach out using the contact form or book a free consultation.
                  </p>

                  <Button size="lg" variant="default" className="bg-blue-600 hover:bg-blue-700" asChild>
                    <Link
                      href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3aOfGZfeUdsIhAt7ilBvhGtzzo6hKVsgmUfDKqrLp895XoWiCTH-iy_ADrFdO2FL8HAphywKGP"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Your Free Consultation
                    </Link>
                  </Button>
                </div>

                <div>
                  <Card className="bg-card text-card-foreground">
                    <CardHeader>
                      <CardTitle className="text-card-foreground">Send Us a Message</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        Fill out the form below and we'll get back to you as soon as possible.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        className="space-y-6"
                      >
                        <input type="hidden" name="form-name" value="contact" />
                        <p className="hidden">
                          <label>
                            Don't fill this out if you're human: <input name="bot-field" />
                          </label>
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-foreground">Name</Label>
                            <Input id="name" name="name" placeholder="Enter your name" required className="bg-background" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-foreground">Email</Label>
                            <Input id="email" name="email" type="email" placeholder="Enter your email" required className="bg-background" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone (optional)</Label>
                          <Input id="phone" placeholder="Enter your phone number" />
                        </div>

                        <div className="space-y-2">
                          <Label className="text-foreground">Service Interested In</Label>
                          <RadioGroup name="service" defaultValue="none" className="flex flex-wrap gap-4 text-foreground">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="ats-resume" id="ats-resume" />
                              <Label htmlFor="ats-resume">ATS Resume Writing</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="review" id="review" />
                              <Label htmlFor="review">Resume Review</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="coaching" id="coaching" />
                              <Label htmlFor="coaching">Career Coaching</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="other" id="other" />
                              <Label htmlFor="other">Other</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-foreground">Subject</Label>
                          <Input id="subject" name="subject" placeholder="Enter subject" required className="bg-background" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-foreground">Message</Label>
                          <Textarea id="message" name="message" placeholder="Enter your message" required className="bg-background" />
                        </div>

                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-primary-foreground">Send Message</Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* FAQ Section - Use FadeInWhenVisible */}
        <FadeInWhenVisible delay={0.1}>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">Frequently Asked Questions</h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-lg lg:text-xl/relaxed">
                    Find answers to common questions about our services
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card className="bg-card text-card-foreground">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">What is the turnaround time?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our standard turnaround time is 5-7 business days after receiving all necessary information from
                      you. Expedited services are available for an additional fee.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card text-card-foreground">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">What information do I need to provide?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      You'll need to provide your current resume (if you have one), work history, education, skills, and
                      any specific achievements or results from your previous roles. We'll guide you through the process
                      during the consultation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card text-card-foreground">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">How many revisions are included?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      All of our resume writing packages include two rounds of revisions at no additional cost. Additional
                      revisions can be purchased if needed.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card text-card-foreground">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Do you offer refunds?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We stand behind our work and offer a satisfaction guarantee. If you're not satisfied after the
                      revision process, we'll work with you to make it right. Please see our terms of service for full
                      details on our refund policy.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card text-card-foreground">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">What format will I receive my resume in?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      You'll receive your resume in both Word and PDF formats. The Word version allows you to make future
                      updates, while the PDF ensures your formatting remains consistent when submitting applications.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card text-card-foreground">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Can you help with LinkedIn profiles too?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes! We offer LinkedIn profile optimization services that can be added to any resume package. We'll
                      help ensure your LinkedIn profile complements your resume and maximizes your visibility to
                      recruiters.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Don't see your question answered here? Contact us directly and we'll be happy to help.
                </p>
                <Button variant="outline" className="flex items-center gap-2 mx-auto border-blue-600 text-blue-600 hover:bg-blue-100 hover:text-blue-700" asChild>
                  <Link href="mailto:info@onuohasystems.com">
                    Email Us Your Question
                    <ArrowRight className="h-4 w-4 text-blue-600" />
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

