import React from 'react';
import eagles from '../assets/eagles.png';
import score from '../assets/score.jpeg';
import score1 from '../assets/score1.jpeg';
import score3 from '../assets/score3.jpeg';
import score4 from '../assets/score4.png';
import score2 from '../assets/score2.jpeg';

const ScoreboardColumn = () => {
  return (
    <div className="flex flex-col items-center space-y-12 bg-black text-white p-6">
      
      <div className="flex justify-between items-center w-full max-w-md bg-gray-800 p-4 rounded-lg">
        <div className="flex flex-col items-center w-1/3">
          <img
            src={score2}
            alt="Keithston Logo"
            className="w-24 h-24 object-cover"
          />
          <h2 className="text-lg font-bold mt-2">Keithston FC</h2>
        </div>

        <div className="flex flex-col justify-center items-center w-1/3">
          <p className="text-gray-400 text-sm">30 Sep 2024</p>
          <p className="text-gray-400 text-xs mb-2">cup league</p>
          <div className="bg-gray-300 text-black text-3xl font-bold w-24 h-24 flex items-center justify-center rounded-lg">
            4<span className="mx-2">-</span>2
          </div>
        </div>

        <div className="flex flex-col items-center w-1/3">
          <img
            src={score}
            alt="Warrior Spencer Logo"
            className="w-24 h-24 object-cover"
          />
          <h2 className="text-lg font-bold mt-2">Warrior Spencer FC</h2>
        </div>
      </div>

      <div className="flex justify-between items-center w-full max-w-md bg-gray-800 p-4 rounded-lg">
        <div className="flex flex-col items-center w-1/3">
          <img
            src={score3}
            alt="Team A Logo"
            className="w-24 h-24 object-cover"
          />
          <h2 className="text-lg font-bold mt-2">Deutsch FC</h2>
        </div>

        <div className="flex flex-col justify-center items-center w-1/3">
          <p className="text-gray-400 text-sm">30 Sep 2024</p>
          <p className="text-gray-400 text-xs mb-2">cup league</p>
          <div className="bg-gray-300 text-black text-3xl font-bold w-24 h-24 flex items-center justify-center rounded-lg">
            3<span className="mx-2">-</span>1
          </div>
        </div>

        <div className="flex flex-col items-center w-1/3">
          <img
            src={score1}
            alt="Team B Logo"
            className="w-24 h-24 object-cover"
          />
          <h2 className="text-lg font-bold mt-2">Germa FC</h2>
        </div>
      </div>

      <div className="flex justify-between items-center w-full max-w-md bg-gray-800 p-4 rounded-lg">
        <div className="flex flex-col items-center w-1/3">
          <img
            src={score4}
            alt="Team X Logo"
            className="w-24 h-24 object-cover"
          />
          <h2 className="text-lg font-bold mt-2">Bourcelle FC</h2>
        </div>

        <div className="flex flex-col justify-center items-center w-1/3">
          <p className="text-gray-400 text-sm">10 oct Sep 2024</p>
          <p className="text-gray-400 text-xs mb-2">Friendly</p>
          {/* <div className="bg-gray-300 text-black text-3xl font-bold w-24 h-24 flex items-center justify-center rounded-lg">
            5<span className="mx-2">-</span>3
          </div> */}
        </div>

        <div className="flex flex-col items-center w-1/3">
          <img
            src={eagles}
            alt="Team Y Logo"
            className="w-24 h-24 object-cover"
          />
          <h2 className="text-lg font-bold mt-2">Eagles FC</h2>
        </div>
      </div>

    </div>
  );
};

export default ScoreboardColumn;
