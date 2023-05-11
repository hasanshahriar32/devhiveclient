import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation } from 'swiper';
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
// Custom Arrow
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const ServiceSlider = () => {
    const services = Array.apply(null, Array(10));
    return (
        <div className='w-4/5 h-full mx-auto'>
            
      <div className='flex justify-between items-center'>
        <h2 className='text-3xl text-gray-800 font-semibold'>Popular Gigs From Top Sellers</h2>
        <div>
        <button className='button-prev left-1 text-5xl text-gray-600 hover:opacity-100 opacity-50'><IoIosArrowDropleftCircle/></button>
      <button className='button-next right-1 text-5xl text-gray-600 hover:opacity-100 opacity-50'><IoIosArrowDroprightCircle/></button>
        </div>
      </div>
            <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        loop={true}
        spaceBetween={15}
        slidesPerView={4}
        className="mySwiper"
      >
        {
          services.map((product, index) => 
          <div>
            <SwiperSlide>
              <ServiceCard/>
            </SwiperSlide>
          </div>
          )
        }
      </Swiper>
        </div>
    );
};

export default ServiceSlider;