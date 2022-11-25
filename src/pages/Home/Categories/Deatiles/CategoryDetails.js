import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookModal from "./BookModal/BookModal";
import ProductDetails from "./ProductDetails";

const CategoryDetails = () => {
  const category = useLoaderData();
  const [product,setProduct]=useState(null)
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-4 bg-[#131313]">
      {category.products.map((product) => (
        <ProductDetails 
        product={product}
        setProduct={setProduct}
        ></ProductDetails>
      ))}
      <div>
        <BookModal
        product={product}
        ></BookModal>
      </div>
    </div>
  );
};

export default CategoryDetails;
