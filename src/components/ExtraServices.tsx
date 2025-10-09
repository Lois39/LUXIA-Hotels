import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const services = [
  {
    title: "Room Cleaning",
    price: "$39.99",
    features: [
      "Daily housekeeping",
      "Fresh linens",
      "Bathroom restocking",
      "Turndown service"
    ]
  },
  {
    title: "Spa Package",
    price: "$89.99",
    features: [
      "Full body massage",
      "Facial treatment", 
      "Sauna access",
      "Relaxation area"
    ]
  }
];

const ExtraServices = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-brown mb-4">
            Extra Services
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enhance your stay with our premium additional services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="shadow-luxury hover:shadow-gold transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-serif text-luxury-brown">
                  {service.title}
                </CardTitle>
                <div className="text-3xl font-bold text-luxury-gold mt-2">
                  {service.price}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="luxury" size="lg" className="w-full">
                  Book Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraServices;