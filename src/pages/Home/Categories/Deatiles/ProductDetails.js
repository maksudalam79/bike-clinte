import React from 'react';

const ProductDetails = ({product}) => {
    const {img,name,location,resaleprice,originalprice,yearofuse,sellerName,condition}=product

    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Location: {location}</p>
          <p>Resale-Price: {resaleprice}</p>
          <p>Orginal-Price{originalprice}</p>
          <p>Use: {yearofuse}</p>
          <p>Seller-Name:{sellerName}</p>
          <p>{condition}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;