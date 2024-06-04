import React from "react";

const Nav = () => {
  return (
    <div>
      <div className="flex px-8 py-5 items-center justify-between">
        <span className="cursor-pointer">
          <span className="text-2xl font-bold">Quick</span>
          <span className="text-darkGreen text-2xl">Shop</span>
        </span>

        <ul className="flex flex-wrap justify-between gap-x-5  font-semibold sm:hidden">
          <li className="cursor-pointer menu-item">Home</li>
          <li className="cursor-pointer menu-item">About us</li>
          <li className="cursor-pointer menu-item">Products</li>
          <li className="cursor-pointer menu-item">Contact us</li>
        </ul>

        <div className="flex justify-between items-center gap-x-4">
          <button className="bg-green rounded-xl px-5 py-2 text-white font-semibold hover:bg-darkGreen transition ease-linear hover:scale-95">
            Show Now
          </button>
          <i className="ri-shopping-cart-2-fill text-darkBlue text-2xl cursor-pointer"></i>
          <i className="ri-account-circle-fill text-darkBlue text-2xl cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
};

export default Nav;
