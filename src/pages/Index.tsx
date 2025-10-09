import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HotelIntro from "@/components/HotelIntro";
import ServicesSection from "@/components/ServicesSection";
import RoomsSection from "@/components/RoomsSection";
import FeatureSection from "@/components/FeatureSection";
import ExtraServices from "@/components/ExtraServices";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import TourSection from "@/components/TourSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HotelIntro />
        <ServicesSection />
        <RoomsSection />
        <FeatureSection />
        <ExtraServices />
        <TestimonialsSection />
        <BookingSection />
        <TourSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;