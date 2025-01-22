"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon, MapPin } from "lucide-react"

const assignmentTypes = ["Essay", "Research Paper", "Case Study", "Presentation", "Diagram", "Other"]

export default function OrderForm() {
  const [date, setDate] = useState<Date>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [location, setLocation] = useState("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    alert("Order submitted successfully!")
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`${position.coords.latitude}, ${position.coords.longitude}`)
        },
        (error) => {
          console.error("Error getting location:", error)
          alert("Unable to get your location. Please enter it manually.")
        },
      )
    } else {
      alert("Geolocation is not supported by your browser. Please enter your location manually.")
    }
  }

  return (
    <section id="order" className="container py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Place Your Order</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="Select assignment type" />
          </SelectTrigger>
          <SelectContent>
            {assignmentTypes.map((type) => (
              <SelectItem key={type} value={type.toLowerCase()}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Textarea placeholder="Assignment details" required />

        <div className="flex flex-col space-y-2">
          <label htmlFor="deadline" className="text-sm font-medium">
            Deadline
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="file" className="text-sm font-medium">
            Upload Files (if any)
          </label>
          <Input id="file" type="file" multiple />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="location" className="text-sm font-medium">
            Delivery Location
          </label>
          <div className="flex space-x-2">
            <Input
              id="location"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <Button type="button" onClick={handleLocationClick} variant="outline">
              <MapPin className="h-4 w-4 mr-2" />
              Get Location
            </Button>
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Place Order"}
        </Button>
      </form>
    </section>
  )
}

