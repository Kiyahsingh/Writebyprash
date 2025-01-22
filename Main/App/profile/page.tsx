<div></div>import Header from "../components/header"
import OrderStatus from "../components/order-status"
import Footer from "../components/footer"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="container py-12">
          <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
          <p className="text-muted-foreground mb-8">
            Welcome back! Here you can view your order status and manage your account.
          </p>
          <OrderStatus />
        </section>
      </main>
      <Footer />
    </div>
  )
}

