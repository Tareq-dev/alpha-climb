import React from "react";

const Banner = () => {
  const random = Math.floor(1000 + Math.random() * 9000);
  console.log(random);
  return (
    <div className="max-h-full">
    <img src="https://sky-cycle.com/wp-content/uploads/2021/06/ba764a994a3240568ebc53aa5889b1a2_1306x734-1024x576.jpg" alt="" />
    </div>
  );
};

export default Banner;
