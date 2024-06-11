import React from "react";
import dummyProduct from "../../assets/dummyproduct";
import Item from "../../components/Item";
const Shop = () => {
  return (
    <>
      <div className="px-10 py-10">
        <h1 className="text-4xl text-darkBlue tracking-widest font-semibold">
          Shop Smarter
        </h1>
        <div className="py-10 px-8 flex flex-wrap gap-5 justify-center">
          {dummyProduct.map(({ title, price, images }) => (
            <Item
              key={title}
              title={title}
              images={images.slice(0, 1)}
              price={price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
