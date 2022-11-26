import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import CategoriesSection from "./CategoriesSection";
const Categories = () => {
  
  const { isLoading, error, data:categories } = useQuery({
    
    queryKey: ['bikeCategories'],
    queryFn: () =>
      fetch('http://localhost:5000/bikeCategories')
      .then(res =>res.json())
     
  })
  if (isLoading){
    return <progress className="progress w-56"></progress>
  }
if (error) return 'An error has occurred: ' + error.message



  return (
    <div className="">
      <h2 className="text-5xl mx-auto text-center bg-[#131313] text-white font-bold p-5">Our Services</h2>
      {
        categories.map(cate=><CategoriesSection
        key={cate.id}
        cate={cate}
      
        ></CategoriesSection>)
      }
    </div>
  );
};

export default Categories;
