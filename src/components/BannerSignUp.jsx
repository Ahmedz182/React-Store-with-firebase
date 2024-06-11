import React from "react";
import { Link } from "react-router-dom";

const BannerSignUp = () => {
  return (
    <>
      <div className="bgBannerSignup items-center flex sm:flex-col  px-12 sm:pb-16 mt-10">
        <div className="w-[40dvw] sm:w-[95dvw]">
          <img className="p-10" src="./order.png" alt="" />
        </div>
        <div>
          <p className="text-darkBlue text-4xl tracking-wider leading-normal font-bold">
            SignUp for exclusive Offers & Discounts
          </p>

          <Link to="/Account">
            <button className="bg-green text-white rounded-lg hover:scale-95 transition ease-in my-5 px-16 py-2">
              SignUp
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BannerSignUp;
