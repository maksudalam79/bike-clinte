import React, { useContext, useState } from "react";
import toast from "react-hot-toast";

const ProductDetails = ({ product, handlerModal }) => {
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
  } = product;

  const handlerWishlist = (w) => {
    fetch("https://bike-resell-server.vercel.app/wishList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(w),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Product add your wishList");
      });
  };
  const handlerreport = (r) => {
    fetch("https://bike-resell-server.vercel.app/report", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(r),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Report this product");
      });
  };

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
          <label
            onClick={() => handlerModal(product)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-primary"
          >
            Book Now
          </label>
          <label
            onClick={() => handlerWishlist(product)}
            className="btn btn-sm btn-primary"
          >
            wishlist
          </label>
          <label
            onClick={() => handlerreport(product)}
            className="btn btn-sm btn-primary"
          >
            Report
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
