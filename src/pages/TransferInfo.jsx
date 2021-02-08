import React, { useEffect, useState } from 'react';
import { fetchTransferInfo } from '../utils/fetchTransferInfo';
import { useParams } from 'react-router-dom';

export default function TransferInfo() {
  const [transfer, setTransfer] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    fetchTransferInfo(slug, localStorage.getItem('lang'))
      .then((res) => setTransfer(res))
      .catch((err) => console.dir(err));
  }, []);

  return (
    <div className="navbar-offset">
      <div className="container">
        <h3 className="text-center mb-3">{transfer.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: transfer.content_html }}></div>
        <div className="navbar-offset"></div>
      </div>
    </div>
  );
}
