import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../share/loading/Loading";
import Products from "./Products";

const MyProducts = () => {
  const {
    isLoading,
    error,
    data: products = [],
  } = useQuery({
    queryKey: ["bikeProduct"],
    queryFn: () =>
      fetch("https://bike-resell-server.vercel.app/bikeProduct").then((res) =>
        res.json()
      ),
  });
  console.log(products);
  if (isLoading) return <Loading></Loading>;
  if (error) return "An error has occurred: " + error.message;
  const handleDeleteItem = (id) => {
    fetch(`https://bike-resell-server.vercel.app/bikeProduct/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("delete successfully");
        }
      });
  };
  return (
    <div>
      <h3 className="text-4xl font-bold ml-2">All Products</h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-4 my-5">
        {products.map((product) => (
          <Products
            key={product._id}
            product={product}
            handleDeleteItem={handleDeleteItem}
          ></Products>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
