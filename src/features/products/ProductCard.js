import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card product-card">
      <img className="card-img-top" src={product.image} alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <div className="row">
          <div className="col">
            <p className="card-text">Price: ${product.price}</p>
          </div>
          <div className="col">
            <p className="card-text">Old Price: ${product.oldPrice}</p>
          </div>
        </div>
        <p className="card-text">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
