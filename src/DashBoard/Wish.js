import React from 'react';

const Wish = ({wish}) => {
    console.log(wish)
    const {img,name,resaleprice}=wish
    return (
        <div className="card card-compact w-48 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className='font-bold'>{resaleprice} taka</p>
   </div>
</div>
    );
};

export default Wish;