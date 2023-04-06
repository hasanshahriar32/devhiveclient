import React from 'react';
import {Link} from 'react-router-dom';

const BackgroundImageWithRange = () => {
    return (
        <section
  className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center sm:text-left">
      <h1 className="text-3xl font-extrabold sm:text-5xl text-[white]">
      Work Your Way

      
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-[white]">
      You bring the skill. We'll make earning easy.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <Link
          to="/"
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </Link>

        <Link
          to="/"
          className="block w-full rounded bg-secondary px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
</section>
    );
};

export default BackgroundImageWithRange;