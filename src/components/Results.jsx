import React from 'react';
import eagles from '../assets/eagles.png';
import score from '../assets/score.jpeg';
import score1 from '../assets/score1.jpeg';
import score3 from '../assets/score3.jpeg';
import score4 from '../assets/score4.png';
import score2 from '../assets/score2.jpeg';

const ScoreboardColumn = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0 items-center bg-green-950 text-white p-4 sm:p-6">
      
      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-md bg-gray-800 p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
        <div className="flex flex-col items-center sm:w-1/3 w-full mb-4 sm:mb-0">
          <img
            src={score2}
            alt="Keithston Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover"
          />
          <h2 className="text-base sm:text-lg font-bold mt-2">Keithston FC</h2>
        </div>

        <div className="flex flex-col justify-center items-center sm:w-1/3 w-full mb-4 sm:mb-0">
          <p className="text-gray-400 text-xs sm:text-sm">30 Sep 2024</p>
          <p className="text-gray-400 text-xs mb-2">cup league</p>
          <div className="bg-gray-300 text-black text-2xl sm:text-3xl font-bold w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
            4<span className="mx-2">-</span>2
          </div>
        </div>

        <div className="flex flex-col items-center sm:w-1/3 w-full">
          <img
            src={score}
            alt="Warrior Spencer Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover"
          />
          <h2 className="text-base sm:text-lg font-bold mt-2">Warrior Spencer FC</h2>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-md bg-gray-800 p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
        <div className="flex flex-col items-center sm:w-1/3 w-full mb-4 sm:mb-0">
          <img
            src={score3}
            alt="Team A Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover"
          />
          <h2 className="text-base sm:text-lg font-bold mt-2">Deutsch FC</h2>
        </div>

        <div className="flex flex-col justify-center items-center sm:w-1/3 w-full mb-4 sm:mb-0">
          <p className="text-gray-400 text-xs sm:text-sm">30 Sep 2024</p>
          <p className="text-gray-400 text-xs mb-2">cup league</p>
          <div className="bg-gray-300 text-black text-2xl sm:text-3xl font-bold w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
            3<span className="mx-2">-</span>1
          </div>
        </div>

        <div className="flex flex-col items-center sm:w-1/3 w-full">
          <img
            src={score1}
            alt="Team B Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover"
          />
          <h2 className="text-base sm:text-lg font-bold mt-2">Germa FC</h2>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-md bg-gray-800 p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
        <div className="flex flex-col items-center sm:w-1/3 w-full mb-4 sm:mb-0">
          <img
            src={score4}
            alt="Team X Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover"
          />
          <h2 className="text-base sm:text-lg font-bold mt-2">Bourcelle FC</h2>
        </div>

        <div className="flex flex-col justify-center items-center sm:w-1/3 w-full mb-4 sm:mb-0">
          <p className="text-gray-400 text-xs sm:text-sm">10 Oct 2024</p>
          <p className="text-gray-400 text-xs mb-2">Friendly</p>
        </div>

        <div className="flex flex-col items-center sm:w-1/3 w-full">
          <img
            src={eagles}
            alt="Team Y Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover"
          />
          <h2 className="text-base sm:text-lg font-bold mt-2">Eagles FC</h2>
        </div>
      </div>

    </div>
  );
};

export default ScoreboardColumn;
