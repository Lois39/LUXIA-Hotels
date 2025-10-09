import { Button } from "@/components/ui/button";
import room3 from "@/assets/room-3.jpg";

const FeatureSection = () => {
  return (
    <section className="py-20 bg-luxury-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-brown mb-6">
              Pearl Of The Adriatic.
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Experience the epitome of luxury in our signature suite. This extraordinary 
              accommodation offers breathtaking views and unparalleled comfort.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Every detail has been meticulously crafted to provide you with an unforgettable 
              experience. From the finest linens to the most exclusive amenities, this is luxury redefined.
            </p>
            <Button variant="luxury" size="lg">
              Explore Suite
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src={room3} 
              alt="Pearl of the Adriatic Suite" 
              className="rounded-lg shadow-luxury w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;