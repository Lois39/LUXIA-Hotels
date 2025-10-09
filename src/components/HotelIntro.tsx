import { Button } from "@/components/ui/button";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";

const HotelIntro = () => {
  return (
    <section className="py-20 bg-luxury-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src={room1} 
                  alt="Luxury hotel room" 
                  className="rounded-lg shadow-luxury w-full h-64 object-cover"
                />
                <img 
                  src={room2} 
                  alt="Hotel suite" 
                  className="rounded-lg shadow-luxury w-full h-48 object-cover"
                />
              </div>
              <div className="mt-8">
                <img 
                  src={room1} 
                  alt="Hotel amenities" 
                  className="rounded-lg shadow-luxury w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-brown mb-6">
              Most Safe & Rated Hotel In London.
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Experience unparalleled luxury and comfort in the heart of London. Our hotel combines 
              traditional elegance with modern amenities, offering you a truly exceptional stay.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From our beautifully appointed rooms to our world-class dining and spa facilities, 
              every detail has been carefully crafted to ensure your complete satisfaction and comfort.
            </p>
            <Button variant="luxury" size="lg">
              Discover More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelIntro;