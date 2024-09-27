import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_UPpluww1xMPXdW4RPHucCYGh7hOhoNg",
  authDomain: "foot-e28bf.firebaseapp.com",
  projectId: "foot-e28bf",
  storageBucket: "foot-e28bf.appspot.com",
  messagingSenderId: "706980037027",
  appId: "1:706980037027:web:cbee076910dd7c24f89a16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };



ReactDOM.render(<App />, document.getElementById('root'));

