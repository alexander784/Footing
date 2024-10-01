import React from 'react';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ball3 from './assets/ball3.avif';
import About from './components/About';
import ballin3 from './assets/ballin3.avif';
import balling2 from './assets/balling2.avif';
import balling1 from './assets/balling1.avif';
import ball1 from './assets/ball1.avif';
import News from './pages/News';
import Image from './components/Image';

const Home = () => {
    const royal = [
        { image: ballin3, text: "Home of Champions" },
        { image: balling2, text: "Where Balling Reigns" },
        { image: balling1, text: "Kings of Elastico" },
        { image: ball1, text: "Soccer is our meal" },
        { image: ball3, text: "Football Monarchs" },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        centerMode: false, 
        centerPadding: '0',
        adaptiveHeight: true,
    };

    return (
        <div className="relative bg-black">
            <Slider {...sliderSettings}>
                {
                    royal.map((item, index) => (
                        <div key={index} className='h-screen relative'>
                            <img 
                                src={item.image} 
                                alt={`Slide ${index}`} 
                                className='w-full h-full object-cover'
                            />
                            <div className='absolute top-1/2 left-0 transform -translate-y-1/2 p-4 text-white'>
                                <h2 className='text-3xl font-bold text-green-500'>{item.text}</h2>
                                <p className='mt-2'></p>
                            </div>
                        </div>
                    ))
                }
            </Slider>
           
            <About />
            <News />
            <Image />
        </div>
    );
}

export default Home;
