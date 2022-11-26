import React from 'react';

const ReviewCard = ({comment}) => {
    const {name,des,img}=comment
    return (
        <div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{des}</p>
    <div className="card-actions mt-6">
    <div className="avatar">
  <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={img} alt='' />
  </div>
</div>
<div>
    <h2 className='txt-5xl'>{name}</h2>
    
</div>
    </div>
  </div>
</div>

    );
};

export default ReviewCard;