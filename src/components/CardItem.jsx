import React from 'react';
import './CardItem.css';

const CardItem = ({ image, title, description }) => {
  return (
    <div className="card custom-card shadow-sm">
      <div className="card-img-container">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-overlay">
          <p className="card-text">{description}</p>
        </div>
      </div>
      <div className="card-body text-center">
        <h6 className="card-title fw-bold">{title}</h6>
      </div>
    </div>
  );
};

export default CardItem;