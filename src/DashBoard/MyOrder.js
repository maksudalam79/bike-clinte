import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
        `https://bike-resell-server.vercel.app/buyer?email=${user?.email}`,
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
  console.log(buying);
  if (isLoading) return <Loading></Loading>;

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <h3 className="text-3xl mb-5 ml-2">My Order</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Location</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {buying.length > 0
              ? buying?.map((buy, i) => (
                  <tr className="hover" key={buy._id}>
                    <th>{i + 1}</th>
                    <td>{buy.name}</td>
                    <td>{buy.price} taka</td>
                    <td>{buy.location}</td>
                    <td>
                      {buy.price && !buy.paid && (
                        <Link to={`/dashBoard/payment/${buy._id}`}>
                          <button className="btn btn-sm">Pay</button>
                        </Link>
                      )}
                      {buy.price && buy.paid && (
                        <span className="text-black">Paid</span>
                      )}
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
