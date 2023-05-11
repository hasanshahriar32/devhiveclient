import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import "../Components/MarketPlace/MarketPlace.css";
import { BsClock } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link, useParams } from "react-router-dom";
import { useGetSingleServiceQuery } from "../features/api/Services/ServicesApi";
import DeveloperChat from "./DeveloperProfile/DeveloperChat";

const ServiceDetails = () => {
  const { id } = useParams();
  const { data: serviceDetails } = useGetSingleServiceQuery(id);
  console.log(serviceDetails);
  const {
    _id,
    slugTitle,
    price,
    technology,
    developerInfo,
    serviceImage,
    aboutService,
    features,
  } = serviceDetails || {};

  const sliders = [1];
  const [packages, setPackages] = useState("basic");
  let content;
  if (packages === "basic") {
    content = (
      <div className="p-6">
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl">basic or start ups</h2>
          <h3 className="font-semibold text-2xl">${price}</h3>
        </div>
        <p className="py-6 text-md font-medium">
          Responsive up to 3 pages including slider, contact form, social links,
          google map, color branded.
        </p>
        <div className="flex">
          <h2 className="font-semibold text-md pr-6 flex items-center">
            <BsClock className="mr-2"></BsClock> 6 Days Delivery
          </h2>
          <h2 className="font-semibold text-md pr-6 flex items-center">
            <FiRefreshCw className="mr-2"></FiRefreshCw> Unlimited Revisions
          </h2>
        </div>
        <div>
          <h3 className="font-semibold text-md pt-2">What's Included</h3>
        </div>
        <Link to={`/checkout/${_id}`}>
          <button className="w-full text-center rounded-lg bg-primary text-[white] border mx-auto p-2 mt-6 text-lg font-medium">
            Continue ${price}
          </button>
        </Link>
      </div>
    );
  }
  if (packages === "standard") {
    content = (
      <div className="p-6">
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl">
            Standard Responsive website Design
          </h2>
          <h3 className="font-semibold text-2xl">$200</h3>
        </div>
        <p className="py-6 text-md font-medium">
          7 Page, Responsive, Mobile friendly, Speed tested, Admin panel, 5 days
          support, PayPal integration.
        </p>
        <div className="flex">
          <h2 className="font-semibold text-md pr-6 flex items-center">
            <BsClock className="mr-2"></BsClock> 10 Days Delivery
          </h2>
          <h2 className="font-semibold text-md pr-6 flex items-center">
            <FiRefreshCw className="mr-2"></FiRefreshCw> Unlimited Revisions
          </h2>
        </div>
        <div>
          <h3 className="font-semibold text-md pt-2">What's Included</h3>
        </div>
        <button className="w-full text-center rounded-lg bg-primary text-[white] border mx-auto p-2 mt-6 text-lg font-medium">
          Continue ($200)
        </button>
      </div>
    );
  }
  if (packages === "premium") {
    content = (
      <div className="p-6">
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl">E Commerce Business website</h2>
          <h3 className="font-semibold text-2xl">$350</h3>
        </div>
        <p className="py-6 text-md font-medium">
          Standard features+ 10 pages, E commerce, +Security & SEO, multiple
          payment methods, 12 days support.
        </p>
        <div className="flex">
          <h2 className="font-semibold text-md pr-6 flex items-center">
            <BsClock className="mr-2"></BsClock> 14 Days Delivery
          </h2>
          <h2 className="font-semibold text-md pr-6 flex items-center">
            <FiRefreshCw className="mr-2"></FiRefreshCw> Unlimited Revisions
          </h2>
        </div>
        <div>
          <h3 className="font-semibold text-md pt-2">What's Included</h3>
        </div>
        <button className="w-full text-center rounded-lg bg-primary text-[white] border mx-auto p-2 mt-6 text-lg font-medium">
          Continue ($350)
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-2 my-10 ">
        <div className="cols-span-12 lg:cols-span-7  pl-8">
          <h3 className="text-3xl font-semibold text-left">
            {slugTitle}
          </h3>
          <div className="flex items-start lg:flex-row flex-col pt-4 ">
            <img
              className="w-8 mr-3 rounded-full"
              src={developerInfo?.photoURL}
              alt="fiver_img"
            />
            <h4 className="text-md text-left font-medium mr-3 flex  items-start">
              {developerInfo?.displayName}
            </h4>
            <h4 className="text-md text-left font-medium flex border-r-2 border-slate-300 pr-3  items-start">
              Level 1 Seller
            </h4>
            <div className="rating pl-4">
              <span className="text-2xl base-400 text-warning">
                <AiFillStar></AiFillStar>
              </span>
              <span className="text-2xl base-400 text-warning">
                <AiFillStar></AiFillStar>
              </span>
              <span className="text-2xl base-400 text-warning">
                <AiFillStar></AiFillStar>
              </span>
              <span className="text-2xl base-400 text-warning">
                <AiFillStar></AiFillStar>
              </span>
              <span className="text-2xl base-400 text-warning">
                <AiFillStar></AiFillStar>
              </span>
              <h3 className="font-semibold text-warning pl-2">5</h3>
              <h3 className="font-medium ">(15)</h3>
              <h3 className="pl-2 font-medium">3 Orders in Queue</h3>
            </div>
          </div>
          <div className="w-10/12 mt-6 arrow-icon">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              // pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <img
                  className="p-6 bg-[#e5e7eb] w-full mx-auto h-full border-b-indigo-500 py-3"
                  src={serviceImage?.img1}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="p-6 bg-[#e5e7eb] base-300 w-full mx-auto h-full border-b-indigo-500 py-3"
                  src={serviceImage?.img2}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="p-6 bg-[#e5e7eb] w-full  mx-auto border-b-indigo-500 py-3"
                  src={serviceImage?.img3}
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="mt-10">
            <h2 className="text-xl font-bold">About this gig</h2>
            <p className="py-6 text-md font-medium">{aboutService}</p>
            <h3 className="text-lg font-bold pb-2">Services we provide:</h3>
            <ul className="pl-10 font-medium list-disc pb-6">
              <li>Business WordPress websites</li>
              <li>E-commerce website</li>
              <li>Personal Websites & Blogs</li>
            </ul>
            <h3 className="text-lg font-bold pb-2">This gig is perfect for:</h3>
            <ul className="pl-10 font-medium list-disc pb-6">
              <li>Individuals just starting off</li>
              <li>Small business</li>
              <li>Non-profits</li>
              <li>Medium/Large Companies</li>
              <li>Creative/Artists</li>
            </ul>
            <h3 className="text-lg font-bold pb-2">Tools/Options:</h3>
            <ul className="pl-10 font-medium list-disc pb-6">
              {technology?.map((technologyData) => (
                <li>{technologyData}</li>
              ))}
            </ul>
            <h3 className="text-lg font-bold pb-2">Features:</h3>
            <ul className="pl-10 font-medium list-disc pb-6">
              {features?.map((featuresData) => (
                <li>{featuresData}</li>
              ))}
            </ul>
            <h3 className="text-lg font-bold pb-2">Why Me?</h3>
            <ul className="pl-10 font-medium list-disc pb-6">
              <li>More than 12 years of experience</li>
              <li>Unlimited Revision</li>
              <li>Professionally Tested</li>
            </ul>
            <h3 className="text-lg font-bold pb-2">
              Have questions? Please reach out and I'll get back to you as soon
              as possible.
            </h3>
          </div>
          <div>
            <h2 className="text-xl font-bold pt-10 pb-6">About the seller</h2>
            <div className="flex items-start lg:flex-row pt-4 ">
              <div>
                <img
                  className="w-36 mr-6 rounded-full"
                  src={developerInfo?.photoURL}
                  alt="fiver_img"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="text-lg text-left font-medium mr-3  ">
                  {developerInfo?.displayName}
                </h4>
                <h4 className="text-lg text-left font-medium pr-3 ">
                  I build websites
                </h4>
                <div className="rating pb-2 flex items-center">
                  <span className="text-sm base-400 text-warning">
                    <AiFillStar></AiFillStar>
                  </span>
                  <span className="text-sm base-400 text-warning">
                    <AiFillStar></AiFillStar>
                  </span>
                  <span className="text-sm base-400 text-warning">
                    <AiFillStar></AiFillStar>
                  </span>
                  <span className="text-sm base-400 text-warning">
                    <AiFillStar></AiFillStar>
                  </span>
                  <span className="text-sm base-400 text-warning">
                    <AiFillStar></AiFillStar>
                  </span>
                  <h3 className="font-light text-warning pl-1">5</h3>
                  <h3 className="font-light ">(15)</h3>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2">
                  <DeveloperChat
                    developerId={serviceDetails?.developerInfo?.userId}
                  ></DeveloperChat>
                  <Link
                    to={`/developer-profile/${serviceDetails?.developerInfo?.userId}`}
                    className="btn btn-secondary btn-outline"
                  >
                    Developer Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="border border-[#9ca3af] mt-6 w-10/12">
              <div className=" p-5 grid grid-cols-2 gap-4 ">
                <div>
                  <h2 className="text-lg font-medium">From</h2>
                  <h3 className="text-xl font-semibold">United States</h3>
                </div>
                <div>
                  <h2 className="text-lg font-medium">Member since</h2>
                  <h3 className="text-xl font-semibold">Sep 2021</h3>
                </div>
                <div>
                  <h2 className="text-lg font-medium">Avg. response time</h2>
                  <h3 className="text-xl font-semibold">2 hours</h3>
                </div>
                <div>
                  <h2 className="text-lg font-medium">Last delivery</h2>
                  <h3 className="text-xl font-semibold">3 days</h3>
                </div>
                <div>
                  <h2 className="text-lg font-medium">Languages</h2>
                  <h3 className="text-xl font-semibold">English</h3>
                </div>
              </div>
              <p className="p-4 border-t text-lg font-medium">
                Hi! I'm a web developer with over 12 years of experience and
                have completed over 150 projects using HTML, CSS, JavaScript,
                WordPress, and Drupal.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold pt-10 pb-6">Compare packages</h2>
            <div className="overflow-x-auto border border-[#9ca3af] w-10/12">
              <table className="table w-full">
                {/* head*/}
                <thead>
                  <tr>
                    <th>Package</th>
                    <th>Basic</th>
                    <th>Standard</th>
                    <th>Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>Number of pages</th>
                    <td>2</td>
                    <td>6</td>
                    <td>12</td>
                  </tr>
                  {/* row 2 */}
                  <tr className="active">
                    <th>Plugins/extensions installation</th>
                    <td>3</td>
                    <td>5</td>
                    <td>10</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>Number of products</th>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* payment from  */}
        <div className="cols-span-12 lg:cols-span-5 border-2 border-[#dadbdd] h-max mt-20 ">
          {/* <div>
                    <button onClick={() => setPackages('basic')} className='p-4 text-primary font-semibold text-xl w-4/12  border-b-2 border-r-2 bg-[#dadbdd] border-primary focus:bg-[white]'>Basic</button>
                    <button onClick={() => setPackages('standard')} className='p-4 text-primary font-semibold text-xl w-4/12  border-b-2 border-r-2 bg-[#dadbdd] border-primary focus:bg-[white]'>Standard</button>
                    <button onClick={() => setPackages('premium')} className='p-4 text-primary font-semibold text-xl w-4/12  border-b-2 bg-[#dadbdd] border-primary focus:bg-[white]'>Premium</button>
                </div> */}
          <div>
            <h3>{content}</h3>
          </div>
        </div>
        <div className="border border-[#9ca3af] p-6 bg-[#e5e7eb] mt-16 w-10/12 ">
          <h2 className="text-2xl font-bold pb-6">Recommended for you </h2>
          <div className="grid grid-cols-1">
            {sliders.map((slider) => (
              <>
                {/* <Link
                                href="#"
                                class="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat"
                            >
                                <div class="absolute inset-0 bg-black/25"></div>

                                <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                                    <div class="sm:pt-18 pt-12 text-white lg:pt-24">
                                        <h3 class="text-xl text-[white] font-bold sm:text-2xl">Rome</h3>

                                        <p class="text-sm text-[white]">Italy</p>
                                    </div>
                                </div>
                            </Link> */}
                <div className="card w-full shadow-2xl mr-3">
                  <figure>
                    <img
                      src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/192388031/original/711d268a1de3e51ab210a8bd2483aef28fcb8a39.jpg"
                      className="w-full"
                      alt="banner_img"
                    />
                  </figure>
                  <div className="card-body bg-[white] rounded-xl">
                    <div className="flex">
                      <img
                        className="rounded-full"
                        src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/348f16c5d833f5c147fac64226ac4542-1679827325884/7eabd055-9bd6-4cf3-847b-ebb4449d8d20.png"
                        alt="profile_img"
                      />
                      <div className="pl-4">
                        <h3 className="text-left font-bold">giovanni_ux</h3>
                        <h2 className="font-medium">Top Rated Seller</h2>
                      </div>
                    </div>
                    <div>
                      <p className="text-left font-medium font-xl my-3">
                        I will design a custom and unique website
                      </p>
                    </div>
                    <div className="card-actions justify-between items-center border-t-2 pt-4">
                      <div>
                        <div className="rating flex items-center">
                          <input
                            type="radio"
                            name="rating-1"
                            className="mask text-sm mask-star base-400 bg-warning"
                          />
                          <h2 className="text-lg pl-1">4.8</h2>
                          <h3 className="text-lg pl-1">(35)</h3>
                        </div>
                      </div>
                      <div className="flex">
                        <h2 className="text-sm items-center font-medium pt-1 pr-1 flex ">
                          STARTING AT
                        </h2>
                        <h3 className="text-2xl font-semibold">$30</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold pb-4">Reviews</h2>
          <div className="flex">
            <h4 className="text-lg text-left font-medium mr-2">
              15 reviews for this Gig
            </h4>
            <div className="rating pb-2 flex items-center">
              <span className="text-lg base-400 text-warning">
                <AiFillStar></AiFillStar>
              </span>
              <span className="text-lg base-400 text-warning">
                <AiFillStar></AiFillStar>
              </span>
              <span className="text-lg base-400 text-warning">
                <AiFillStar></AiFillStar>
              </span>
              <span className="text-lg base-400 text-warning">
                <AiFillStar></AiFillStar>
              </span>
              <span className="text-lg base-400 text-warning">
                <AiFillStar></AiFillStar>
              </span>
              <h3 className="font-medium text-lg text-warning pl-1">5</h3>
            </div>
          </div>
          <div className="border-t border-[#9ca3af] w-10/12 mt-6 pt-4 pb-4">
            <div className="flex lg:flex-row pt-4 ">
              <div>
                <img
                  className="w-14 mr-6 rounded-full"
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5b394f50b09af0960edff91705cd9b11-1679343678600/e5123408-2cd3-478e-80b3-534bb38d6f42.jpg"
                  alt="fiver_img"
                />
              </div>
              <div className="flex flex-col pl-4">
                <h4 className="text-md text-left font-medium mr-3  ">
                  vectorcomm
                </h4>
                <div className="flex my-3">
                  <img
                    className="w-6 mr-2"
                    src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                    alt="country_img"
                  />
                  <h4 className="text-md text-left font-medium pr-3 ">
                    United States
                  </h4>
                </div>
                <div className="rating pb-2 flex items-center ">
                  <span className="text-sm base-400 text-warning">
                    <AiFillStar></AiFillStar>
                  </span>
                  <span className="text-sm base-400 text-warning">
                    <AiFillStar></AiFillStar>
                  </span>
                  <span className="text-sm base-400 text-warning">
                    <AiFillStar></AiFillStar>
                  </span>
                  <span className="text-sm base-400 text-warning">
                    <AiFillStar></AiFillStar>
                  </span>
                  <span className="text-sm base-400 text-warning">
                    <AiFillStar></AiFillStar>
                  </span>
                  <h3 className="font-semibold text-warning pl-1">5</h3>
                  <span className="h-3 border-l-2 border-[gray] mx-2"></span>
                  <h4 className="text-md text-left font-medium flex  pr-3  items-start">
                    1 week ago
                  </h4>
                </div>
                <p className="font-medium text-lg">
                  Steve was great to work and created a really cool, unique
                  design. Exactly what I needed. Would definitely work with him
                  again!
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#9ca3af] w-10/12 mt-6 pt-4 pb-4">
            <div className="flex lg:flex-row pt-4 ">
              <div>
                <img
                  className="w-14 mr-6 rounded-full"
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5b394f50b09af0960edff91705cd9b11-1679343678600/e5123408-2cd3-478e-80b3-534bb38d6f42.jpg"
                  alt="fiver_img"
                />
              </div>
              <div className="flex flex-col pl-4">
                <h4 className="text-md text-left font-medium mr-3  ">
                  vectorcomm
                </h4>
                <div className="flex my-3">
                  <img
                    className="w-6 mr-2"
                    src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                    alt="country_img"
                  />
                  <h4 className="text-md text-left font-medium pr-3 ">
                    United States
                  </h4>
                </div>
                <div className="rating pb-2 flex items-center ">
                  <span className="text-sm base-400 text-warning">
                    <AiFillStar></AiFillStar>
                  </span>
                  <span className="text-sm base-400 text-warning">
                    <AiFillStar></AiFillStar>
                  </span>
                  <span className="text-sm base-400 text-warning">
                    <AiFillStar></AiFillStar>
                  </span>
                  <span className="text-sm base-400 text-warning">
                    <AiFillStar></AiFillStar>
                  </span>
                  <span className="text-sm base-400 text-warning">
                    <AiFillStar></AiFillStar>
                  </span>
                  <h3 className="font-semibold text-warning pl-1">5</h3>
                  <span className="h-3 border-l-2 border-[gray] mx-2"></span>
                  <h4 className="text-md text-left font-medium flex  pr-3  items-start">
                    1 week ago
                  </h4>
                </div>
                <p className="font-medium text-lg">
                  Steve was great to work and created a really cool, unique
                  design. Exactly what I needed. Would definitely work with him
                  again!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
