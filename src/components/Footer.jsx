import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, Phone, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="text-[#d4af37]">NV</span>
              <span className="text-[#f5f5dc]"> CREATION</span>
            </h3>
            <p className="text-sm text-[#f5f5dc]/60 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Crafting elegance in every stitch. Premium Punjabi suits and bespoke tailoring services worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/nv.creationstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-300"
              >
                <Instagram size={18} className="text-[#d4af37]" />
              </a>
              <a
                href="mailto:info@nvcreationstudio.com"
                className="w-10 h-10 flex items-center justify-center border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-300"
              >
                <Mail size={18} className="text-[#d4af37]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-[#d4af37]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[{ to: '/', label: 'Home' }, { to: '/about', label: 'About' }, { to: '/services', label: 'Services' }, { to: '/gallery', label: 'Gallery' }, { to: '/testimonials', label: 'Testimonials' }].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#f5f5dc]/60 hover:text-[#d4af37] transition-colors duration-300"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-[#d4af37]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Services
            </h4>
            <ul className="space-y-3 text-sm text-[#f5f5dc]/60" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <li>Custom Stitching</li>
              <li>Designer Suits</li>
              <li>Bridal Collection</li>
              <li>Party Wear</li>
              <li>Alterations & Repairs</li>
              <li>Worldwide Shipping</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-[#d4af37]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-3 text-sm text-[#f5f5dc]/60 hover:text-[#d4af37] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <Phone size={16} />
                <span>+1 (234) 567-890</span>
              </a>
              <a
                href="mailto:info@nvcreationstudio.com"
                className="flex items-center space-x-3 text-sm text-[#f5f5dc]/60 hover:text-[#d4af37] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <Mail size={16} />
                <span>info@nvcreationstudio.com</span>
              </a>
              <div className="flex items-center space-x-3 text-sm text-[#f5f5dc]/60" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <MapPin size={16} />
                <span>Punjab, India</span>
              </div>
              <a
                href="https://www.instagram.com/nv.creationstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm text-[#f5f5dc]/60 hover:text-[#d4af37] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <Instagram size={16} />
                <span>@nv.creationstudio</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#d4af37]/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-[#f5f5dc]/40" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            © {new Date().getFullYear()} NV Creation Studio. All rights reserved.
          </p>
          <p className="text-sm text-[#f5f5dc]/40 flex items-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Crafted with <Heart size={14} className="mx-1 text-[#d4af37]" fill="#d4af37" /> for Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
