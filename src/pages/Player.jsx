import React, { useState } from 'react';
import { useFormik } from 'formik';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../index';

const PlayerUploadForm = () => {
  const [message, setMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      playPosition: '',
      idCopy: null,
      passport: null,
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        let idCopyUrl = '';
        let passportUrl = '';

        if (values.idCopy) {
          idCopyUrl = await uploadFile(values.idCopy, `players/${values.name}_idCopy`);
        }

        if (values.passport) {
          passportUrl = await uploadFile(values.passport, `players/${values.name}_passport`);
        }

        await addDoc(collection(db, 'players'), {
          name: values.name,
          age: values.age,
          playPosition: values.playPosition,
          idCopyUrl: idCopyUrl,
          passportUrl: passportUrl,
        });

        setMessage('Player information uploaded successfully!');
        resetForm();
      } catch (error) {
        console.error('Error uploading player info:', error);
        setMessage('Failed to upload player information.');
      }
    },
  });

  const uploadFile = async (file, filePath) => {
    const storageRef = ref(storage, filePath);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  };

  return (
    <div className="bg-blue-300 p-8 max-w-md mx-auto mt-10 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Upload Player Information</h2>
      
      {message && <p className="text-green-500 text-center mb-4">{message}</p>}

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-600 mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Age:</label>
          <input
            type="number"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Play Position:</label>
          <input
            type="text"
            name="playPosition"
            value={formik.values.playPosition}
            onChange={formik.handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">ID Copy:</label>
          <input
            type="file"
            name="idCopy"
            onChange={(event) => formik.setFieldValue('idCopy', event.currentTarget.files[0])}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Passport:</label>
          <input
            type="file"
            name="passport"
            onChange={(event) => formik.setFieldValue('passport', event.currentTarget.files[0])}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-900  text-white font-semibold p-2 rounded-md"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default PlayerUploadForm;