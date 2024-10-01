import React from 'react';

const Display = ({ player }) => {
    return (
        <div className="bg-green-100 p-8 max-w-md mx-auto mt-10 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Player Information</h2>
            <p><strong>Name:</strong> {player.name}</p>
            <p><strong>Age:</strong> {player.age}</p>
            <p><strong>Position:</strong> {player.playPosition}</p>
            <p>
                <strong>ID Copy:</strong> 
                {player.idCopyUrl ? (
                    <a href={player.idCopyUrl} target="_blank" rel="noopener noreferrer">View ID Copy</a>
                ) : (
                    <span>Id not available</span>
                )}
            </p>
            <p>
                <strong>Passport:</strong> 
                {player.passportUrl ? (
                    <a href={player.passportUrl} target="_blank" rel="noopener noreferrer">View Passport</a>
                ) : (
                    <span>No Passport available</span>
                )}
            </p>
        </div>
    );
};

export default Display;
