import React from 'react';
import { aboutData } from '../mock';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
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
            {aboutData.title}
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: '#736c64' }}
          >
            {aboutData.description}
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutData.highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-8 rounded-xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#f7f5f2' }}
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle2
                    size={28}
                    style={{ color: '#61525a', flexShrink: 0 }}
                  />
                  <div>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: '#1e1919' }}
                    >
                      {highlight.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: '#736c64' }}
                    >
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section
        className="py-20"
        style={{ backgroundColor: '#1e1919' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            style={{ color: '#f7f5f2' }}
          >
            Our Journey
          </h2>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#bbb5ae' }}>
            <p>
              NV Creation Studio began with a passion for preserving the rich heritage of Punjabi craftsmanship while embracing modern design sensibilities. What started as a small tailoring workshop has grown into a globally recognized name for premium Punjabi suits and custom stitching.
            </p>
            <p>
              Our founder's vision was simple yet profound: to create garments that tell stories, celebrate culture, and make every client feel extraordinary. Today, we serve clients across Canada, USA, UK, and India, bringing the same dedication to excellence that has been our hallmark from day one.
            </p>
            <p>
              Every suit we create is a testament to our commitment to quality, attention to detail, and respect for traditional techniques. We believe that clothing is more than fabric and thread—it's an expression of identity, celebration of heritage, and a work of art.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            style={{ color: '#1e1919' }}
          >
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality',
                description: 'We never compromise on the quality of fabrics, materials, or craftsmanship.'
              },
              {
                title: 'Tradition',
                description: 'Honoring traditional techniques while innovating for modern aesthetics.'
              },
              {
                title: 'Customer First',
                description: 'Your satisfaction and happiness are our ultimate measure of success.'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl"
                style={{ backgroundColor: '#f7f5f2' }}
              >
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: '#61525a' }}
                >
                  {value.title}
                </h3>
                <p style={{ color: '#736c64' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
