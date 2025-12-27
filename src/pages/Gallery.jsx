import React, { useState } from 'react';
import { galleryData } from '../mock';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Wedding Collection', 'Party Wear', 'Casual Wear', 'Designer Collection'];

  const filteredGallery =
    selectedCategory === 'All'
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

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
            Our Gallery
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: '#736c64' }}
          >
            Explore our stunning collection of Punjabi suits and custom designs
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor:
                    selectedCategory === category ? '#61525a' : '#f7f5f2',
                  color:
                    selectedCategory === category ? '#f7f5f2' : '#1e1919'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                >
                  <span
                    className="text-xs font-medium mb-2"
                    style={{ color: '#f7f5f2' }}
                  >
                    {item.category}
                  </span>
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: '#f7f5f2' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: '#bbb5ae' }}
                  >
                    {item.description}
                  </p>
                </div>
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
            Love What You See?
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: '#bbb5ae' }}
          >
            Let's create something beautiful together
          </p>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
