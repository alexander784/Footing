import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../index'; 

const News = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    // Fetch news articles from Firestore
    const fetchNews = async () => {
      const newsCollection = collection(db, 'news');
      const newsSnapshot = await getDocs(newsCollection);
      const newsList = newsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNewsArticles(newsList);
    };

    fetchNews();
  }, []);

  return (
    <div className="bg-green-500 max-w-8xl mx-auto p-6 h-auto lg:h-80"> 
      <h2 className="text-2xl lg:text-3xl font-bold mb-4">Latest News</h2>
      {newsArticles.length === 0 ? (
        <p>No news Today</p>
      ) : (
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 overflow-x-auto"> 
          {newsArticles.map(news => (
            <div key={news.id} className="bg-white p-4 shadow-lg rounded-lg min-w-[280px] lg:min-w-[300px]">
              <h3 className="text-lg lg:text-xl font-semibold">{news.title}</h3>
              <p className="text-gray-600">{news.description}</p>
              {news.url && (
                <a
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Read more
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
