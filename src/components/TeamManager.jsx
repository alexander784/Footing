import React, { useEffect, useState } from 'react';
import PlayerUploadForm from '../pages/Player';
import Display from '../pages/Display';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; 

const TeamManager = () => {
    const [players, setPlayers] = useState([]);
    const [uploadedPlayer, setUploadedPlayer] = useState(null);

    const fetchPlayers = async () => {
        try {
            const playersCollection = collection(db, 'players');
            const playerSnapshot = await getDocs(playersCollection);
            const playerList = playerSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            console.log(playerList); 
            setPlayers(playerList);
        } catch (error) {
            console.error('Error fetching players', error);
        }
    };

    useEffect(() => {
        fetchPlayers(); 

        if (uploadedPlayer) {
            setPlayers(prevPlayers => [...prevPlayers, uploadedPlayer]);
        }
    }, [uploadedPlayer]);

    return (
        <div>
            <PlayerUploadForm setUploadedPlayer={setUploadedPlayer} />
            {players.length > 0 ? (
                players.map((player) => (
                    <Display key={player.id} player={player} />
                ))
            ) : (
                <p className="text-center mt-4">No players uploaded yet.</p>
            )}
        </div>
    );
};

export default TeamManager;
