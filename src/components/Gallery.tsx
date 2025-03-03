import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const newsImages = [
    {
      id: 1,
      title: "Pankaj Pandey appointed as Organization Secretary",
      imageUrl: "https://i.ibb.co/yFd9Q7cr/1-1.jpg",
      description: "Pankaj Pandey has been appointed as the Organization Secretary of Uttar Pradesh Sports Council."
    },
    {
      id: 2,
      title: "UP Sports Council Organization Secretary",
      imageUrl: "https://i.ibb.co/JjhG0N0w/1-2.jpg",
      description: "Pankaj Pandey becomes the Organization Secretary of UP Sports Council."
    },
    {
      id: 3,
      title: "UP Sports Council Secretary Appointment",
      imageUrl: "https://i.ibb.co/QvGNx7wD/1-3.jpg",
      description: "Pankaj Pandey appointed as the Organization Secretary of UP Sports Council."
    },
    {
      id: 4,
      title: "JRF Success Story",
      imageUrl: "https://i.ibb.co/wrLBxwgV/1-4.jpg",
      description: "Success story of a student clearing JRF examination."
    },
    {
      id: 5,
      title: "Gold Medal Winners Honored",
      imageUrl: "https://i.ibb.co/gbKb3nN1/1-5.jpg",
      description: "Students who won gold medals in the National Championship being honored."
    },
    {
      id: 6,
      title: "Gold Medal Winners Honored",
      imageUrl: "https://i.ibb.co/VcJ4bhN2/1-6.jpg",
      description: "Students who won gold medals in the National Championship being honored."
    },
    {
      id: 7,
      title: "Gold Medal Winners Honored",
      imageUrl: "https://i.ibb.co/2197sGBJ/1-7.jpg",
      description: "Students who won gold medals in the National Championship being honored."
    },
    {
      id: 8,
      title: "Gold Medal Winners Honored",
      imageUrl: "https://i.ibb.co/8DGwvJTr/1-8.jpg",
      description: "Students who won gold medals in the National Championship being honored."
    },
    {
      id: 9,
      title: "Gold Medal Winners Honored",
      imageUrl: "https://i.ibb.co/gLW7b878/1-9.jpg",
      description: "Students who won gold medals in the National Championship being honored."
    },
    {
      id: 10,
      title: "Gold Medal Winners Honored",
      imageUrl: "https://i.ibb.co/7tPzbx0Z/1-10.jpg",
      description: "Students who won gold medals in the National Championship being honored."
    },
    {
      id: 11,
      title: "Gold Medal Winners Honored",
      imageUrl: "https://i.ibb.co/TBv7y7wL/1-11.jpg",
      description: "Students who won gold medals in the National Championship being honored."
    },
    {
      id: 12,
      title: "Gold Medal Winners Honored",
      imageUrl: "https://i.ibb.co/S4Z8Nzk9/1-12.jpg",
      description: "Students who won gold medals in the National Championship being honored."
    },
    {
      id: 13,
      title: "Gold Medal Winners Honored",
      imageUrl: "https://i.ibb.co/ch41KNhS/1-13.jpg",
      description: "Students who won gold medals in the National Championship being honored."
    }
  ];

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">News Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsImages.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              onClick={() => openLightbox(item.imageUrl)}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-blue-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">Click on any news item to view in full size</p>
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white bg-blue-800 rounded-full p-2"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          <div 
            className="max-w-4xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;