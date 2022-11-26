import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../asset/wp4106661.jpg'

const CategoriesSection = ({cate}) => {
    
    const {category,name,description}=cate
    return (
        <div className="hero min-h-screen" style={{ backgroundImage:`url(${image})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white">{name}</h1>
      <p className="mb-5">{description}</p>
      <Link to={`/bikeCategories/${category}`}>
      <button className="btn btn-primary">See More</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default CategoriesSection;