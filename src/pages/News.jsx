import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../index'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const News = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const newsCollection = collection(db, 'news');
      const newsSnapshot = await getDocs(newsCollection);
      const newsList = newsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNewsArticles(newsList);
    };

    fetchNews();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true,
    centerPadding: '0',
    adaptiveHeight: true,
  };

  return (
    <div className="bg-black max-w-8xl mx-auto p-6 h-screen">
      <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white text-center">Latest News</h2>

      {newsArticles.length === 0 ? (
        <p className="text-white text-center">No news today</p>
      ) : (
        <Slider {...sliderSettings}>
          {newsArticles.map(news => (
            <div key={news.id} className="p-4 shadow-lg rounded-lg">
              {news.imageUrl && (
                <img 
                  src={news.imageUrl} 
                  alt={news.title} 
                  className="w-full h-[300px] object-cover  mb-4" 
                />
              )}
              <h3 className="text-white text-lg lg:text-xl font-semibold">{news.title}</h3>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default News;
