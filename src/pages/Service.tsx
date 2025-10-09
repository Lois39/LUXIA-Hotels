import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"

import heroBg from "@/assets/hero-bg.jpg"
import diningImg from "@/assets/room-1.jpg"
import spaImg from "@/assets/room-1.jpg"
import conciergeImg from "@/assets/room-1.jpg"
import valetImg from "@/assets/room-1.jpg"
import transferImg from "@/assets/room-1.jpg"
import experience1 from "@/assets/room-1.jpg"
import experience2 from "@/assets/room-1.jpg"
import experience3 from "@/assets/room-1.jpg"

const coreServices = [
  {
    title: "Fine Dining",
    text: "Savor world-class cuisine crafted by award-winning chefs, with curated wine pairings and candlelit ambience.",
    img: diningImg,
  },
  {
    title: "Spa & Wellness",
    text: "Indulge in rejuvenating treatments, therapeutic massages, and serene wellness lounges designed for total relaxation.",
    img: spaImg,
  },
  {
    title: "Concierge",
    text: "Our dedicated concierge arranges bespoke experiences—private city tours, exclusive events, and curated shopping.",
    img: conciergeImg,
  },
  {
    title: "Valet Parking",
    text: "Arrive in style with our discreet valet service, ensuring seamless arrivals and departures 24/7.",
    img: valetImg,
  },
  {
    title: "Airport Transfer",
    text: "Enjoy private, chauffeur-driven transfers to and from the airport in complete comfort and elegance.",
    img: transferImg,
  },
]

const experiences = [
  {
    title: "Private Wine Tasting",
    img: experience1,
    text: "Sample rare vintages guided by our in-house sommelier in an intimate cellar setting.",
  },
  {
    title: "Sunset Yacht Cruise",
    img: experience2,
    text: "Sail along the coastline at golden hour with champagne and gourmet bites.",
  },
  {
    title: "Helicopter City Tour",
    img: experience3,
    text: "See breathtaking cityscapes from the sky for an unforgettable perspective.",
  },
]

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen bg-luxury-cream">
      <Header />

      {/* Hero */}
      <section
        className="relative h-[55vh] flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-4xl md:text-6xl font-serif font-bold text-white">
          Our Services
        </h1>
      </section>

      <main className="flex-grow">
        {/* Core Services */}
        {coreServices.map((s, i) => (
          <section
            key={s.title}
            className={`py-16 md:py-24 ${
              i % 2 === 0 ? "bg-white" : "bg-luxury-cream"
            }`}
          >
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={s.img}
                  alt={s.title}
                  className="rounded-2xl shadow-lg w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold mb-4 text-luxury-gold">
                  {s.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">{s.text}</p>
                <Button variant="luxury" onClick={() => (window.location.href = "/booking")}>
                  Learn More
                </Button>
              </div>
            </div>
          </section>
        ))}

        {/* Signature Experiences */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-luxury-gold">
              Signature Experiences
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {experiences.map((ex) => (
                <div key={ex.title} className="group">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={ex.img}
                      alt={ex.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{ex.title}</h3>
                  <p className="text-gray-700">{ex.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ / Contact CTA */}
        <section className="py-20 bg-luxury-cream text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-luxury-gold">
            Have Questions?
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 mb-8">
            From booking details to special requests, we’re here to assist. Reach out and our concierge will respond promptly.
          </p>
          <Button variant="luxury" size="lg" onClick={() => (window.location.href = "/contact")}>
            Contact Us
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Services