import React, { useState } from 'react';
import { ref,uploadBytesResumable,getDownloadURL } from 'firebase/storage';
import { storage } from '..';

const Gallery = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [imageURL, setImageURL] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return;

    const storageRef = ref(storage, `image/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);


    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) *100;
        setProgress(progress);
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        console.error('Upload failed:', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
        .then((downloadURL) => {
          setImageURL(downloadURL);
          console.log('File available at', downloadURL);
        });
      }
    );
  };




  return (
      <div>
        <h2>Gallery</h2>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        <p>Upload progress: {progress}%</p>
        {imageURL && <img src={imageURL} alt="Uploaded file" />}
      </div>
    );
  };
  
export default Gallery