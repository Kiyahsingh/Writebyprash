import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, PenTool, Truck } from "lucide-react"

const services = [
  {
    title: "Assignment Writing",
    description: "Professional writing services for all types of academic assignments.",
    icon: BookOpen,
  },
  {
    title: "Diagram Creation",
    description: "High-quality diagrams and illustrations for your projects and presentations.",
    icon: PenTool,
  },
  {
    title: "Home Delivery",
    description: "Convenient home delivery service within Kolhapur.",
    icon: Truck,
  },
]

export default function Services() {
  return (
    <section id="services" className="container py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <service.icon className="w-8 h-8 mb-2" />
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

