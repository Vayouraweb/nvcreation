import React from 'react';
import { testimonialsData } from '../mock';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="py-20"
        style={{ backgroundColor: '#f7f5f2' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: '#1e1919' }}
          >
            Client Testimonials
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: '#736c64' }}
          >
            Hear from our satisfied customers around the world
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl relative"
                style={{ backgroundColor: '#f7f5f2' }}
              >
                {/* Quote Icon */}
                <div
                  className="absolute top-6 right-6 opacity-20"
                  style={{ color: '#61525a' }}
                >
                  <Quote size={40} />
                </div>

                {/* Profile */}
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3
                      className="text-lg font-bold"
                      style={{ color: '#1e1919' }}
                    >
                      {testimonial.name}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: '#736c64' }}
                    >
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      fill="#61525a"
                      style={{ color: '#61525a' }}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p
                  className="text-base leading-relaxed"
                  style={{ color: '#736c64' }}
                >
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-20"
        style={{ backgroundColor: '#1e1919' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '1000+', label: 'Suits Created' },
              { number: '15+', label: 'Countries Served' },
              { number: '5.0', label: 'Average Rating' }
            ].map((stat, index) => (
              <div key={index}>
                <div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{ color: '#61525a' }}
                >
                  {stat.number}
                </div>
                <div style={{ color: '#bbb5ae' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
