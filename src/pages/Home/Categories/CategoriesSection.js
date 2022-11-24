import React from 'react';
import image from '../../../asset/wp4106661.jpg'

const CategoriesSection = ({category, handlerDetails}) => {
    console.log(category)
    const {id,name,description}=category
    return (
        <div className="hero min-h-screen" style={{ backgroundImage:`url(${image})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white">{name}</h1>
      <p className="mb-5">{description}</p>
      <button onClick={()=>handlerDetails(id)} className="btn btn-primary">See More</button>
    </div>
  </div>
</div>
    );
};

export default CategoriesSection;