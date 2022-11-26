import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookModal from "./BookModal/BookModal";
import ProductDetails from "./ProductDetails";

const CategoryDetails = () => {
  const category = useLoaderData();
 
  const [item, setItem] = useState(null);

  const handlerModal = (e) => {
    setItem(e);
  };

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-4 bg-[#131313]">
      {category.map((product) => (
        <ProductDetails
          product={product}
          setItem={product}
          handlerModal={handlerModal}
        ></ProductDetails>
      ))}
      <>{item && <BookModal item={item}setItem={setItem}></BookModal>}</>
    </div>
   
  );
};

export default CategoryDetails;
