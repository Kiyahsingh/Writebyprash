import Link from "next/link"
import { Logo } from "./logo"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Logo className="mb-2" />
            <p className="text-center text-sm text-muted-foreground md:text-left">
              Professional assignment writing and diagram services in Kolhapur.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:items-end">
            <p className="text-center text-sm text-muted-foreground md:text-right">
              Built by{" "}
              <Link href="#" className="font-medium underline underline-offset-4 hover:text-primary">
                Prashant Ahire
              </Link>{" "}
              and{" "}
              <Link href="#" className="font-medium underline underline-offset-4 hover:text-primary">
                Ujjwal Ahire
              </Link>
            </p>
            <p className="text-center text-sm text-muted-foreground md:text-right">
              &copy; {new Date().getFullYear()} writebyprash. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

