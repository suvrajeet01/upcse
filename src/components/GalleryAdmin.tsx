import React, { useState } from 'react';
import { Upload, X, Check } from 'lucide-react';

const GalleryAdmin: React.FC = () => {
  const [newImage, setNewImage] = useState({
    title: '',
    description: '',
    imageUrl: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage('Image added successfully to the gallery!');
      setNewImage({
        title: '',
        description: '',
        imageUrl: ''
      });
      
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Add New Gallery Image</h2>
      
      {successMessage && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md flex items-center">
          <Check size={20} className="mr-2" />
          {successMessage}
        </div>
      )}
      
      {errorMessage && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md flex items-center">
          <X size={20} className="mr-2" />
          {errorMessage}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={newImage.title}
            onChange={(e) => setNewImage({...newImage, title: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={newImage.description}
            onChange={(e) => setNewImage({...newImage, description: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="imageUrl" className="block text-gray-700 font-medium mb-2">
            Image URL
          </label>
          <input
            type="url"
            id="imageUrl"
            value={newImage.imageUrl}
            onChange={(e) => setNewImage({...newImage, imageUrl: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com/image.jpg"
            required
          />
          <p className="mt-1 text-sm text-gray-500">
            Enter a direct URL to your image. You can upload images to services like ImgBB or Imgur and paste the link here.
          </p>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`flex items-center justify-center w-full py-2 px-4 rounded-md text-white font-medium ${
            isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
          } transition-colors`}
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin mr-2">⟳</span>
              Processing...
            </>
          ) : (
            <>
              <Upload size={18} className="mr-2" />
              Add to Gallery
            </>
          )}
        </button>
      </form>
      
      <div className="mt-8 border-t pt-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Instructions for Adding Images</h3>
        <ol className="list-decimal pl-5 space-y-2 text-gray-600">
          <li>Take a screenshot or scan of the news article you want to add</li>
          <li>Upload the image to an image hosting service like <a href="https://imgbb.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ImgBB</a></li>
          <li>Copy the direct image URL provided by the hosting service</li>
          <li>Paste the URL in the Image URL field above</li>
          <li>Add a descriptive title and description</li>
          <li>Click "Add to Gallery" to submit</li>
        </ol>
      </div>
    </div>
  );
};

export default GalleryAdmin;