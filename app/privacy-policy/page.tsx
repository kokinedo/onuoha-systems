"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import { MobileNav } from "@/components/ui/mobile-nav"
import { FadeIn, FadeInWhenVisible } from "@/components/ui/fade-in"

export default function PrivacyPolicyPage() {
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
                    Privacy Policy
                  </h1>
                  <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Last updated:{" "}
                    {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Privacy Policy Content - Use FadeInWhenVisible */}
        <FadeInWhenVisible delay={0.1}>
          <section className="w-full py-12 md:py-20 lg:py-28 bg-background">
            <div className="container px-4 md:px-6">
              <div className="prose prose-gray max-w-4xl mx-auto dark:prose-invert">
                <h2>Introduction</h2>
                <p>
                  Onuoha Systems ("we," "our," or "us") respects your privacy and is committed to protecting it through
                  our compliance with this policy. This Privacy Policy describes the types of information we may collect
                  from you or that you may provide when you visit our website and our practices for collecting, using,
                  maintaining, protecting, and disclosing that information.
                </p>

                <h2>Information We Collect</h2>
                <p>We collect several types of information from and about users of our website, including information:</p>
                <ul>
                  <li>
                    By which you may be personally identified, such as name, email address, telephone number, or any other
                    identifier by which you may be contacted online or offline ("personal information");
                  </li>
                  <li>
                    That is about you but individually does not identify you, such as job title, industry, or professional
                    experience; and/or
                  </li>
                  <li>About your internet connection, the equipment you use to access our website, and usage details.</li>
                </ul>

                <h2>How We Collect Your Information</h2>
                <p>We collect this information:</p>
                <ul>
                  <li>
                    Directly from you when you provide it to us, such as when you fill out forms on our website, subscribe
                    to our newsletter, or correspond with us by email.
                  </li>
                  <li>
                    Automatically as you navigate through the site, which may include usage details, IP addresses, and
                    information collected through cookies and other tracking technologies.
                  </li>
                </ul>

                <h2>How We Use Your Information</h2>
                <p>
                  We use information that we collect about you or that you provide to us, including any personal
                  information:
                </p>
                <ul>
                  <li>To present our website and its contents to you.</li>
                  <li>To provide you with information, products, or services that you request from us.</li>
                  <li>To fulfill any other purpose for which you provide it.</li>
                  <li>
                    To provide you with notices about your account/subscription, including expiration and renewal notices.
                  </li>
                  <li>
                    To carry out our obligations and enforce our rights arising from any contracts entered into between
                    you and us, including for billing and collection.
                  </li>
                  <li>
                    To notify you about changes to our website or any products or services we offer or provide through it.
                  </li>
                  <li>In any other way we may describe when you provide the information.</li>
                  <li>For any other purpose with your consent.</li>
                </ul>

                <h2>Disclosure of Your Information</h2>
                <p>
                  We may disclose aggregated information about our users, and information that does not identify any
                  individual, without restriction. We may disclose personal information that we collect or you provide as
                  described in this privacy policy:
                </p>
                <ul>
                  <li>To our subsidiaries and affiliates.</li>
                  <li>To contractors, service providers, and other third parties we use to support our business.</li>
                  <li>
                    To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization,
                    dissolution, or other sale or transfer of some or all of our assets.
                  </li>
                  <li>To fulfill the purpose for which you provide it.</li>
                  <li>For any other purpose disclosed by us when you provide the information.</li>
                  <li>With your consent.</li>
                </ul>

                <h2>Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to track the activity on our website and hold certain
                  information. Cookies are files with small amount of data which may include an anonymous unique
                  identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                  sent.
                </p>

                <h2>Data Security</h2>
                <p>
                  We have implemented measures designed to secure your personal information from accidental loss and from
                  unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on
                  secure servers behind firewalls.
                </p>
                <p>
                  The safety and security of your information also depends on you. Where we have given you (or where you
                  have chosen) a password for access to certain parts of our website, you are responsible for keeping this
                  password confidential. We ask you not to share your password with anyone.
                </p>

                <h2>Changes to Our Privacy Policy</h2>
                <p>
                  It is our policy to post any changes we make to our privacy policy on this page. If we make material
                  changes to how we treat our users' personal information, we will notify you through a notice on the
                  website home page. The date the privacy policy was last revised is identified at the top of the page.
                </p>

                <h2>Contact Information</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us via the methods available on our Contact page.
                </p>

                <p>Last Updated: {new Date().toLocaleDateString()}</p>
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

