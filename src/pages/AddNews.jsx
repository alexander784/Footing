import React, { useState } from 'react'
import { storage,db } from '..';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';


const AddNews = () => {
    const[title, setTitle] = useState('');
    const[image, setImage] = useState(null);
    const[isSubmitting, setIsSubmitting] = useState(false);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        let imageUrl = '';

        if (image) {
            const imageRef = ref(storage, `news/${image.name}`);
            await uploadBytes(imageRef, image);
            imageUrl = await getDownloadURL(imageRef);
        }

        await addDoc(collection(db, 'news'), {
            title,
            imageUrl,
        });
        setTitle('');
        setImage(null);
        setIsSubmitting(false);

    }

  return (
    <div className="bg-gray-100 p-6 rounded mb-6">
    <h2 className="text-2xl font-bold mb-4 text-center">Add News</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Image</label>
        <input
          type="file"
          onChange={handleImageChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className={`bg-orange-900 text-white py-2 px-4 rounded ${isSubmitting ? 'opacity-50' : ''}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit News'}
      </button>
    </form>
  </div>
   
  )
}

export default AddNews;