import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const TourSection = () => {
  return (
    <section className="relative py-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
          Take A Tour Of Luxury
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Experience our world-class facilities and exceptional services through 
          our virtual tour before you arrive.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="gold" size="xl">
            Book Virtual Tour
          </Button>
          <Button 
            variant="outline-luxury" 
            size="xl" 
            className="border-white text-white hover:bg-white hover:text-luxury-brown"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Video
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TourSection;