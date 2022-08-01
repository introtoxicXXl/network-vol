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
    <div className='container mb-5'>
      <div>
        <h2 className='text-center fw-bold mt-5 mb-4'>I grow by helping people in need.</h2>
        <div className="input-group w-25 mb-4 m-auto">
          <input type="text" className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
        </div>
      </div>
      <div className='row row-cols-1 row-cols-md-4 g-3'>
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