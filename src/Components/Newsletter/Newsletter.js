import React, { useRef } from "react";

import {
  HiLightBulb,
  HiBeaker,
  HiPencil,
  HiOutlineColorSwatch,
} from "react-icons/hi";
const Newsletter = () => {
  const emailRef = useRef();
  const handleSubscribe = (e) => {
    e.preventDefault();
    /* 
    Do something here !
    */
  };

  return (
    <div className="mx-auto w-full max-w-7xl bg-white">
      <div className="relative w-full flex justify-center border-2 border-white">
        {/* :MAIN CONTAINER */}
        <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-between">
          {/* ::Body */}
          <div className="mt-5 mx-auto py-2 px-3 md:px-6 max-w-md flex flex-col space-y-5">
            {/* :::Title */}
            <h2 className="text-4xl font-extrabold">
              <span className="text-primary">Stay</span>
              <span className="text-warning"> Tuned</span>
            </h2>
            {/* :::Text */}
            <p className="md:text-gray-500">
              Subscribe to our newsletter for cool tips, freebies and other
              useful resources.
            </p>
            {/* :::Newsletter content categories */}
            <div className="grid grid-cols-2 gap-3 text-sm md:text-gray-500">
              <span className="col-span-1 inline-flex items-center">
                <HiLightBulb className="mr-1 w-5" />
                Design Tips
              </span>
              <span className="col-span-1 inline-flex items-center">
                <HiPencil className="mr-1 w-5" />
                Tutorials
              </span>
              <span className="col-span-1 inline-flex items-center">
                <HiBeaker className="mr-1 w-5" />
                Freebies
              </span>
              <span className="col-span-1 inline-flex items-center">
                <HiOutlineColorSwatch className="mr-1 w-5" />
                Inspiration
              </span>
            </div>
            {/* :::Subscription newsletter form */}
            <div className="pt-5 flex justify-center">
              <form
                action=""
                className="mx-auto w-full max-w-md flex flex-col sm:flex-row space-y-4 sm:space-y-0"
                onSubmit={handleSubscribe}
              >
                {/* ::::input field */}
                <div className="w-full h-full">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    ref={emailRef}
                    className="form-input w-full h-full rounded-sm sm:rounded-r-none border-gray-300 bg-gray-50 placeholder-gray-400 focus:border-transparent focus:ring-1 focus:ring-yellow-400"
                  />
                </div>
                {/* ::::submit button */}
                <button
                  type="submit"
                  className="flex-shrink-0 py-2 px-4 rounded-sm sm:rounded-l-none border border-yellow-400 bg-yellow-400 text-base text-white font-semibold uppercase tracking-wide hover:bg-yellow-500"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* ::Footer */}
          <div className="mt-12 py-4 px-3 md:px-6 bg-gray-100 bg-opacity-80 md:bg-opacity-100">
            <div className="mx-auto max-w-sm space-y-2 text-xs">
              {/* :::Title */}
              <h3 className="text-gray-400 font-bold uppercase">
                Follow us on
              </h3>
              {/* :::Social links */}
              <div className="flex space-x-6 text-gray-600">
                <a href="#instagram" className="font-semibold">
                  Instagram
                </a>
                <a href="#instagram" className="font-semibold">
                  Dribble
                </a>
                <a href="#instagram" className="font-semibold">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* :BACKGROUND PICTURE */}
        <div className="absolute md:relative w-full md:w-1/2 min-h-full">
          <img
            src="https://fancytailwind.com/static/fun1-dcc0eeeb07c60442a96469469e27237b.jpg"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover opacity-20 md:opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
