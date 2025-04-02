"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, FileText } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden"> {/* Only show on small screens */}
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 p-4 border-b">
             {/* Standard blue icon */}
            <FileText className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-foreground">Onuoha Systems</span>
          </div>
          <nav className="flex flex-col gap-4 p-4 flex-1">
            <Link
              href="/"
              className="text-lg font-medium hover:text-blue-600 transition-colors"
              onClick={() => setOpen(false)} // Close sheet on click
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-lg font-medium hover:text-blue-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/benefits"
              className="text-lg font-medium hover:text-blue-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              Benefits
            </Link>
            <Link
              href="/testimonials"
              className="text-lg font-medium hover:text-blue-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium hover:text-blue-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
           {/* Optional: Add CTA button at the bottom */}
           <div className="p-4 border-t">
             {/* Standard blue button */}
             <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
               <Link
                 href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3aOfGZfeUdsIhAt7ilBvhGtzzo6hKVsgmUfDKqrLp895XoWiCTH-iy_ADrFdO2FL8HAphywKGP"
                 target="_blank"
                 rel="noopener noreferrer"
                 onClick={() => setOpen(false)}
               >
                 Book a Consultation
               </Link>
             </Button>
           </div>
        </div>
      </SheetContent>
    </Sheet>
  )
} 