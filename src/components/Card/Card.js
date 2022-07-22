import React from 'react';

const Card = ({ data }) => {
  const { EName, img } = data;
  return (
    
      <div className="col rounded">
        <div className="card">
          <img src={img} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{EName}</h5>
          </div>
        </div>
      </div>
  );
};

export default Card;