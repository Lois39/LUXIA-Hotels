import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

import heroBg from "@/assets/hero-bg.jpg"

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-luxury-cream">
      <Header />

      {/* Hero */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-4xl md:text-6xl font-serif font-bold text-white">
          Contact Us
        </h1>
      </section>

      <main className="flex-grow">
        {/* Contact Content */}
        <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6 text-luxury-gold">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                <Input id="name" placeholder="Your full name" className="bg-white" required />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <Input id="email" type="email" placeholder="you@example.com" className="bg-white" required />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can assist you…"
                  className="bg-white h-32"
                  required
                />
              </div>

              <Button type="submit" variant="luxury" size="lg">
                Send Message
              </Button>
            </form>
          </div>

          {/* Hotel Details */}
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-luxury-gold">
              Our Location
            </h2>
            <p className="text-gray-700">
              We’d love to welcome you in person or assist with any inquiries.
              Reach us through the details below or fill out the form.
            </p>

            <div className="space-y-4 text-gray-800">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-luxury-gold mt-1" />
                <p>123 Royal Avenue, Midtown District, Lagos, Nigeria</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-luxury-gold" />
                <p>+234 700 123 4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-luxury-gold" />
                <p>reservations@awahotel.com</p>
              </div>
            </div>

            {/* Optional embedded map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3..."
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="bg-luxury-gold py-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            We’re Here to Help
          </h2>
          <p className="max-w-2xl mx-auto mb-6">
            Whether it’s a special request or a question about your stay, our team is ready to assist you anytime.
          </p>
          <Button
            variant="luxury"
            size="lg"
            onClick={() => (window.location.href = "tel:+2347001234567")}
          >
            Call Us Now
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Contact;