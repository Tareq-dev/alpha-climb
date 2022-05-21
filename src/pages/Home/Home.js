import React from "react";
import Banner from "./Banner";
import BussinessSummery from "./BussinessSummery";
import Footer from "./Footer";
import Products from "./Products";
import Review from "./Review";

const Home = () => {
  return (
    <div className="px-2">
      <Banner />
      <Products />
      <BussinessSummery />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
