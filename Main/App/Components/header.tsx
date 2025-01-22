import Link from "next/link"
import { Button } from "@/components/ui/button"
import AuthButton from "./auth-button"
import { Sidebar } from "./sidebar"
import { Logo } from "./logo"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-8">
        <div className="flex items-center space-x-4 md:space-x-6">
          <Sidebar />
          <Link href="/" className="flex items-center space-x-2">
            <Logo showText={false} className="sm:hidden" />
            <Logo className="hidden sm:flex" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="#services" className="hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#order" className="hover:text-primary transition-colors">
            Order
          </Link>
          <Link href="#founders" className="hover:text-primary transition-colors">
            Founders
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4 md:space-x-6">
          <AuthButton />
          <Button variant="outline" className="hidden sm:inline-flex">
            Order Now
          </Button>
        </div>
      </div>
    </header>
  )
}

