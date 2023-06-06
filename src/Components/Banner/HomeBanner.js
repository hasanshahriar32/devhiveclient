import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const HomeBanner = () => {
  return (
    <div>
      <div class="overflow-x-hidden bg-gray-50">
        <section class="pt-12 bg-gray-50 sm:pt-16">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="max-w-2xl mx-auto text-center">
              <h1 class="px-6 text-lg lg:text-2xl font-semibold text-gray-600 font-inter">
                Grow your career fast with right platform.
              </h1>
              <p class="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                A Global Freelancing Marketplace for{" "}
              </p>
              {/* <br /> */}
              <span class="relative text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj left-2 inline-flex sm:inline">
                <span class="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span class="relative">
                  <TypeAnimation
                    sequence={[
                      // Same String at the start will only be typed once, initially
                      "Entrepreneurs",
                      1000,
                      "Freelancers",
                      1000,
                      "Consumers",
                      1000,
                    ]}
                    speed={60}
                    //   className="py-5 text-3xl sm:text-4xl md:text-5xl text-gray-700 font-semibold capitalize"
                    // style={{ fontSize: "2em" }}
                    repeat={Infinity}
                  />
                </span>
              </span>

              <div class="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                <Link
                  to="/services"
                  title=""
                  class="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Explore Services
                </Link>

                <Link
                  to="/about"
                  title=""
                  class="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                  role="button"
                >
                  <svg
                    class="w-5 h-5 mr-2"
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  About Us
                </Link>
              </div>

              <p class="mt-8 text-base text-gray-500 font-inter">
                Let's do something amazing to your career!
              </p>
            </div>
          </div>

          <div class="pb-12 mt-5 bg-white">
            <div class="relative">
              <div class="absolute w-[95vw] left-[2.5vw] right-[2.5vw] bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30  h-full inset-0 bg-gray-50"></div>
              <div class="relative  mx-auto">
                <div class="lg:max-w-5xl py-5  mx-6  lg:py-10 lg:mx-auto">
                  <div
                    class="embed-responsive my-3 embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                    style={{ "padding-top": "56.25%" }}
                  >
                    <iframe
                      class="embed-responsive-item  absolute top-0  bottom-0 w-full h-full"
                      title="youtube"
                      src="https://www.youtube.com/embed/74k2dI-k4_4?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                      allowfullscreen=""
                      data-gtm-yt-inspected-2340190_699="true"
                      id="240632615"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeBanner;
