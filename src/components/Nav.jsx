import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className=" sticky top-0 bg-white navbar">
      <div className="flex  px-8 py-5 items-center justify-between">
        <Link to="/">
          <span className="cursor-pointer">
            <span className="text-2xl font-bold">Quick</span>
            <span className="text-darkGreen text-2xl">Shop</span>
          </span>
        </Link>
        <ul className="flex flex-wrap justify-between gap-x-5  font-semibold sm:hidden">
          <Link to="/">
            <li className="cursor-pointer menu-item">Home</li>
          </Link>
          <li className="cursor-pointer menu-item">About us</li>
          <li className="cursor-pointer menu-item">Products</li>
          <li className="cursor-pointer menu-item">Contact us</li>
        </ul>

        <div className="flex justify-between items-center gap-x-4">
          <Link to="/Shop">
            <button className="bg-green rounded-xl px-5 py-2 text-white font-semibold hover:bg-darkGreen transition ease-linear hover:scale-95">
              Show Now
            </button>
          </Link>
          <i className="ri-shopping-cart-2-fill text-darkBlue text-2xl cursor-pointer"></i>
          <Link to="/Account">
            <i className="ri-account-circle-fill text-darkBlue text-2xl cursor-pointer"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
