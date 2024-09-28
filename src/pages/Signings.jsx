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
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Recent Signings</h2>
      {signings.length === 0 ? (
        <p>No signings.</p>
      ) : (
        <div className="space-y-4">
          {signings.map(signing => (
            <div key={signing.id} className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">{signing.name}</h3>
              <p><strong>Age:</strong> {signing.age}</p>
              <p><strong>Former Club:</strong> {signing.formerClub}</p>
              <p><strong>Position:</strong> {signing.position}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SigningsList;
