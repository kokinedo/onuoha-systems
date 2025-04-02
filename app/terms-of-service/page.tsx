"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import { MobileNav } from "@/components/ui/mobile-nav"
import { FadeIn, FadeInWhenVisible } from "@/components/ui/fade-in"

export default function TermsOfServicePage() {
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
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Terms of Service
                  </h1>
                  <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Please read our terms and conditions carefully
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Terms Content Section - Use FadeInWhenVisible */}
        <FadeInWhenVisible delay={0.1}>
          <section className="w-full py-12 md:py-20 lg:py-28 bg-background">
            <div className="container px-4 md:px-6">
              <div className="prose prose-gray max-w-4xl mx-auto dark:prose-invert">
                <h2>1. Introduction</h2>
                <p>
                  Welcome to Onuoha Systems. These terms and conditions outline the rules and regulations for the use of
                  Onuoha Systems's Website, located at [Your Website URL].
                </p>
                <p>
                  By accessing this website we assume you accept these terms and conditions. Do not continue to use Onuoha
                  Systems if you do not agree to take all of the terms and conditions stated on this page.
                </p>

                <h2>2. Services</h2>
                <p>
                  Onuoha Systems provides professional resume writing, review, and career coaching services. The specifics
                  of the services, including deliverables and timelines, will be agreed upon before the commencement of
                  any work, typically outlined in a service agreement or during the consultation process.
                </p>

                <h2>3. Contact Information</h2>
                <p>
                  If you have any questions about these Terms, please contact us via the methods available on our Contact page.
                </p>

                <p>Last Updated: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>
      </main>

      {/* Footer - White background and dark text */}
      <footer className="w-full py-6 bg-white text-black border-t border-gray-200">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-black">Onuoha Systems</span>
              </div>
              <p className="text-gray-600">Professional resume writing services to help you land your dream job.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-black">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-600 hover:text-black transition-colors">Home</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-black transition-colors">Services</Link></li>
                <li><Link href="/benefits" className="text-gray-600 hover:text-black transition-colors">Benefits</Link></li>
                <li><Link href="/testimonials" className="text-gray-600 hover:text-black transition-colors">Testimonials</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-black transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-black">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy-policy" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-gray-600 hover:text-black transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-6 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Onuoha Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

