import React from 'react';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Royal4 from './assets/Royalfc4.jpeg';
import Royal5 from './assets/Royalfc5.jpeg';
import About from './components/About';
import balling from './assets/balling.avif';
import homepage from './assets/homepage.avif';
import homepage1 from './assets/homepage1.avif';
import ball1 from './assets/ball1.avif';
import News from './pages/News';
import Image from './components/Image';
const Home = () => {
    const royal = [
        { image: balling },
        { image: homepage},
        { image: homepage1},
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
        centerMode: true,
        centerPadding: '0',
    };

    return (
        <div className=''>
        <div className="relative pt-16">
            <Slider {...sliderSettings}>
                {
                    royal.map((item, index) => (
                        <div key={index} className='h-screen'>
                            <img src={item.image} alt={''} className='w-full h-screen' />
                        </div>
                    ))
                }
            </Slider>
        </div>
       <About />
       <News />
       <Image />
        </div>
    );
}

export default Home;
