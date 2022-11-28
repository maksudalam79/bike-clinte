import React from "react";

const Products = ({ product,handleDeleteItem }) => {
  const {
    img,
    name,
    location,
    resaleprice,
    originalprice,
    yearofuse,
    sellerName,
    condition,
    time,
    _id
  } = product;

  

  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Location:{location} </p>
        <p>Resale-Price:{resaleprice} </p>
        <p>Orginal-Price:{originalprice}</p>
        <p>Use:{yearofuse} </p>
        <p>Seller-Name:{sellerName}</p>
        <p>Time: {time}</p>
        <p>{condition}</p>
        <div className="card-actions justify-center">
          <button onClick={()=>handleDeleteItem(_id)} className="btn btn-sm btn-primary">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
