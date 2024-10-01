import React, { useState } from 'react'

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
          console.log('FIle available at', downloadURL);
        });
      }
    );
  };




  return (
    <div></div>
  )
}

export default Gallery