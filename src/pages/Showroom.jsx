import React from 'react';
import { db } from '..';
import { useEffect,useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '..';


const Showroom = () => {
    const [imageURLs, setImageURLs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    // Fetch images from Firebase Storage
    useEffect(() => {
      const fetchImages = async () => {
        const storageRef = ref(storage, 'image'); 
  
        try {
          const result = await listAll(storageRef);
          const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));
          const urls = await Promise.all(urlPromises);
          setImageURLs(urls);
          setLoading(false);
        } catch (error) {
          setError('Failed to fetch images');
          setLoading(false);
        }
      };
  
      fetchImages();
    }, []);
  
    return (
        <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold text-center mb-6">Our Showroom</h2>
        
        {loading && <p className="text-center text-gray-500">Loading gallery...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {imageURLs.length === 0 && !loading ? (
            <p className="text-center text-gray-400 col-span-full">No images available</p>
          ) : (
            imageURLs.map((url, index) => (
              <div key={index} className="relative">
                <img
                  src={url}
                  alt={`Uploaded file ${index}`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
            ))
          )}
        </div>
      </div>
      
    );
  };
  
  export default Showroom;




 
