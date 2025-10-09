import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";

const rooms = [
  {
    image: room1,
    title: "Comfort Standard Room",
    rating: 5,
    description: "Elegant room with premium amenities and city views"
  },
  {
    image: room2,
    title: "Luxury Studio Suite",
    rating: 5,
    description: "Spacious suite with separate living area and luxury furnishings"
  },
  {
    image: room3,
    title: "Royal Wedding Suite",
    rating: 5,
    description: "Opulent penthouse suite perfect for special occasions"
  }
];

const RoomsSection = () => {
  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-brown mb-4">
            Rooms & Suites
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience luxury and comfort in our elegantly designed accommodations
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-serif font-semibold text-luxury-brown mb-2">
                  {room.title}
                </h3>
                
                <div className="flex justify-center items-center gap-1 mb-3">
                  {[...Array(room.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {room.description}
                </p>
                
                <Button variant="luxury" size="lg">
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;