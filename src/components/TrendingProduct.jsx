import React from "react";

const TrendingProduct = () => {
  const item = [
    {
      title: "Grocery",
      img: "https://www.moreretail.in/frontend/dist/img/home/food-grocery-img.png",
    },
    {
      title: "Shoes",
      img: "https://freepngimg.com/thumb/running_shoes/5-2-running-shoes-png.png",
    },
    {
      title: "Phones",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710331546/Croma%20Assets/Communication/Mobiles/Images/305347_0_uedcyr.png?tr=w-600",
    },
    {
      title: "Google Home",
      img: "https://crdms.images.consumerreports.org/f_auto,w_600/prod/products/cr/models/393673-smartspeakers-google-homemini.png",
    },
    {
      title: "Audio Devices",
      img: "https://www.tccq.com/image/cache/catalog/Products/Apple%20iPad/Airpods/Apple-Airpods-Max-Pink-MGyM3ZE-A-in-Qatar-470x556.png",
    },
  ];

  return (
    <>
      <div className="py-10">
        <p className="text-darkBlue text-2xl  font-semibold pb-8 pt-12 leading-tight text-center">
          <sapn className="text-green font-bold"> Trending</sapn> Products
        </p>
        <div className="flex justify-between flex-wrap gap-3 px-28 sm:px-10 sm:justify-center">
          {item.map(({ title, img }) => {
            return (
              <>
                <div className="flex flex-col items-center cursor-pointer transition ease-in hover:translate-y-2 hover:bg-lightGreen hover:rounded-lg">
                  <div className="rounded-xl outline outline-1 outline-lightGreen/50">
                    <img
                      src={img}
                      alt={title}
                      className="aspect-square p-3 object-contain w-52 sm:w-32 "
                    />
                  </div>
                  <p className="text-xl text-darkBlue/90 font-medium py-2">
                    {title}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TrendingProduct;
