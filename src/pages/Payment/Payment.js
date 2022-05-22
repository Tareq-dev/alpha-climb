import React from "react";

const Payment = () => {
  return (
    <div className="py-14 mx-auto w-3/4">
      <div class="card lg:card-side bg-base-100 shadow-lg h-96">
        <div className="md:w-48 flex justify-center items-center bg-black text-white py-8">
          <div>
            <div className="bg-primary p-2 mb-2">
              <h2 className="text-md text-center">Order Number</h2>
              <p className="text-center">12345</p>
            </div>
            <div className="bg-primary p-2 mb-2">
              <h2 className="text-md text-center">Price</h2>
              <p className="text-center">$ 345</p>
            </div>
            <div className="flex justify-center">
              <button className="btn btn-sm">
              <img className="w-8" src="https://i.ibb.co/44CnMXN/Pngtree-purple-left-arrow-2090709.png" alt="" />
              Back</button>
            </div>
          </div>
        </div>
        <div class="h-96 w-full p-5 bg-blue-300">
         <div className='flex justify-between'>
         <h2 class="card-title uppercase mb-1">Master Card</h2>
         <img className='w-20' src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" alt="" />
         </div>
          <hr />
          <form className="mt-2">
            <div className="w-full">
              <input
                type="text"
                placeholder="Input Your Name Here"
                class="input input-bordered border-black w-full max-w-xs"
              />
              <br />
              <input
                type="text"
                placeholder="Input Your Name Card Number"
                class="input input-bordered border-black w-full max-w-xs mt-2"
              />
              <input
                type="text"
                placeholder="Expiration"
                class="input input-bordered border-black w-full max-w-xs mt-2"
              />
              <input
                type="text"
                placeholder="CVV"
                class="input input-bordered border-black w-full max-w-xs mt-2 mb-2"
              />
              <hr />
            </div>
            <button className="btn btn-sm mt-4">Proceed CheckOut <img className="w-8 mx-2" src="https://i.ibb.co/Br4dzDm/arrow-next-2825.png" alt="" /></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
