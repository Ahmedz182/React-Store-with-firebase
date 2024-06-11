import React from "react";
import dummyProduct from "../assets/dummyproduct";
import Item from "./Item";

const RecentProducts = () => {
  return (
    <>
      <p className="text-center font-bold text-darkBlue text-3xl tracking-widest">
        Recent Product
      </p>
      <div className="py-10 px-8 flex flex-wrap gap-5 justify-center">
        {dummyProduct.slice(15, 27).map(({ title, price, images }) => (
          <Item
            key={title}
            title={title}
            images={images.slice(0, 1)}
            price={price}
          />
        ))}
      </div>
      <div></div>
    </>
  );
};

export default RecentProducts;
