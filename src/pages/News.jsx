import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import NewsCard from '../components/NewsCard';

import car_1 from '../images/news/car_1.jpg';
import car_2 from '../images/news/car_2.jpg';
import car_3 from '../images/news/car_3.jpg';

const newsMock = [
  {
    id: 1,
    imgUrl: car_1,
    title: 'Оренда авто',
    description: 'Для юридичних лиць',
  },
  {
    id: 2,
    imgUrl: car_2,
    title: 'Оренда авто',
    description: 'З водієм',
  },
  {
    id: 3,
    imgUrl: car_3,
    title: 'Новинки',
    description: 'Новий асортимент',
  },
];

export default function News() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [news, setNews] = useState([]);

  const { id: newsId } = useParams();

  const { pathname } = useLocation();

  useEffect(() => {
    setNews(newsMock);
    setTitle(newsMock[newsId - 1].title);
    setText(newsMock[newsId - 1].description);
    setImgUrl(newsMock[newsId - 1].imgUrl);
  }, [pathname]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          {news.map(({ id, imgUrl, title, description }, index) => (
            <NewsCard
              key={id}
              id={id}
              imgUrl={imgUrl}
              title={title}
              description={description}
            />
          ))}
        </div>
        <div className="col-lg-9">
          <img src={imgUrl} alt={title} />
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
