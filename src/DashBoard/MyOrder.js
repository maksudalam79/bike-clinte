import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Loading from "../layout/share/loading/Loading";

const MyOrder = () => {
  const { user } = useContext(AuthContext);

  const {
    isLoading,
    error,
    data: buying = [],
  } = useQuery({
    queryKey: ["buyer", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/buyer?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) return <Loading></Loading>;

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
            {
            buying &&
            buying?.map((buy, i) => (
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
