import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import heroBg from "@/assets/hero-bg.jpg";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";
import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.png";
import team3 from "@/assets/team-3.png";

import room4 from "@/assets/room-3.jpg"; // repeat
import suiteImage from "@/assets/room-1.jpg"; // repeat for demo

const About = () => {
  const valueImages = [room1, room2, room3];
  const amenityImages = [room1, room2, room3];
  const teamImages = [team1, team2, team3];

  return (
    <div className="flex flex-col min-h-screen bg-luxury-cream">
      <Header />

      {/* Hero */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="bg-black/50 absolute inset-0" />
        <h1 className="relative text-4xl md:text-6xl font-serif font-bold text-white text-center">
          About Our Hotel
        </h1>
      </section>

      <main className="flex-grow">
        {/* Story */}
        <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={suiteImage}
            alt="Hotel exterior"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
         <div className="transition-all duration-1000 ease-out opacity-100 translate-y-0">
              <h2 className="text-4xl font-serif font-bold mb-6 text-luxury-gold">Our Heritage</h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Nestled in the heart of the city, our hotel has been a sanctuary of elegance and
                comfort since 1990. What began as a family-run retreat has grown into a world-class
                destination for travelers who value sophistication, impeccable service, and timeless
                design.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Every corner of our property is designed to create unforgettable memories... from the
                grand lobby to the tranquil gardens and the rooftop lounge that offers breathtaking
                skyline views.
              </p>
            </div>
        </section>

        {/* Values */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold mb-12 text-luxury-gold">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Exquisite Service", text: "Every guest is our most important guest." },
                { title: "Timeless Design", text: "Spaces that blend classic charm with modern luxury." },
                { title: "Sustainability", text: "Eco-friendly practices that protect our planet." },
              ].map((v, i) => (
                <Card key={v.title} className="shadow-lg rounded-2xl">
                  <img
                    src={valueImages[i % valueImages.length]}
                    alt={v.title}
                    className="h-48 w-full object-cover rounded-t-2xl"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
                    <p className="text-gray-700">{v.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

       {/* Amenities – two-column staggered grid with hover overlays */}
<section className="max-w-7xl mx-auto px-6 py-20">
  <h2 className="text-3xl font-serif font-bold text-center mb-12 text-luxury-gold">
    World-Class Amenities
  </h2>

  <div className="grid grid-cols-2 gap-4">
    {/* Left column */}
    <div className="space-y-4">
      {[
        { img: amenityImages[0], label: "Infinity Pool" },
        { img: amenityImages[1], label: "Michelin-Star Dining" },
        { img: amenityImages[2], label: "Luxury Spa" },
      ].map((a, i) => (
        <div key={i} className="relative group rounded-lg overflow-hidden">
          <img
            src={a.img}
            alt={a.label}
            className="w-full object-cover h-64 sm:h-48 lg:h-64 transition-transform duration-300 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100
                       flex items-center justify-center transition-opacity duration-300"
          >
            <span className="text-white text-lg font-semibold">{a.label}</span>
          </div>
        </div>
      ))}
    </div>

    {/* Right column */}
    <div className="space-y-4 mt-8">
      {[
        { img: amenityImages[1], label: "Private Beach" },
        { img: amenityImages[0], label: "Fitness Center" },
        { img: amenityImages[2], label: "Rooftop Bar" },
      ].map((a, i) => (
        <div key={i} className="relative group rounded-lg overflow-hidden">
          <img
            src={a.img}
            alt={a.label}
            className="w-full object-cover h-72 sm:h-56 lg:h-72 transition-transform duration-300 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100
                       flex items-center justify-center transition-opacity duration-300"
          >
            <span className="text-white text-lg font-semibold">{a.label}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Team */}
       <section className="py-20 bg-transparent">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-luxury-gold">
      Meet the Team
    </h2>

    <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
      {[
        {
          name: "Elena Rossi",
          role: "General Manager",
          img: teamImages[0],
          socials: {
            linkedin: "https://linkedin.com/in/elena",
            twitter: "https://twitter.com/elena",
            instagram: "https://instagram.com/elena",
          },
        },
        {
          name: "James Carter",
          role: "Head Chef",
          img: teamImages[1],
          socials: {
            linkedin: "https://linkedin.com/in/james",
            twitter: "https://twitter.com/james",
            instagram: "https://instagram.com/james",
          },
        },
        {
          name: "Sophia Kim",
          role: "Guest Relations",
          img: teamImages[2],
          socials: {
            linkedin: "https://linkedin.com/in/sophia",
            twitter: "https://twitter.com/sophia",
            instagram: "https://instagram.com/sophia",
          },
        },
      ].map((member) => (
        <div key={member.name} className="flex flex-col items-center group">
          {/* Image with hover lift */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl transition-transform duration-300 group-hover:-translate-y-1">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover"
            />

            {/* Social overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                            flex items-center justify-center gap-4 transition-opacity duration-300">
              {Object.entries(member.socials).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-luxury-gold transition-colors"
                >
                  <i className={`fab fa-${key} text-xl`}></i>
                  {/* If you use Lucide icons instead, import and use <Linkedin />, etc. */}
                </a>
              ))}
            </div>
          </div>

          {/* Name & Role */}
          <h3 className="mt-4 text-xl font-semibold text-gray-900">{member.name}</h3>
          <p className="text-gray-600">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Call to Action */}
        <section className="relative bg-luxury-gold py-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Experience Unmatched Luxury
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Ready to indulge yourself in an unforgettable stay? Reserve your room now and be pampered
            like royalty.
          </p>
          <Button variant="luxury" size="lg" onClick={() => (window.location.href = "/rooms")}>
            Book Your Stay
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
