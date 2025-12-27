import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Scissors, Award, Clock } from 'lucide-react';
import { heroData } from '../mock';

const Home = () => {
  const features = [
    {
      icon: <Scissors size={32} />,
      title: "Expert Craftsmanship",
      description: "Years of experience in traditional and modern stitching"
    },
    {
      icon: <Globe size={32} />,
      title: "Worldwide Service",
      description: "Serving clients in Canada, USA, UK, and beyond"
    },
    {
      icon: <Award size={32} />,
      title: "Premium Quality",
      description: "Only the finest fabrics and materials"
    },
    {
      icon: <Clock size={32} />,
      title: "Timely Delivery",
      description: "Fast and secure worldwide shipping"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#f7f5f2' }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, #61525a 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="space-y-8">
            {/* Main Title */}
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight"
              style={{ color: '#1e1919' }}
            >
              {heroData.title}
            </h1>

            {/* Subtitle */}
            <p
              className="text-2xl md:text-3xl font-medium"
              style={{ color: '#61525a' }}
            >
              {heroData.subtitle}
            </p>

            {/* Description */}
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: '#736c64' }}
            >
              {heroData.description}
            </p>

            {/* Locations */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {heroData.locations.map((location, index) => (
                <span
                  key={index}
                  className="px-6 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: '#61525a',
                    color: '#f7f5f2'
                  }}
                >
                  {location}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                to="/gallery"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: '#61525a',
                  color: '#f7f5f2'
                }}
              >
                View Our Work
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg border-2 transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: '#61525a',
                  color: '#61525a',
                  backgroundColor: 'transparent'
                }}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div
          className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-20"
          style={{ backgroundColor: '#61525a' }}
        />
        <div
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full opacity-20"
          style={{ backgroundColor: '#61525a' }}
        />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: '#1e1919' }}
            >
              Why Choose Us
            </h2>
            <p className="text-lg" style={{ color: '#736c64' }}>
              Excellence in every detail, tradition in every thread
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: '#f7f5f2' }}
              >
                <div
                  className="mb-4"
                  style={{ color: '#61525a' }}
                >
                  {feature.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: '#1e1919' }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm" style={{ color: '#736c64' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20"
        style={{ backgroundColor: '#1e1919' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: '#f7f5f2' }}
          >
            Ready to Create Your Perfect Suit?
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: '#bbb5ae' }}
          >
            Let's bring your vision to life with our expert craftsmanship
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#61525a',
              color: '#f7f5f2'
            }}
          >
            Contact Us Today
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
