"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AuthButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("")

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Simulate login (you would implement actual login logic here)
    setIsLoggedIn(true)
    setUsername("User")
  }

  const handleSendOTP = () => {
    alert("OTP sent to your phone number!")
  }

  if (isLoggedIn) {
    return (
      <div className="flex items-center space-x-4">
        <span>Welcome, {username}</span>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login / Register</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Authentication</DialogTitle>
          <DialogDescription>Login or create a new account to place orders and track their status.</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="login">Email Login</TabsTrigger>
            <TabsTrigger value="phone">Phone Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <Input id="login-email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-password">Password</Label>
                <Input id="login-password" type="password" required />
              </div>
              <DialogFooter>
                <Button type="submit">Login</Button>
              </DialogFooter>
            </form>
          </TabsContent>
          <TabsContent value="phone">
            <form onSubmit={handleLogin} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="phone-number">Phone Number</Label>
                <Input id="phone-number" type="tel" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone-otp">OTP</Label>
                <Input id="phone-otp" type="text" required />
              </div>
              <DialogFooter>
                <Button type="submit">Login with Phone</Button>
              </DialogFooter>
            </form>
          </TabsContent>
          <TabsContent value="register">
            <form onSubmit={handleLogin} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="register-name">Name</Label>
                <Input id="register-name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-email">Email</Label>
                <Input id="register-email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-password">Password</Label>
                <Input id="register-password" type="password" required />
              </div>
              <DialogFooter>
                <Button type="submit">Register</Button>
              </DialogFooter>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

const handleLogout = () => {
  setIsLoggedIn(false)
  setUsername("")
}

