import React from "react";
import BuyNow from "./BuyNow";
const Item = ({ title, price, images }) => {
  return (
    <>
      <div className="transition ease-in hover:translate-y-[-0.75rem] ">
        <div className="rounded-xl  cursor-pointer overflow-hidden w-[20dvw] sm:w-[40dvw] flex flex-col">
          <img
            className="rounded-t-xl aspect-square"
            loading="lazy"
            src={images}
            alt={title}
          />
          <span className="flex justify-between ps-6 items-center pe-4  py-4">
            <p className="font-light text-xl text-darkBlue tracking-wider w-1/2 sm:w-2/3">
              {title}
            </p>
            <p className="font-medium">$ {price}</p>
          </span>
        </div>
        <div className="flex justify-center py-4">
          <BuyNow />
        </div>
      </div>
    </>
  );
};

export default Item;
