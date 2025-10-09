import BookingForm from "./BookingForm";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Enjoy A Luxury Experience
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Discover the perfect blend of comfort and elegance in our world-class hotel. 
              Experience unparalleled luxury and exceptional service.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="gold" size="xl">
                Explore Rooms
              </Button>
              <Button variant="outline-luxury" size="xl">
                View Gallery
              </Button>
            </div>
          </div>

          {/* Right Content - Booking Form */}
          <div className="flex justify-center lg:justify-end">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;