import React, { useState } from 'react';
import { contactData } from '../mock';
import { Mail, Phone, MapPin, Instagram, Send, MessageSquare } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formType, setFormType] = useState('inquiry'); // inquiry, quote, booking
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: '',
    preferredDate: '',
    budget: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon."
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      serviceType: '',
      preferredDate: '',
      budget: ''
    });
  };

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
            Get in Touch
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: '#736c64' }}
          >
            Have a question or ready to start your custom order? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2
                  className="text-3xl font-bold mb-6"
                  style={{ color: '#1e1919' }}
                >
                  Contact Information
                </h2>
                <p
                  className="text-base mb-8"
                  style={{ color: '#736c64' }}
                >
                  Reach out to us through any of the following channels. We're here to help!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <a
                  href={`tel:${contactData.whatsapp}`}
                  className="flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: '#f7f5f2' }}
                >
                  <div
                    className="p-3 rounded-full"
                    style={{ backgroundColor: '#61525a' }}
                  >
                    <Phone size={24} style={{ color: '#f7f5f2' }} />
                  </div>
                  <div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: '#736c64' }}
                    >
                      Phone / WhatsApp
                    </div>
                    <div
                      className="text-lg font-semibold"
                      style={{ color: '#1e1919' }}
                    >
                      {contactData.whatsapp}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${contactData.email}`}
                  className="flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: '#f7f5f2' }}
                >
                  <div
                    className="p-3 rounded-full"
                    style={{ backgroundColor: '#61525a' }}
                  >
                    <Mail size={24} style={{ color: '#f7f5f2' }} />
                  </div>
                  <div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: '#736c64' }}
                    >
                      Email
                    </div>
                    <div
                      className="text-lg font-semibold"
                      style={{ color: '#1e1919' }}
                    >
                      {contactData.email}
                    </div>
                  </div>
                </a>

                <div
                  className="flex items-center space-x-4 p-4 rounded-lg"
                  style={{ backgroundColor: '#f7f5f2' }}
                >
                  <div
                    className="p-3 rounded-full"
                    style={{ backgroundColor: '#61525a' }}
                  >
                    <MapPin size={24} style={{ color: '#f7f5f2' }} />
                  </div>
                  <div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: '#736c64' }}
                    >
                      Location
                    </div>
                    <div
                      className="text-lg font-semibold"
                      style={{ color: '#1e1919' }}
                    >
                      {contactData.address}
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/nv.creationstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: '#f7f5f2' }}
                >
                  <div
                    className="p-3 rounded-full"
                    style={{ backgroundColor: '#61525a' }}
                  >
                    <Instagram size={24} style={{ color: '#f7f5f2' }} />
                  </div>
                  <div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: '#736c64' }}
                    >
                      Instagram
                    </div>
                    <div
                      className="text-lg font-semibold"
                      style={{ color: '#1e1919' }}
                    >
                      {contactData.instagram}
                    </div>
                  </div>
                </a>
              </div>

              {/* Quick WhatsApp Button */}
              <a
                href={`https://wa.me/${contactData.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: '#25D366',
                  color: 'white'
                }}
              >
                <MessageSquare className="mr-2" size={24} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div
              className="p-8 rounded-xl"
              style={{ backgroundColor: '#f7f5f2' }}
            >
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: '#1e1919' }}
              >
                Send Us a Message
              </h2>

              {/* Form Type Selector */}
              <div className="flex space-x-2 mb-6">
                {[
                  { id: 'inquiry', label: 'General Inquiry' },
                  { id: 'quote', label: 'Get Quote' },
                  { id: 'booking', label: 'Book Appointment' }
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setFormType(type.id)}
                    className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300"
                    style={{
                      backgroundColor: formType === type.id ? '#61525a' : 'white',
                      color: formType === type.id ? '#f7f5f2' : '#1e1919'
                    }}
                  >
                    {type.label}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#1e1919' }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-colors"
                    style={{
                      borderColor: '#61525a',
                      borderOpacity: 0.3
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#1e1919' }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-colors"
                    style={{
                      borderColor: '#61525a',
                      borderOpacity: 0.3
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#1e1919' }}
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-colors"
                    style={{
                      borderColor: '#61525a',
                      borderOpacity: 0.3
                    }}
                  />
                </div>

                {formType === 'quote' && (
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: '#1e1919' }}
                    >
                      Service Type
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-colors"
                      style={{
                        borderColor: '#61525a',
                        borderOpacity: 0.3
                      }}
                    >
                      <option value="">Select a service</option>
                      <option value="custom-stitching">Custom Stitching</option>
                      <option value="designer-suits">Designer Suits</option>
                      <option value="bridal">Bridal Collection</option>
                      <option value="party-wear">Party Wear</option>
                    </select>
                  </div>
                )}

                {formType === 'booking' && (
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: '#1e1919' }}
                    >
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-colors"
                      style={{
                        borderColor: '#61525a',
                        borderOpacity: 0.3
                      }}
                    />
                  </div>
                )}

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#1e1919' }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-colors resize-none"
                    style={{
                      borderColor: '#61525a',
                      borderOpacity: 0.3
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: '#61525a',
                    color: '#f7f5f2'
                  }}
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
