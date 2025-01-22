"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Logo } from "./logo"

const links = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#order", label: "Order" },
  { href: "#founders", label: "Founders" },
  { href: "#contact", label: "Contact" },
  { href: "/profile", label: "Profile" },
]

export function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] p-6">
        <nav className="flex flex-col gap-8">
          <Link href="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
            <Logo />
          </Link>
          <ScrollArea className="h-[calc(100vh-8rem)] pb-10">
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </ScrollArea>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

