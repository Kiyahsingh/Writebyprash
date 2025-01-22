import Header from "./components/header"
import Hero from "./components/hero"
import Services from "./components/services"
import OrderForm from "./components/order-form"
import ContactForm from "./components/contact-form"
import Founders from "./components/founders"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="space-y-20 md:space-y-32 pb-16 md:pb-24">
          <Hero />
          <Services />
          <OrderForm />
          <Founders />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

