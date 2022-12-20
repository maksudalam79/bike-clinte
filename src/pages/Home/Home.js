import React from "react";
import Contect from "../../Contect/Contect";
import Review from "../Review/Review";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";

const Home = () => {
  return (
    <div >
      <Banner></Banner>
      <Categories></Categories>
      <Review></Review>
      <Contect></Contect>
   
    </div>
  );
};

export default Home;
