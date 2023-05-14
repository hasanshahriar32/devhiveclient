import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const HeroBanner = () => {
  return (
    <div>
      <div class="bg-white">
        <section class=" bg-opacity-30 py-10 sm:py-16 lg:py-24">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <p class="text-base font-semibold tracking-wider text-blue-600 uppercase">
                  A Global Freelancing Marketplace
                </p>
                <TypeAnimation
                  sequence={[
                    // Same String at the start will only be typed once, initially
                    "Fancy in innovation",
                    1000,
                    "Fancy in creation",
                    1000,
                    "Fancy in communication",
                    1000,
                    "Fancy in delivery",
                    1000,
                  ]}
                  speed={60}
                  className="py-5 text-3xl sm:text-4xl md:text-5xl text-gray-700 font-semibold capitalize"
                  // style={{ fontSize: "2em" }}
                  repeat={Infinity}
                />
                <p class="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                  Grow your career fast with right platform.
                </p>

                <Link
                  to="/register"
                  title=""
                  class="inline-flex  items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-warning rounded-full lg:mt-16 hover:bg-info focus:bg-yellow-400"
                  role="button"
                >
                  Join for free
                  <svg
                    class="w-6 h-6 ml-8 -mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>

                <p class="mt-5 text-gray-600">
                  Already joined us?{" "}
                  <Link
                    to="/login"
                    title=""
                    class="text-black transition-all duration-200 hover:underline"
                  >
                    Log in
                  </Link>
                </p>
              </div>

              <div>
                <img
                  class="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      ;
    </div>
  );
};

export default HeroBanner;
