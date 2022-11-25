import React, { useState } from "react";
import { DayPicker } from 'react-day-picker';
import image from '../../asset/catagories Bike Img/fastest-motorcycles-top-speed-list-luxe-digital-1200x600.jpg'

const AddAProducts = () => {
    const [dateSelected,setdateSelected]=useState(new Date())
  return (
    <div className="hero min-h-screen bg-base-200 "style={{ backgroundImage:`url(${image})`}}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left text-white">
        <DayPicker
      mode="single"
      selected={dateSelected}
      onSelect={setdateSelected}
    
    />
        
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Condition
                </option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="Number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                 Location
                </option>
                <option>Dhaka</option>
                <option>Chandpur</option>
                <option>Hajigong</option>
              </select>
             
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add a Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAProducts;
