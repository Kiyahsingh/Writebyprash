"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Order {
  id: string
  type: string
  status: string
  deadline: string
}

export default function OrderStatus() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    // Simulate fetching orders from an API
    const fetchOrders = async () => {
      // In a real application, you would fetch this data from your backend
      const mockOrders: Order[] = [
        { id: "1", type: "Essay", status: "In Progress", deadline: "2023-06-15" },
        { id: "2", type: "Research Paper", status: "Completed", deadline: "2023-06-10" },
        { id: "3", type: "Diagram", status: "Pending", deadline: "2023-06-20" },
      ]
      setOrders(mockOrders)
    }

    fetchOrders()
  }, [])

  return (
    <div className="container py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Your Orders</h2>
      <Table>
        <TableCaption>A list of your recent orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Deadline</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.type}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.deadline}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

