import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Custom Arrow
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const ServiceSlider = () => {
  // const services = Array.apply(null, Array(9));
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      "https://devhiveserver.vercel.app/service/category/6438a3c62118772c696bccbf"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div className="w-11/12 h-full mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl text-gray-600 font-semibold">
          Popular Gigs From Top Sellers
        </h2>
        <div>
          <button className="button-prev left-1 text-5xl text-gray-600 hover:opacity-100 opacity-50">
            <IoIosArrowDropleftCircle />
          </button>
          <button className="button-next right-1 text-5xl text-gray-600 hover:opacity-100 opacity-50">
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
      <Swiper
        //navigation={true}
        modules={[Navigation]}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        className="mySwiper"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <ServiceCard service={service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;