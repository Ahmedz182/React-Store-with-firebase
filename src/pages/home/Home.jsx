import React from "react";
import HeroSection from "../../components/HeroSection";
import TrendingProduct from "../../components/TrendingProduct";
import DealOfTheWeek from "../../components/DealOfTheWeek";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrendingProduct />
      <DealOfTheWeek />
    </>
  );
};

export default Home;
