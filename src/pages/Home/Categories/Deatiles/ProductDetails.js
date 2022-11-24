import React from 'react';

const ProductDetails = ({product}) => {
    const {img,name,location,resaleprice,originalprice,yearofuse,sellerName,condition}=product

    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{location}</p>
          <p>{resaleprice}</p>
          <p>{originalprice}</p>
          <p>{yearofuse}</p>
          <p>{sellerName}</p>
          <p>{condition}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;