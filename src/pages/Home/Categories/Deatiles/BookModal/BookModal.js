import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../context/AuthProvider";

const BookModal = ({ item, setItem, handlerWishList }) => {
  const { name: productName, resaleprice, img } = item;
  const { user } = useContext(AuthContext);
  const handlarModalSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const price = from.price.value;
    const phone = from.phone.value;
    const location = from.location.value;

    const buyer = {
      name: productName,
      buyerName: name,
      email,
      phone,
      price,
      location,
    };
    fetch("https://bike-resell-server.vercel.app/buyer", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(buyer),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Thank you so much for your order");
          from.reset();
          setItem(null);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{productName}</h3>
          <img src={img} alt="" />
          <form
            onSubmit={handlarModalSubmit}
            className="grid grid-cols-1 gap-6 mt-16"
          >
            <input
              name="name"
              type="text"
              disabled
              value={user?.displayName}
              className="input input-bordered w-full"
            />
            <input
              name="email"
              type="email"
              disabled
              value={user?.email}
              className="input input-bordered w-full"
            />
            <input
              name="price"
              type="number"
              disabled
              value={resaleprice}
              className="input input-bordered w-full"
            />
            <input
              name="phone"
              type="number"
              placeholder="Your Phone Number"
              className="input input-bordered w-full"
            />
            <input
              name="location"
              type="text"
              placeholder="Your Meeting Location"
              className="input input-bordered w-full"
            />

            {user?.email ? (
              <input className="btn w-full" type="submit" value="Submit" />
            ) : (
              <Link to="/login">
                <button className="btn btn-sm">Log In</button>
              </Link>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default BookModal;
