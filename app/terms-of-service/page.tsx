import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function TermsOfServicePage() {
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
                  Terms of Service
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Last updated:{" "}
                  {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms of Service Content */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="prose prose-blue max-w-none">
              <h2>Agreement to Terms</h2>
              <p>
                These Terms of Service constitute a legally binding agreement made between you and Onuoha Systems ("we,"
                "us," or "our"), concerning your access to and use of our website and services. You agree that by
                accessing the website and/or services, you have read, understood, and agree to be bound by all of these
                Terms of Service.
              </p>
              <p>
                IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE
                WEBSITE AND SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
              </p>

              <h2>Services</h2>
              <p>
                Onuoha Systems provides resume writing, resume review, and career coaching services. Our services are
                intended to assist clients in developing professional documents and strategies for their job search and
                career development.
              </p>

              <h2>Payment and Refunds</h2>
              <p>
                Payment for services is required in advance unless otherwise specified in writing. We accept payment via
                credit card, debit card, and other payment methods as indicated on our website.
              </p>
              <p>
                We offer a satisfaction guarantee for our resume writing services. If you are not satisfied with the
                initial draft of your resume, we will revise it based on your feedback. You are entitled to two rounds
                of revisions at no additional cost, provided that:
              </p>
              <ul>
                <li>Revision requests are submitted within 14 days of receiving the initial draft</li>
                <li>Revision requests are reasonable and within the scope of the original service purchased</li>
                <li>Revision requests do not substantially change the original information provided to us</li>
              </ul>
              <p>
                If after two rounds of revisions you are still not satisfied, we will evaluate your case individually
                and may offer additional revisions, a partial refund, or a full refund at our discretion.
              </p>
              <p>
                Refunds for career coaching services are available if requested within 24 hours of the scheduled session
                and before the session has taken place. No refunds will be issued after a coaching session has been
                conducted.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                The content, organization, graphics, design, compilation, and other matters related to the website are
                protected under applicable copyrights, trademarks, and other proprietary rights. Copying,
                redistribution, use, or publication by you of any such matters or any part of the website is strictly
                prohibited without our express prior written permission.
              </p>
              <p>
                Upon full payment, you own the final resume, cover letter, or other documents created specifically for
                you. However, we retain the right to use these documents as examples of our work in our portfolio (with
                all personal information removed) unless you specifically request otherwise in writing.
              </p>

              <h2>User Representations</h2>
              <p>By using the website and services, you represent and warrant that:</p>
              <ul>
                <li>All information you provide to us is true, accurate, current, and complete</li>
                <li>You have the legal capacity to enter into these Terms of Service</li>
                <li>You will not access the website through automated or non-human means</li>
                <li>You will not use the website for any illegal or unauthorized purpose</li>
                <li>Your use of the website will not violate any applicable law or regulation</li>
              </ul>

              <h2>Limitation of Liability</h2>
              <p>
                IN NO EVENT SHALL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY
                DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
                PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE WEBSITE OR SERVICES,
                EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>

              <h2>Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of
                our respective officers, agents, partners, and employees, from and against any loss, damage, liability,
                claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or
                arising out of your use of the website or services, your breach of these Terms of Service, or your
                violation of any law or the rights of a third party.
              </p>

              <h2>Term and Termination</h2>
              <p>
                These Terms of Service shall remain in full force and effect while you use the website or services. We
                may terminate your access to the website and services, without cause or notice, which may result in the
                forfeiture and destruction of all information associated with your account.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms of Service and your use of the website and services are governed by and construed in
                accordance with the laws of the State of New York, without regard to its conflict of law principles.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to change, modify, or remove the contents of the website at any time or for any
                reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or
                part of the services without notice at any time.
              </p>

              <h2>Contact Us</h2>
              <p>If you have any questions about these Terms of Service, please contact us at:</p>
              <p>
                Email: info@onuohasystems.com
                <br />
                Phone: (123) 456-7890
                <br />
                Address: 123 Resume Street, Suite 101, New York, NY 10001
              </p>
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

