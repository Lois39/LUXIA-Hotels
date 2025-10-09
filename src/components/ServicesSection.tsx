import { 
  Shield, 
  Utensils, 
  Wifi, 
  Car, 
  Dumbbell, 
  Users 
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Safety First",
    description: "24/7 security and safety protocols to ensure your peace of mind."
  },
  {
    icon: Utensils,
    title: "Fine Dining",
    description: "Exquisite culinary experiences with world-class chefs."
  },
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "High-speed internet access throughout the property."
  },
  {
    icon: Car,
    title: "Valet Parking",
    description: "Complimentary valet parking service for all guests."
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art fitness facilities available 24/7."
  },
  {
    icon: Users,
    title: "Concierge Service",
    description: "Personal assistance to make your stay unforgettable."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-brown mb-4">
            The Hotel
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our exceptional services designed to make your stay truly memorable
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold rounded-full mb-6 group-hover:bg-luxury-brown transition-smooth">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-luxury-brown mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;