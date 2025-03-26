import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">Onuoha Systems</span>
            </Link>
          </div>
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
          <Button className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3aOfGZfeUdsIhAt7ilBvhGtzzo6hKVsgmUfDKqrLp895XoWiCTH-iy_ADrFdO2FL8HAphywKGP"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Contact Us</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're here to help with your resume and career development needs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-500 mb-8">
                  Have questions about our services or want to discuss your specific needs? Reach out to us using any of
                  the methods below or fill out the contact form.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-500">info@onuohasystems.com</p>
                      <p className="text-sm text-gray-400 mt-1">We respond to all emails within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-gray-500">(123) 456-7890</p>
                      <p className="text-sm text-gray-400 mt-1">Monday to Friday, 9am to 5pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Location</h3>
                      <p className="text-gray-500">123 Resume Street, Suite 101</p>
                      <p className="text-gray-500">New York, NY 10001</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Business Hours</h3>
                      <p className="text-gray-500">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                      <p className="text-gray-500">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-bold mb-4">Book a Consultation</h3>
                  <p className="text-gray-500 mb-4">
                    The fastest way to get started is to book a free consultation directly on our calendar.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                    <Link
                      href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3aOfGZfeUdsIhAt7ilBvhGtzzo6hKVsgmUfDKqrLp895XoWiCTH-iy_ADrFdO2FL8HAphywKGP"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Schedule Consultation
                    </Link>
                  </Button>
                </div>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" placeholder="Enter your first name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" placeholder="Enter your last name" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (optional)</Label>
                        <Input id="phone" placeholder="Enter your phone number" />
                      </div>

                      <div className="space-y-2">
                        <Label>I'm interested in:</Label>
                        <RadioGroup defaultValue="ats">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="ats" id="ats" />
                            <Label htmlFor="ats">ATS Resume Writing</Label>
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
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Tell us about your needs" className="min-h-[120px]" />
                      </div>

                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our services
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>How long does it take to complete a resume?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Our standard turnaround time is 3-5 business days from the initial consultation. We also offer rush
                    services for an additional fee if you need your resume sooner.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What information do I need to provide?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    You'll need to provide your current resume (if you have one), work history, education, skills, and
                    any specific achievements or results from your previous roles. We'll guide you through the process
                    during the consultation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How many revisions are included?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    All of our resume writing packages include two rounds of revisions at no additional cost. Additional
                    revisions can be purchased if needed.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Do you offer refunds?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    We stand behind our work and offer a satisfaction guarantee. If you're not satisfied after the
                    revision process, we'll work with you to make it right. Please see our terms of service for full
                    details on our refund policy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What format will I receive my resume in?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    You'll receive your resume in both Word and PDF formats. The Word version allows you to make future
                    updates, while the PDF ensures your formatting remains consistent when submitting applications.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can you help with LinkedIn profiles too?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Yes! We offer LinkedIn profile optimization services that can be added to any resume package. We'll
                    help ensure your LinkedIn profile complements your resume and maximizes your visibility to
                    recruiters.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-500 mb-4">
                Don't see your question answered here? Contact us directly and we'll be happy to help.
              </p>
              <Button variant="outline" className="flex items-center gap-2 mx-auto" asChild>
                <Link href="mailto:info@onuohasystems.com">
                  Email Us Your Question
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">Onuoha Systems</span>
              </div>
              <p className="text-gray-400">Professional resume writing services to help you land your dream job.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/benefits" className="text-gray-400 hover:text-white transition-colors">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-6 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Onuoha Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

