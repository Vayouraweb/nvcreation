import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { galleryData } from '../mock';

const GalleryLuxury = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const categories = ['All', 'Wedding Collection', 'Party Wear', 'Casual Wear', 'Designer Collection'];

  const filteredGallery =
    selectedCategory === 'All'
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-5xl md:text-7xl font-bold text-[#f5f5dc] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Gallery
            </h1>
            <div className="gold-divider" />
            <p
              className="text-lg text-[#f5f5dc]/60 mt-6 leading-relaxed"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Explore our exquisite collection of handcrafted Punjabi suits, each piece a masterpiece of tradition and elegance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className=\"py-12 bg-[#0a0a0a]\">\n        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">\n          <div className=\"flex flex-wrap justify-center gap-4\">\n            {categories.map((category, index) => (\n              <motion.button\n                key={category}\n                initial={{ opacity: 0, y: 20 }}\n                animate={{ opacity: 1, y: 0 }}\n                transition={{ delay: index * 0.1, duration: 0.5 }}\n                onClick={() => setSelectedCategory(category)}\n                className=\"px-8 py-3 text-sm font-semibold border transition-all duration-300 hover:scale-105\"\n                style={{\n                  fontFamily: 'Montserrat, sans-serif',\n                  letterSpacing: '1px',\n                  backgroundColor: selectedCategory === category ? '#d4af37' : 'transparent',\n                  color: selectedCategory === category ? '#0a0a0a' : '#d4af37',\n                  borderColor: '#d4af37'\n                }}\n              >\n                {category}\n              </motion.button>\n            ))}\n          </div>\n        </div>\n      </section>\n\n      {/* Gallery Grid */}\n      <section className=\"py-16 bg-[#0a0a0a]\">\n        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">\n          <motion.div\n            layout\n            className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6\"\n          >\n            <AnimatePresence>\n              {filteredGallery.map((item, index) => (\n                <motion.div\n                  key={item.id}\n                  layout\n                  initial={{ opacity: 0, scale: 0.8 }}\n                  animate={{ opacity: 1, scale: 1 }}\n                  exit={{ opacity: 0, scale: 0.8 }}\n                  transition={{ delay: index * 0.05, duration: 0.5 }}\n                  whileHover={{ y: -10 }}\n                  className=\"group relative overflow-hidden cursor-pointer bg-[#1a1a1a] border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-500\"\n                  onClick={() => setSelectedImage(item)}\n                >\n                  <div className=\"aspect-[3/4] overflow-hidden\">\n                    <img\n                      src={item.image}\n                      alt={item.title}\n                      className=\"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110\"\n                    />\n                  </div>\n                  <div\n                    className=\"absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6\"\n                  >\n                    <span\n                      className=\"text-xs font-medium mb-2 text-[#d4af37] uppercase tracking-wider\"\n                      style={{ fontFamily: 'Montserrat, sans-serif' }}\n                    >\n                      {item.category}\n                    </span>\n                    <h3\n                      className=\"text-xl font-bold mb-2 text-[#f5f5dc]\"\n                      style={{ fontFamily: 'Playfair Display, serif' }}\n                    >\n                      {item.title}\n                    </h3>\n                    <p\n                      className=\"text-sm text-[#f5f5dc]/80\"\n                      style={{ fontFamily: 'Montserrat, sans-serif' }}\n                    >\n                      {item.description}\n                    </p>\n                    <div className=\"mt-4 flex items-center space-x-2 text-[#d4af37]\">\n                      <ZoomIn size={16} />\n                      <span className=\"text-xs uppercase tracking-wider\">View Details</span>\n                    </div>\n                  </div>\n                </motion.div>\n              ))}\n            </AnimatePresence>\n          </motion.div>\n        </div>\n      </section>\n\n      {/* Image Lightbox */}\n      <AnimatePresence>\n        {selectedImage && (\n          <motion.div\n            initial={{ opacity: 0 }}\n            animate={{ opacity: 1 }}\n            exit={{ opacity: 0 }}\n            className=\"fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4\"\n            onClick={() => setSelectedImage(null)}\n          >\n            <button\n              className=\"absolute top-8 right-8 text-[#d4af37] hover:text-[#b8960f] transition-colors\"\n              onClick={() => setSelectedImage(null)}\n            >\n              <X size={32} />\n            </button>\n            <motion.div\n              initial={{ scale: 0.8, opacity: 0 }}\n              animate={{ scale: 1, opacity: 1 }}\n              exit={{ scale: 0.8, opacity: 0 }}\n              transition={{ duration: 0.3 }}\n              className=\"max-w-4xl w-full\"\n              onClick={(e) => e.stopPropagation()}\n            >\n              <img\n                src={selectedImage.image}\n                alt={selectedImage.title}\n                className=\"w-full h-auto rounded-lg shadow-2xl\"\n              />\n              <div className=\"mt-6 text-center\">\n                <span\n                  className=\"text-sm text-[#d4af37] uppercase tracking-wider\"\n                  style={{ fontFamily: 'Montserrat, sans-serif' }}\n                >\n                  {selectedImage.category}\n                </span>\n                <h2\n                  className=\"text-3xl font-bold text-[#f5f5dc] mt-2\"\n                  style={{ fontFamily: 'Playfair Display, serif' }}\n                >\n                  {selectedImage.title}\n                </h2>\n                <p\n                  className=\"text-base text-[#f5f5dc]/70 mt-3\"\n                  style={{ fontFamily: 'Montserrat, sans-serif' }}\n                >\n                  {selectedImage.description}\n                </p>\n              </div>\n            </motion.div>\n          </motion.div>\n        )}\n      </AnimatePresence>\n    </div>\n  );\n};\n\nexport default GalleryLuxury;\n