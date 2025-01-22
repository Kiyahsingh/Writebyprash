import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const founders = [
  {
    name: "Prashant Ahire",
    role: "Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Prashant is the visionary behind AssignmentPro Kolhapur, bringing years of experience in education and technology.",
    social: {
      facebook: "https://facebook.com/prashantahire",
      twitter: "https://twitter.com/prashantahire",
      linkedin: "https://linkedin.com/in/prashantahire",
      instagram: "https://instagram.com/prashantahire",
    },
  },
  {
    name: "Ujjwal Ahire",
    role: "Co-Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Ujjwal is the technical mastermind, ensuring smooth operations and innovative solutions for our clients.",
    social: {
      facebook: "https://facebook.com/ujjwalahire",
      twitter: "https://twitter.com/ujjwalahire",
      linkedin: "https://linkedin.com/in/ujjwalahire",
      instagram: "https://instagram.com/ujjwalahire",
    },
  },
]

export default function Founders() {
  return (
    <section id="founders" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Founders</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {founders.map((founder) => (
            <div key={founder.name} className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105">
                <Image
                  src={founder.image || "/placeholder.svg"}
                  alt={founder.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300 ease-in-out hover:opacity-90"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{founder.name}</h3>
              <p className="text-lg text-gray-600 mb-4">{founder.role}</p>
              <p className="text-center mb-6 max-w-md">{founder.bio}</p>
              <div className="flex space-x-4">
                <Button size="icon" variant="outline" asChild>
                  <a
                    href={founder.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${founder.name}'s Facebook`}
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="icon" variant="outline" asChild>
                  <a
                    href={founder.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${founder.name}'s Twitter`}
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="icon" variant="outline" asChild>
                  <a
                    href={founder.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${founder.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="icon" variant="outline" asChild>
                  <a
                    href={founder.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${founder.name}'s Instagram`}
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

