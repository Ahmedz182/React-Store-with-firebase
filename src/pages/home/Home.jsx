import React from "react";
import HeroSection from "../../components/HeroSection";
import TrendingProduct from "../../components/TrendingProduct";
import DealOfTheWeek from "../../components/DealOfTheWeek";
import RecentProducts from "../../components/RecentProducts";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrendingProduct />
      <DealOfTheWeek />
      <RecentProducts />
    </>
  );
};

export default Home;
