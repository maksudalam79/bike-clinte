import React from 'react';
import img1 from "../../../asset/Royal-Enfield-Classic-banner-1200x720.jpg";
import img2 from "../../../asset/wp8675019.jpg";
import img3 from "../../../asset/motorcycle_motorcyclist_cross_130826_2048x1152.jpg";
import BannerItem from './BannerItem';
import "./Banner.css";


const Banner = () => {
    const bannerData = [
        {
          image: img1,
          title: "Classic Motorcycle",
          id: 1,
          prev: 3,
          next: 2,
        },
        {
          image: img2,
          title: "Street Motorcycle",
          id: 2,
          prev: 1,
          next: 3,
        },
        {
          image: img3,
          title: "Cross Motorcycle",
          id: 3,
          prev: 2,
          next: 1,
        }
       
      ];
      
    return (
        <div className="carousel w-full">
        {bannerData.map((banner) => (
          <BannerItem key={banner.id} banner={banner}></BannerItem>
        ))}
      </div>

    );
};

export default Banner;