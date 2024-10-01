import React from 'react';
import foot1 from '../assets/foot1.jpeg';
import Africanfootball from '../assets/Africanfootball.avif';


const About = () => {

  return (
    <div className='h-screen'>
      <div 
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center relative" 
        style={{ backgroundImage: `url(${Africanfootball})`, backgroundAttachment: 'fixed' }}
      >
        <h2 className="text-white text-3xl font-bold text-center mb-8 absolute top-8">About</h2>
        <div className="flex flex-col md:flex-row items-start gap-8 z-10">
          <div className="flex-1">
            <div className="p-4">
              <h3 className="text-white text-xl font-bold mb-2">Fueled by enthusiasm, shaped by expertise</h3>
              <p className="mb-4 text-white">
              Foot FC is a passionate football club representing the vibrant spirit of the central region in the heart of Mt. Kenya. <br />
              Established with a deep-rooted love for the game, we are proud to compete in Division Two,
               where we showcase the immense talent and determination of our local players. <br />
                Our mission is to make outdoor adventures accessible, enjoyable, and safe for everyone.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
