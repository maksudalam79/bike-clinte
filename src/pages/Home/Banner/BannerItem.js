import React from 'react';

const BannerItem = ({banner}) => {
    const {image,id,prev,next,title}=banner
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="img-gradient">
          <img src={image} alt="" className="w-full h-full" />
        </div>
       <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-3/4">
        <h1 className="text-6xl font-bold text-white">
          {title}
          </h1>
          
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5  right-5 top-1/2">
        <a href={`#slide${prev}`}  className="btn btn-circle">❮</a> 
      <a href={`#slide${next}`}  className="btn btn-circle">❯</a>
         
        </div>
      </div>

    );
};

export default BannerItem;