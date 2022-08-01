import React from 'react';
import './Card.css'

const Card = ({ data }) => {
  const { EName, img } = data;
  return (
    
      <div className="col">
        <div className="card eCard h-100">
          <img src={img} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title text-center">{EName}</h5>
          </div>
        </div>
      </div>
  );
};

export default Card;