import React from "react";

const Reoprt = ({ report,handlereportDelete }) => {
  const { _id, img, name, resaleprice } = report;
  
  return (
    <div className="card card-compact w-48 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="font-bold">{resaleprice} taka</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handlereportDelete(_id)}
            className="btn btn-sm btn-primary"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reoprt;
