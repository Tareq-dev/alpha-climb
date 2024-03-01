import React from "react";

const Banner = () => {
  return (
    <div className="max-h-full">
      <img
        className="lg:w-screen md:h-[500px] object-fill rounded-md"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mff-roka-0618-1-preview-maxwidth-3000-maxheight-3000-ppi-300-quality-90-1620433208.jpg?crop=1.00xw:0.846xh;0,0.154xh&resize=1600:*"
        alt=""
      />
      <h2 className="text-center text-4xl md:text-5xl font-serif pt-5">
        100 Cycling Kits to Completely Transform Your Bike Life Easier
      </h2>
      <p className="text-center text-xl text-gray-400 font-bold uppercase py-5">
        WANT TO BE A BETTER CYCLIST? HERE IS A GENEROUS HELPING OF WISDOM THAT
        STANDS THE TEST OF TIME.
      </p>
    </div>
  );
};

export default Banner;
