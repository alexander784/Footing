import React from 'react';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Royal1 from './assets/Royalfc1.jpeg';
import Royal2 from './assets/Royalfc2.jpeg';
import Royal3 from './assets/Royalfc3.jpeg';
import Royal4 from './assets/Royalfc4.jpeg';
import Royal5 from './assets/Royalfc5.jpeg';
import About from './components/About';
import balling from './assets/balling.avif';
const Home = () => {
    const royal = [
        { image: balling },
        { image: Royal2 },
        { image: Royal3 },
        { image: Royal4 },
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
        centerMode: true,
        centerPadding: '0',
    };

    return (
        <div className='bg-blue-300'>
        <div className="relative py-16 px-8">
            <Slider {...sliderSettings}>
                {
                    royal.map((item, index) => (
                        <div key={index} className=''>
                            <img src={item.image} alt={''} className='w-full h-screen' />
                        </div>
                    ))
                }
            </Slider>
        </div>
        </div>
    );
}
<About />

export default Home;
