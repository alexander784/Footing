import React from 'react';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Royal5 from './assets/Royalfc5.jpeg';
import About from './components/About';
import ballin3 from './assets/ballin3.avif';
import balling2 from './assets/balling2.avif';
import balling1 from './assets/balling1.avif';
import ball1 from './assets/ball1.avif';
import News from './pages/News';
import Image from './components/Image';

const Home = () => {

    const royal = [
        { image: ballin3 },
        { image: balling2 },
        { image: balling1 },
        { image: ball1 },
        { image: Royal5 },
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
                        <div key={index} className='h-screen'>
                            <img 
                                src={item.image} 
                                alt={`Slide ${index}`} 
                                className='w-full h-full object-cover'
                            />
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
