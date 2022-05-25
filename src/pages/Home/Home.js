import React from "react";
import Banner from "./Banner";
import BussinessSummery from "./BussinessSummery";
import Footer from "./Footer";
import LatestNews from "./LatestNews";
import Products from "./Products";
import Review from "./Review";
import Subscription from "./Subscription";

const Home = () => {
  return (
    <div className="px-2">
      <Banner />
      <Products />
      <BussinessSummery />
      <Review />
      <Subscription />
      <LatestNews />
      <Footer />
    </div>
  );
};

export default Home;
