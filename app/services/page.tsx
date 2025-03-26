import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Award, CheckCircle, Clock, Zap } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServicesPage() {
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
            <Link href="/services" className="text-sm font-medium text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="/benefits" className="text-sm font-medium hover:text-blue-600 transition-colors">
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
                  Our Resume Services
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Professional resume writing services tailored to your career goals and optimized for ATS systems
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Tabs */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="ats" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12">
                <TabsTrigger value="ats">ATS Resume Writing</TabsTrigger>
                <TabsTrigger value="review">Resume Review</TabsTrigger>
                <TabsTrigger value="coaching">Career Coaching</TabsTrigger>
              </TabsList>
              <TabsContent value="ats" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">ATS Resume Writing</h2>
                    <p className="text-gray-500 mb-6">
                      Our ATS Resume Writing service is designed to help your resume pass through Applicant Tracking
                      Systems and get noticed by hiring managers. We create custom, keyword-optimized resumes that
                      highlight your skills and experience.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p>Keyword optimization for your target roles</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p>ATS-friendly formatting and layout</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p>Achievement-focused content that stands out</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p>Tailored to your industry and career level</p>
                      </div>
                    </div>
                    <Button className="mt-6 bg-blue-600 hover:bg-blue-700" asChild>
                      <Link
                        href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3aOfGZfeUdsIhAt7ilBvhGtzzo6hKVsgmUfDKqrLp895XoWiCTH-iy_ADrFdO2FL8HAphywKGP"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Started
                      </Link>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="ATS Resume Writing"
                      width={400}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
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

              <TabsContent value="review" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Resume Review</h2>
                    <p className="text-gray-500 mb-6">
                      Our Resume Review service provides a comprehensive analysis of your existing resume. We'll
                      identify strengths, weaknesses, and opportunities for improvement to help you make your resume
                      more effective.
                    </p>
                    <div className="space-y-4">
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
                    <Button className="mt-6 bg-blue-600 hover:bg-blue-700" asChild>
                      <Link
                        href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3aOfGZfeUdsIhAt7ilBvhGtzzo6hKVsgmUfDKqrLp895XoWiCTH-iy_ADrFdO2FL8HAphywKGP"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Started
                      </Link>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Resume Review"
                      width={400}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <Card>
                    <CardHeader>
                      <Clock className="h-8 w-8 text-blue-600 mb-2" />
                      <CardTitle>Our Process</CardTitle>
                      <CardDescription>How we review your resume</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-2 list-decimal list-inside">
                        <li>Submit your current resume</li>
                        <li>Brief questionnaire about your goals</li>
                        <li>Comprehensive review by our experts</li>
                        <li>Detailed feedback document creation</li>
                        <li>Optional follow-up consultation</li>
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
                          <span>Detailed written feedback</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>ATS compatibility score</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Keyword optimization suggestions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>30-minute consultation call</span>
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
                        <div className="text-2xl font-bold">$99</div>
                        <p className="text-sm text-gray-500">Basic Resume Review</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">$149</div>
                        <p className="text-sm text-gray-500">Comprehensive Review with Consultation</p>
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

              <TabsContent value="coaching" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Career Coaching</h2>
                    <p className="text-gray-500 mb-6">
                      Our Career Coaching service provides personalized guidance to help you navigate your job search
                      and career development. We'll work with you to develop strategies for achieving your career goals.
                    </p>
                    <div className="space-y-4">
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
                    <Button className="mt-6 bg-blue-600 hover:bg-blue-700" asChild>
                      <Link
                        href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3aOfGZfeUdsIhAt7ilBvhGtzzo6hKVsgmUfDKqrLp895XoWiCTH-iy_ADrFdO2FL8HAphywKGP"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Started
                      </Link>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Career Coaching"
                      width={400}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <Card>
                    <CardHeader>
                      <Clock className="h-8 w-8 text-blue-600 mb-2" />
                      <CardTitle>Our Process</CardTitle>
                      <CardDescription>How our coaching works</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-2 list-decimal list-inside">
                        <li>Initial assessment of your needs</li>
                        <li>Development of personalized plan</li>
                        <li>Regular coaching sessions</li>
                        <li>Practical exercises and homework</li>
                        <li>Ongoing support and accountability</li>
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
                          <span>Personalized coaching sessions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Career development resources</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Mock interview practice</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Email support between sessions</span>
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
                        <div className="text-2xl font-bold">$149</div>
                        <p className="text-sm text-gray-500">Single Coaching Session (1 hour)</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">$399</div>
                        <p className="text-sm text-gray-500">3-Session Package</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">$699</div>
                        <p className="text-sm text-gray-500">6-Session Package</p>
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
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
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

