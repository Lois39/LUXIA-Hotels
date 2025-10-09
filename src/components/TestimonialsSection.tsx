import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Executive",
    rating: 5,
    content: "Absolutely stunning hotel! The service was impeccable and the room was beyond my expectations. Will definitely return.",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Travel Blogger",
    rating: 5,
    content: "This hotel redefined luxury for me. Every detail was perfect, from the elegant decor to the exceptional staff service.",
    avatar: "MC"
  },
  {
    name: "Emma Davis",
    role: "Wedding Planner",
    rating: 5,
    content: "Hosted my client's wedding here and it was magical. The venue, service, and attention to detail were outstanding.",
    avatar: "ED"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-luxury-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-brown mb-4">
            What Our Guests Says
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our satisfied guests about their exceptional experiences
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-luxury hover:shadow-gold transition-shadow duration-300">
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground text-center mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-luxury-gold rounded-full text-white font-semibold mb-3">
                  {testimonial.avatar}
                </div>
                <h4 className="font-serif font-semibold text-luxury-brown">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;