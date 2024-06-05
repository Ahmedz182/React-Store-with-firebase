import React from "react";

const BuyNow = () => {
  return (
    <>
      <div>
        <button className="px-5 py-1 sm:px-3 sm:py-1 rounded-xl items-center bg-darkBlue/10">
          <i className="text-darkBlue   ri-shopping-cart-2-fill me-1"></i>{" "}
          <span className="text-darkBlue  sm:text-sm ">Buy Now</span>
        </button>
      </div>
    </>
  );
};

export default BuyNow;
