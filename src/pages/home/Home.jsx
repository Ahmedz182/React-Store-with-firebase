import React from "react";
import HeroSection from "../../components/HeroSection";
import TrendingProduct from "../../components/TrendingProduct";
import DealOfTheWeek from "../../components/DealOfTheWeek";
import RecentProducts from "../../components/RecentProducts";
import Banner from "../../components/Banner";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrendingProduct />
      <DealOfTheWeek />
      <RecentProducts />
      <Banner />
    </>
  );
};

export default Home;
