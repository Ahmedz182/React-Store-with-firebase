import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import img from "/women-shoppingwomen.png";
const HeroSection = () => {
  const TEXTS = ["Get it delivered.", "Get it ordered.", "Get it Shipped."];
  const COLORS = ["text-darkGreen ", "text-red", "text-purple"]; // Add your desired colors here

  const [index, setIndex] = useState(0);
  const [CategoryItem, setCategoryItem] = useState(false);
  let categories = [
    "Phones",
    "Grocery",
    "Shoes",
    "Home Appliances",
    "Audio Devices",
  ];
  const showCategory = () => {
    if (!CategoryItem) {
      setCategoryItem(true);
    } else {
      setCategoryItem(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setCategoryItem(false);
    });
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <>
      <div className="bg-lightGreen/20 p-2">
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-2">
            <span
              className="bg-white rounded-3xl px-4 py-2 cursor-pointer flex items-center  font-medium "
              onClick={showCategory}>
              <i className="ri-menu-2-line"></i> &nbsp;
              <p className="sm:hidden">All Categories</p>
            </span>

            {CategoryItem && (
              <span className="absloute fixed left-[9dvw]  mt-12 pt-3 items-center bg-lightGreen py-2 rounded-xl transition ease-in">
                {categories.map((category) => (
                  <p
                    className="px-4 font-medium pb-2 cursor-pointer hover:bg-white/30a transition ease-in-out hover:translate-x-1"
                    key={category}>
                    {category}
                  </p>
                ))}
              </span>
            )}
          </div>
          <span className="bg-white rounded-3xl px-4 py-2 ms-2 w-[70dvw]">
            <input
              className="w-[65dvw] search"
              type="search"
              name="search"
              id="search"
              placeholder="What are you looking for?"
            />
          </span>
          <span className="bg-green flex items-center justify-center py-[6px] w-12 ms-[-45px] rounded-tr-3xl rounded-br-3xl cursor-pointer">
            <i className="ri-search-2-line text-xl text-white ms-[-5px]"></i>
          </span>
        </div>
      </div>

      <div className="flex  flex-row flex-wrap ps-16 sm:ps-8 items-center  mt-2 sm:flex-col">
        <div className="flex flex-col gap-1 sm:gap-3 mt-4 w-[45dvw] sm:w-[98%] ">
          <span className="bg-lightGreen/15  rounded-l-3xl rounded-r-lg w-[70%] sm:w-[100%]  ps-6 text-darkBlue font-semibold p-2">
            <strong>30% </strong> Off on groceires
          </span>
          <p className="text-7xl font-semibold tracking-wider text-darkBlue sm:text-6xl leading-tight ">
            <strong> Shop smarter</strong>
            <br />
            <span className="text-7xl font-light sm:text-6xl leading-tight   text-darkBlue ">
              not harder.
            </span>
          </p>

          <p
            className={`text-7xl font-semibold sm:text-5xl  ${
              COLORS[index % TEXTS.length]
            }`}>
            <TextTransition springConfig={presets.gentle}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </p>
          <p className="text-xl sm:text-lg font-medium mt-10 sm:mt-5 ">
            Save time,skip the lines. We've got you covered.
          </p>
          <button className="bg-green rounded-xl px-5 py-3 mt-6 w-40 text-white font-semibold  transition ease-linear hover:scale-105">
            Shop Now
          </button>
        </div>

        <div className="bg-img w-[45dvw] ms-5 sm:ms-0 sm:me-2 mt-8 sm:w-[98%] ">
          <img src={img} alt="shopImg" className="women-img" />
          <div className="card bg-white shadow-lg rounded-lg flex mt-[-100px] px-5 items-center">
            <span>
              <img
                src="https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg"
                className="w-16"
              />
            </span>
            <span className="px-5 ms-[-10px]">
              <p className="font-bold">Myra Rana ✨</p>
              <p className="sm:text-sm">
                Saved my a lot of Time and money.
                <span className="text-red"> &#10084;</span>
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
