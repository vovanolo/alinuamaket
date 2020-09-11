import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function News() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const { id: newsId } = useParams();

  useEffect(() => {
    // News request
  }, []);

  return (
    <div>
      <h3>{newsId}</h3>
    </div>
  );
}
