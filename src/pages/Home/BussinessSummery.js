import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { RiExchangeDollarLine } from "react-icons/ri";
import { MdReviews } from "react-icons/md";
import { SiProtools } from "react-icons/si";

const BussinessSummery = () => {
  return (
    <section className="text-gray-600 body-font py-8">
      <div className="container px-5 py-5 mx-auto bg-base-100 rounded-lg mt-8">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-4xl font-bold title-font mb-4 text-gray-900">
            Here Is Our Bussiness Summery.
          </h1>
          <p className="lg:w-2/3 mx-auto text-md leading-relaxed">
            We like designing stuff ourselves. That’s how we started, by making
            the frames and parts we always wanted. It starts with our own
            personal use and extends to the community in one of the best testing
            environments in the world.
          </p>
        </div>
        <div className="flex flex-wrap -m-2 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-info bg-white px-4 py-6 rounded-lg">
              <div className="text-6xl flex justify-center text-info">
                <BsFillPersonLinesFill />
              </div>
              <h2 className="title-font font-medium text-2xl text-gray-900">
                2.7K
              </h2>
              <p className="leading-relaxed">Customers</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-info bg-white px-4 py-6 rounded-lg">
              <div className="text-6xl flex justify-center text-info">
                <RiExchangeDollarLine />
              </div>
              <h2 className="title-font font-medium text-2xl text-gray-900">
                180M+
              </h2>
              <p className="leading-relaxed">Annual revenue</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-info bg-white px-4 py-6 rounded-lg">
              <div className="text-6xl flex justify-center text-info">
                <MdReviews />
              </div>
              <h2 className="title-font font-medium text-2xl text-gray-900">
                1.2k+
              </h2>
              <p className="leading-relaxed">Reviews</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-info bg-white px-4 py-6 rounded-lg">
              <div className="text-6xl flex justify-center text-info">
                <SiProtools />
              </div>
              <h2 className="title-font font-medium text-2xl text-gray-900">
                1.5k+
              </h2>
              <p className="leading-relaxed">Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BussinessSummery;
