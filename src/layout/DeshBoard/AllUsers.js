import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loading from "../share/loading/Loading";

const AllUsers = () => {
  const {
    isLoading,
    error,
    data: users = [],
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://bike-resell-server.vercel.app/users").then((res) =>
        res.json()
      ),
  });
  console.log(users);
  if (isLoading) return <Loading></Loading>;
  if (error) return "An error has occurred: " + error.message;

  const handlerUbdateBtn = (id) => {
    fetch(`https://bike-resell-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Admin successful");
          refetch();
        }
      });
  };

  return (
    <div>
      <h3 className="text-4xl font-bold text-center">All Users</h3>
      <div className="overflow-x-auto m-2">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handlerUbdateBtn(user?._id)}
                      className="btn btn-sm btn-primary"
                    >
                      Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
