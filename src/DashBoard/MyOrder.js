import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const MyOrder = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/buyer?email=${user?.email}`;
  const {
    isLoading,
    error,
    data: buying = [],
  } = useQuery({
    queryKey: ["buyer", user?.email],
    queryFn: () => fetch(url,{
      headers:{
        authorization:`bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then((res) => res.json()),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <h3 className="text-3xl mb-5">My Order</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {buying.map((buy, i) => (
              <tr className="hover" key={buy._id}>
                <th>{i + 1}</th>
                <td>{buy.name}</td>
                <td>{buy.price} taka</td>
                <td>{buy.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
