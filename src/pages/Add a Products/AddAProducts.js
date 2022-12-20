import { format } from "date-fns";
import React, { useContext, useState } from "react";
import { DayPicker } from "react-day-picker";
import toast from "react-hot-toast";
import image from "../../asset/catagories Bike Img/fastest-motorcycles-top-speed-list-luxe-digital-1200x600.jpg";
import { AuthContext } from "../../context/AuthProvider";

const AddAProducts = () => {
  const { user } = useContext(AuthContext);
  const [dateSelected, setdateSelected] = useState(new Date());
  const date = format(dateSelected, "PP");
  const time = new Date();
  console.log(time);
  const handlerAddproduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const category = form.category.value;
    const date = form.date.value;
    const photo = form.photo.value;
    const name = form.name.value;
    const location = form.location.value;
    const resaleprice = form.resaleprice.value;
    const originalprice = form.originalprice.value;
    const yearofuse = form.yearofuse.value;
    const sellerName = form.sellerName.value;

    const addProduct = {
      category,
      date,
      photo,
      name,
      location,
      resaleprice,
      originalprice,
      yearofuse,
      sellerName,
      time,
    };
    fetch("https://bike-resell-server.vercel.app/bikeProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        toast.success("add your service");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div
      className="hero min-h-screen bg-base-200 "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <DayPicker
            mode="single"
            selected={dateSelected}
            onSelect={setdateSelected}
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handlerAddproduct} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                name="category"
                type="number"
                placeholder="CategoryID"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                name="date"
                type="text"
                value={date}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Image</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Image URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Product Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                name="location"
                type="text"
                placeholder="Location"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resale-Price</span>
              </label>
              <input
                name="resaleprice"
                type="number"
                placeholder="Resale-Price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Original-Price</span>
              </label>
              <input
                name="originalprice"
                type="number"
                placeholder="Original-Price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Year-Of-Use</span>
              </label>
              <input
                name="yearofuse"
                type="number"
                placeholder="Year-Of-Use"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                name="sellerName"
                type="text"
                disabled
                value={user?.displayName}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Condition</span>
              </label>
              <input
                name="condition"
                type="text"
                placeholder="Condition"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <input className="btn" type="submit" value="Add Product" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAProducts;
