import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Star, Quote } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TestimonialsPage() {
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
            <Link href="/testimonials" className="text-sm font-medium text-blue-600 transition-colors">
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
                  Client Success Stories
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our clients have to say about their experience with Onuoha Systems
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Success Stories</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Real results from real clients
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="bg-blue-600 text-white p-8 flex flex-col justify-center">
                      <Quote className="h-12 w-12 text-blue-300 mb-4" />
                      <p className="text-lg italic mb-6">
                        "After struggling for months to get interviews, I decided to try Onuoha Systems. Within two
                        weeks of using my new resume, I received three interview requests and ultimately landed my dream
                        job at a Fortune 500 company. The investment was absolutely worth it!"
                      </p>
                      <div>
                        <p className="font-bold text-xl">Raj Patel</p>
                        <p className="text-blue-200">Senior Project Manager</p>
                        <div className="flex mt-2">
                          <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                          <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                          <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                          <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                          <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                        </div>
                      </div>
                    </div>
                    <div className="p-8 flex items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                        <p className="text-gray-500 mb-6">
                          Raj had 10+ years of experience but was struggling to showcase his achievements effectively.
                          His resume wasn't getting past ATS systems, and he wasn't receiving interview invitations
                          despite being well-qualified.
                        </p>
                        <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
                        <p className="text-gray-500 mb-6">
                          We created an ATS-optimized resume that highlighted his project management achievements,
                          quantified his results, and showcased his leadership skills. We also provided guidance on
                          tailoring his resume for specific job applications.
                        </p>
                        <h3 className="text-2xl font-bold mb-4">The Result</h3>
                        <p className="text-gray-500">
                          Three interview requests within two weeks, resulting in a job offer from his target company
                          with a 15% salary increase from his previous position.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="p-8 flex items-center order-2 md:order-1">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                        <p className="text-gray-500 mb-6">
                          Mei was making a career transition from teaching to corporate training and development. Her
                          resume was education-focused and didn't translate her skills to the corporate environment.
                        </p>
                        <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
                        <p className="text-gray-500 mb-6">
                          We completely restructured her resume to highlight transferable skills, created achievement
                          statements that would resonate with corporate recruiters, and optimized for training and
                          development keywords.
                        </p>
                        <h3 className="text-2xl font-bold mb-4">The Result</h3>
                        <p className="text-gray-500">
                          Mei secured a position as a Training Specialist at a tech company within one month,
                          successfully making her career transition with a competitive salary.
                        </p>
                      </div>
                    </div>
                    <div className="bg-blue-600 text-white p-8 flex flex-col justify-center order-1 md:order-2">
                      <Quote className="h-12 w-12 text-blue-300 mb-4" />
                      <p className="text-lg italic mb-6">
                        "Changing careers seemed impossible until I worked with Onuoha Systems. They helped me translate
                        my teaching experience into corporate language, and their career coaching gave me the confidence
                        to pursue positions I wouldn't have considered before. I'm now thriving in my new role!"
                      </p>
                      <div>
                        <p className="font-bold text-xl">Mei Zhang</p>
                        <p className="text-blue-200">Training Specialist</p>
                        <div className="flex mt-2">
                          <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                          <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                          <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                          <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                          <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials by Service */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Client Testimonials by Service</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what clients say about our specific services
                </p>
              </div>
            </div>

            <Tabs defaultValue="ats" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12">
                <TabsTrigger value="ats">ATS Resume Writing</TabsTrigger>
                <TabsTrigger value="review">Resume Review</TabsTrigger>
                <TabsTrigger value="coaching">Career Coaching</TabsTrigger>
              </TabsList>

              <TabsContent value="ats" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex">
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      </div>
                      <p className="italic text-gray-500">
                        "After using Onuoha Systems' resume service, I started getting calls for interviews within days.
                        Their ATS optimization really works!"
                      </p>
                      <div>
                        <p className="font-bold">Aisha Patel</p>
                        <p className="text-sm text-gray-500">Marketing Professional</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex">
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      </div>
                      <p className="italic text-gray-500">
                        "The keyword optimization was incredible. I applied to the same company that had rejected me
                        before, and this time I got an interview and eventually the job!"
                      </p>
                      <div>
                        <p className="font-bold">Jamal Washington</p>
                        <p className="text-sm text-gray-500">Software Developer</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex">
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      </div>
                      <p className="italic text-gray-500">
                        "As a recent graduate, I was struggling to showcase my limited experience. Onuoha Systems helped
                        me create a resume that highlighted my potential and got me noticed."
                      </p>
                      <div>
                        <p className="font-bold">Sofia Rodriguez</p>
                        <p className="text-sm text-gray-500">Business Analyst</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="review" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex">
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      </div>
                      <p className="italic text-gray-500">
                        "The resume review service was eye-opening. I had no idea how many improvements could be made to
                        my existing resume. The detailed feedback was invaluable."
                      </p>
                      <div>
                        <p className="font-bold">Kwame Osei</p>
                        <p className="text-sm text-gray-500">Financial Analyst</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex">
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      </div>
                      <p className="italic text-gray-500">
                        "I was hesitant to pay for a resume review, but it was worth every penny. The suggestions were
                        practical and easy to implement, and they made a huge difference."
                      </p>
                      <div>
                        <p className="font-bold">Leila Nguyen</p>
                        <p className="text-sm text-gray-500">HR Manager</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex">
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      </div>
                      <p className="italic text-gray-500">
                        "The ATS compatibility assessment was a game-changer. I had no idea my resume was being filtered
                        out before even reaching human eyes."
                      </p>
                      <div>
                        <p className="font-bold">Diego Morales</p>
                        <p className="text-sm text-gray-500">Sales Executive</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="coaching" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex">
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      </div>
                      <p className="italic text-gray-500">
                        "The career coaching combined with the resume service gave me the confidence and tools I needed
                        to make a successful career change."
                      </p>
                      <div>
                        <p className="font-bold">Zainab Okonkwo</p>
                        <p className="text-sm text-gray-500">Finance Professional</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex">
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      </div>
                      <p className="italic text-gray-500">
                        "The interview preparation coaching was exceptional. I felt so much more confident and prepared,
                        and it showed in my interviews."
                      </p>
                      <div>
                        <p className="font-bold">Soo-Jin Park</p>
                        <p className="text-sm text-gray-500">Marketing Director</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex">
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      </div>
                      <p className="italic text-gray-500">
                        "The salary negotiation coaching alone paid for the entire service. I secured a 20% higher offer
                        than I would have accepted otherwise."
                      </p>
                      <div>
                        <p className="font-bold">Omar Khalid</p>
                        <p className="text-sm text-gray-500">IT Project Manager</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Video Testimonials section removed */}

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Join Our Success Stories?
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

