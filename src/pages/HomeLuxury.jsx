import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {Sparkles, Globe2, Scissors, Award, ArrowRight, Star } from 'lucide-react';
import { heroData } from '../mock';

const HomeLuxury = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Scissors size={40} />,
      title: 'Master Craftsmanship',
      description: 'Decades of expertise in traditional and contemporary Punjabi tailoring'
    },
    {
      icon: <Globe2 size={40} />,
      title: 'Global Service',
      description: 'Seamless delivery to Canada, USA, UK, and worldwide'
    },
    {
      icon: <Award size={40} />,
      title: 'Premium Excellence',
      description: 'Only the finest fabrics and materials meet our standards'
    },
    {
      icon: <Star size={40} />,
      title: 'Bespoke Designs',
      description: 'Every piece is crafted to perfection, uniquely for you'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: 'radial-gradient(circle at 50% 50%, #d4af37 0%, transparent 50%)',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.15) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-6 py-2 rounded-full border-2 border-[#d4af37]/30 bg-[#d4af37]/5"
            >
              <Sparkles size={16} className="text-[#d4af37]" />
              <span className="text-sm font-medium text-[#d4af37] tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                LUXURY PUNJABI COUTURE
              </span>
            </motion.div>

            {/* Main Title */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif', lineHeight: '1.1' }}
            >
              <span className="text-[#f5f5dc]">NV</span>
              <br />
              <span className="gold-shimmer bg-clip-text text-transparent">
                CREATION STUDIO
              </span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-3xl text-[#f5f5dc]/80 max-w-3xl mx-auto"
              style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
            >
              Where Tradition Meets Timeless Elegance
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base md:text-lg text-[#f5f5dc]/60 max-w-2xl mx-auto"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Bespoke Punjabi suits crafted with passion, delivered with pride across {heroData.locations.join(', ')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
            >
              <Link
                to="/gallery"
                className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold overflow-hidden bg-[#d4af37] text-[#0a0a0a] transition-all duration-500 hover:scale-105"
                style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '1px' }}
              >
                <span className="relative z-10 flex items-center">
                  EXPLORE COLLECTION
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#b8960f] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
              
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-10 py-5 text-lg font-semibold border-2 border-[#d4af37] text-[#d4af37] transition-all duration-500 hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:scale-105"
                style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '1px' }}
              >
                BOOK CONSULTATION
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 left-10 w-40 h-40 rounded-full border-2 border-[#d4af37]/20 opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 right-10 w-60 h-60 rounded-full border-2 border-[#d4af37]/10 opacity-10"
        />
      </section>

      {/* Features Section */}
      <section className="relative py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2
              className="text-4xl md:text-6xl font-bold text-[#f5f5dc] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              The Art of Excellence
            </h2>
            <div className="gold-divider" />
            <p className="text-lg text-[#f5f5dc]/60 max-w-2xl mx-auto mt-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Every stitch tells a story of dedication, every design reflects our commitment to perfection
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group interactive-card p-8 bg-[#1a1a1a] border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-500"
              >
                <div className="text-[#d4af37] mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3
                  className="text-2xl font-bold text-[#f5f5dc] mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {feature.title}
                </h3>
                <p className="text-[#f5f5dc]/60 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-[#800020] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #d4af37 0, #d4af37 1px, transparent 0, transparent 50%)',
              backgroundSize: '20px 20px'
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '1000+', label: 'Masterpieces Created' },
              { number: '15+', label: 'Countries Served' },
              { number: '25+', label: 'Years of Excellence' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div
                  className="text-5xl md:text-6xl font-bold text-[#d4af37] mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-[#f5f5dc]/80 uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-t from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#f5f5dc] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready to Experience Luxury?
            </h2>
            <p className="text-lg text-[#f5f5dc]/60 mb-10 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Let us craft the perfect ensemble for your special moments. Your journey to elegance begins here.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-12 py-6 text-lg font-semibold bg-[#d4af37] text-[#0a0a0a] hover:bg-[#b8960f] transition-all duration-500 hover:scale-105 group"
              style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '1px' }}
            >
              START YOUR JOURNEY
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomeLuxury;
