import { useState } from "react";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white">
            <h1 className="text-2xl font-serif font-bold">LUXIA</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-luxury-gold transition-smooth">Home</a>
            <Link to="/rooms" className="text-white hover:text-luxury-gold transition-smooth">
  Rooms
</Link>
            <a href="/services" className="text-white hover:text-luxury-gold transition-smooth">Services</a>
             <Link to="/about" className="text-white hover:text-luxury-gold transition-smooth">
  About
</Link>
            <a href="/contact" className="text-white hover:text-luxury-gold transition-smooth">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#" className="text-white hover:text-luxury-gold transition-smooth">Home</a>
              <a href="#rooms" className="text-white hover:text-luxury-gold transition-smooth">Rooms</a>
              <a href="#services" className="text-white hover:text-luxury-gold transition-smooth">Services</a>
              <a href="#about" className="text-white hover:text-luxury-gold transition-smooth">About</a>
              <a href="#contact" className="text-white hover:text-luxury-gold transition-smooth">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;