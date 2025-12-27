import React from 'react';
import { servicesData } from '../mock';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
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
            Our Services
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: '#736c64' }}
          >
            Comprehensive stitching and design services tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: '#f7f5f2' }}
              >
                <div className="p-8">
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: '#61525a' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-base mb-6 leading-relaxed"
                    style={{ color: '#736c64' }}
                  >
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle2
                          size={18}
                          style={{ color: '#61525a', flexShrink: 0 }}
                        />
                        <span
                          className="text-sm"
                          style={{ color: '#1e1919' }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        className="py-20"
        style={{ backgroundColor: '#1e1919' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            style={{ color: '#f7f5f2' }}
          >
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Share your vision and preferences with us'
              },
              {
                step: '02',
                title: 'Design Selection',
                description: 'Choose from our designs or create custom'
              },
              {
                step: '03',
                title: 'Measurements',
                description: 'Precise measurements for perfect fitting'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Receive your beautiful creation'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-5xl font-bold mb-4 opacity-50"
                  style={{ color: '#61525a' }}
                >
                  {item.step}
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: '#f7f5f2' }}
                >
                  {item.title}
                </h3>
                <p style={{ color: '#bbb5ae' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: '#1e1919' }}
          >
            Ready to Get Started?
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: '#736c64' }}
          >
            Contact us today to discuss your requirements
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#61525a',
              color: '#f7f5f2'
            }}
          >
            Get in Touch
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
