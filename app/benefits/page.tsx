import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileText, BarChart, Target, Users, Award, Zap, Clock } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function BenefitsPage() {
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

        {/* Key Benefits Section */}
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

        {/* Detailed Benefits Section */}
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

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Professional resume writing"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover mx-auto"
                />
              </div>

              <div>
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
          </div>
        </section>

        {/* Statistics Section */}
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
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
                <p className="text-center text-gray-500">of our clients receive interview invitations within 30 days</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <p className="text-center text-gray-500">client satisfaction rate based on feedback</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                <p className="text-center text-gray-500">successful resumes written for clients across industries</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
                <p className="text-center text-gray-500">average increase in interview rate after using our services</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
              <Button className="bg-white text-blue-600 hover:bg-gray-100" asChild>
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

