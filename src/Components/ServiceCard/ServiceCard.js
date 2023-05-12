import React from "react";
import proBadge from "./pro-badge.svg";

const ServiceCard = ({ service }) => {
  return (
    <div className="group border rounded-sm border-gray-500 bg-white max-w-[20rem]">
      <div className="relative overflow-hidden">
        <img className="w-96 h-48" src={service.serviceImage.img1} alt="" />
      </div>
      <div className="leading-8 text-left">
        <div className="card-body px-4">
          <div className="flex gap-4 items-center my-4">
            <img
              className="object-cover w-8 h-8 rounded-full"
              src={service.developerInfo.photoURL}
              alt=""
            />
            <h3 className="text-sm font-bold text-gray-700">
              {service.developerInfo.username}
            </h3>
          </div>
          <h3 className="text-xl font-normal capitalize text-gray-700 group-hover:text-[#02c2a9]">
            {(service.slugTitle).length > 50 ? (service.slugTitle).slice(0, 50) + "...": (service.slugTitle)}
          </h3>
          <div className="flex justify-between items-center my-4">
            <div>
              <span className="text-[#02c2a9] text-[16px] flex items-center gap-2 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1792 1792"
                  className="w-5 h-5"
                >
                  <path
                    fill="currentColor"
                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                  ></path>
                </svg>
                4.9<span className="text-gray-400">(68)</span>
              </span>
            </div>
            <div
              className="bg-no-repeat"
              style={{ backgroundImage: `url(${proBadge})` }}
            >
              <img src={proBadge} alt="" />
            </div>
          </div>
        </div>
        <footer className="flex justify-between items-center border-t border-gray-400 p-3">
          <div className="flex gap-2 items-center">
            <button aria-label="button" data-uw-rm-empty-ctrl="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 font-bold text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button aria-label="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-gray-400"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </button>
          </div>
          <a href="/">
            <small className="text-gray-500 text-sm uppercase">
              Starting at{" "}
            </small>
            <span className="text-[20px] text-gray-700 font-semibold">
              ${service.price}
            </span>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default ServiceCard;
