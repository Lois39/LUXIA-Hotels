import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxury-brown text-white">
      {/* Partners Section */}
      <div className="border-b border-white/20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <div className="text-xl font-serif">RITZ</div>
            <div className="text-xl font-serif">MARRIOTT</div>
            <div className="text-xl font-serif">HILTON</div>
            <div className="text-xl font-serif">HYATT</div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">LUXIA</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Experience luxury and comfort in the heart of London. Your perfect stay awaits.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-luxury-gold transition-colors">Home</a></li>
              <li><a href="#rooms" className="text-white/80 hover:text-luxury-gold transition-colors">Rooms</a></li>
              <li><a href="#services" className="text-white/80 hover:text-luxury-gold transition-colors">Services</a></li>
              <li><a href="#about" className="text-white/80 hover:text-luxury-gold transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-luxury-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-luxury-gold transition-colors">Fine Dining</a></li>
              <li><a href="#" className="text-white/80 hover:text-luxury-gold transition-colors">Spa & Wellness</a></li>
              <li><a href="#" className="text-white/80 hover:text-luxury-gold transition-colors">Concierge</a></li>
              <li><a href="#" className="text-white/80 hover:text-luxury-gold transition-colors">Valet Parking</a></li>
              <li><a href="#" className="text-white/80 hover:text-luxury-gold transition-colors">Airport Transfer</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3 text-white/80">
              <p>123 Luxury Street<br />London, UK W1K 6PZ</p>
              <p>Phone: +44 20 7123 4567</p>
              <p>Email: info@luxiahotel.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60">
            <p>&copy; 2024 LUXIA Hotel. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-luxury-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-luxury-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;