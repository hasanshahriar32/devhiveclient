import React, { useEffect, useState } from "react";
import axios from "axios";

const DeveloperGIg = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    try {
      const user = async () => {
        const user = localStorage.getItem("jwt");
        const config = {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        };
        const { data } = await axios.get(
          `https://devhiveserver.vercel.app/service/developer/${localStorage.getItem("user_id")}`,

          config
        );
        setServiceData(data);
        // console.log(data);
      };
      user();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="">
      <div className="mx-auto py-8 w-full max-w-7xl bg-white">
        <div className="mx-auto max-w-xs sm:max-w-2xl lg:max-w-none">
          {/* :CATEGORY TITLE */}
          <h2 className="text-2xl text-gray-700 font-bold">My Services</h2>

          {/* :PRODUCT LIST */}
          <div className="mt-6">
            <ul className="grid grid-cols-2 gap-10">
              {serviceData.map((product) => (
                <li
                  key={product?.id}
                  className="col-span-full border rounded-2xl p-6 sm:col-span-2 lg:col-span-1 group relative"
                >
                  <a
                    href={product?.href}
                    className="w-full h-full flex flex-col"
                  >
                    {/* ::Container */}
                    <div className="relative">
                      {/* :::Picture container */}
                      <div className="aspect-w-1 aspect-h-1 shadow-sm rounded-lg overflow-hidden group-hover:shadow-md">
                        {/* ::::picture */}
                        <img
                          src={product?.serviceImage?.img1}
                          alt={product?.pictureAlt}
                          className="w-full h-full object-cover object-center"
                        />
                        {/* ::::overlay background */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-gray-800 via-transparent opacity-70 group-hover:from-transparent" />
                      </div>
                      {/* :::price */}
                      {/* <span className="z-20 absolute bottom-3 right-5 px-0.5 rounded-md text-2xl text-white font-semibold antialiased group-hover:text-gray-700 group-hover:bg-white group-hover:bg-opacity-70">{`$${product.price}`}</span> */}
                    </div>
                    {/* ::Product Details */}
                    <div className="flex-grow mt-2 px-3 h-full">
                      {/* :::Info container */}
                      <div className="relative flex flex-col">
                        {/* ::::name */}
                        <h3 className="text-base text-gray-800 font-semibold">
                          {product?.slugTitle}
                        </h3>
                        {/* ::::colors description */}
                        <p className="mt-1 text-sm text-gray-500 font-medium">
                          {product?.aboutService}
                        </p>
                        {/* ::::add to cart button */}
                        {/* <div>
                            <p className="z-20 absolute bottom-3 right-5 px-0.5 rounded-md text-2xl text-white font-semibold antialiased group-hover:text-gray-700 group-hover:bg-white group-hover:bg-opacity-70">{`$${product.price}`}</p>
                            </div> */}
                        <div className="flex">
                          <button className="mt-4 py-1.5 w-full rounded-md mr-4 bg-primary text-sm text-[white] font-semibold tracking-wide hover:bg-gray-300 hover:text-gray-800">
                            Edit
                          </button>
                          <button className="mt-4 py-1.5 w-full rounded-md bg-secondary text-sm text-[white] font-semibold tracking-wide hover:bg-gray-300 hover:text-gray-800">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperGIg;
