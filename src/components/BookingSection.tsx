import BookingForm from "./BookingForm";
import room2 from "@/assets/room-2.jpg";

const BookingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-brown mb-6">
              Your Next Stay
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Ready to experience luxury like never before? Book your stay with us and 
              discover why we're the most preferred hotel in London.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our dedicated team is ready to provide you with an unforgettable experience 
              from the moment you arrive until your departure.
            </p>
            
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-luxury">
              <img 
                src={room2} 
                alt="Luxury hotel experience" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Right - Booking Form */}
          <div className="flex justify-center">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;