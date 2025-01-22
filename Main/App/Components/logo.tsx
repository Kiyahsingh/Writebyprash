import { Pen } from "lucide-react"

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Pen className="h-6 w-6 md:h-8 md:w-8 text-primary" />
      {showText && <span className="font-bold text-xl md:text-2xl text-primary hidden sm:inline">writebyprash</span>}
    </div>
  )
}

