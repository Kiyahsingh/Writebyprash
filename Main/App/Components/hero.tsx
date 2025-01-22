import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="container px-4 md:px-6 py-16 md:py-24 lg:py-32">
      <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Professional Assignment Writing & Diagrams
        </h1>
        <p className="max-w-[700px] text-lg sm:text-xl text-muted-foreground">
          Get expert help with your assignments and diagrams. We offer high-quality services with the convenience of
          home delivery right here in Kolhapur.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="text-lg px-8">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

