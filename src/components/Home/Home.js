import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Home = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setDatas(data))
  }, [])
  return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-md-3 g-3'>
        {
          datas.map(data => <Card
            data={data}
            key={data.id}
          ></Card>)
        }
      </div>
    </div>
  );
};

export default Home;