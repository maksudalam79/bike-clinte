import { useQuery } from "@tanstack/react-query";
import React from "react";
import CategoriesSection from "./CategoriesSection";
const Categories = () => {
  const { isLoading, error, data:categories } = useQuery({
    
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('bikeCategories.json')
      .then(res =>res.json())
     
  })
  if (isLoading) return 'Loading...'
if (error) return 'An error has occurred: ' + error.message

const handlerDetails=()=>{
  
}

  return (
    <div className="">
      <h2 className="text-5xl mx-auto text-center bg-[#131313] text-white font-bold p-5">Our Services</h2>
      {
        categories.map(category=><CategoriesSection
        key={category.id}
        category={category}
        handlerDetails={handlerDetails}
        ></CategoriesSection>)
      }
    </div>
  );
};

export default Categories;
