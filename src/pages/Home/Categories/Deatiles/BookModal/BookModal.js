import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../context/AuthProvider";

const BookModal = ({ item }) => {
  console.log(item);
  const { name, resaleprice, img } = item;
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
      name,
      buyerName: name,
      email,
      phone,
      price,
      location,
    };
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
          <h3 className="text-lg font-bold">{name}</h3>
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
              <p>
                Plzzz <Link to="/login">Log in</Link>{" "}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default BookModal;
