import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../index';

const SigningsList = () => {
  const [signings, setSignings] = useState([]);

  // Fetch signings' data from Firestore
  useEffect(() => {
    const fetchSignings = async () => {
      try {
        const signingsCollection = collection(db, 'Signings');
        const signingsSnapshot = await getDocs(signingsCollection);
        const signingsList = signingsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log('signings:', signings);
        setSignings(signingsList);
      } catch (error) {
        console.error('Error fetching signings: ', error);
      }
    };

    fetchSignings();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Recent Signings</h2>
      {signings.length === 0 ? (
        <p className="text-center">No signings available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {signings.map(signing => (
            <div key={signing.id} className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-2">{signing.name}</h3>
              <p className="mb-1"><strong>Age:</strong> {signing.age}</p>
              <p className="mb-1"><strong>Former Club:</strong> {signing.formerClub}</p>
              <p className="mb-1"><strong>Position:</strong> {signing.position}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SigningsList;
