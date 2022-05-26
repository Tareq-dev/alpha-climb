import React from "react";

const Subscription = () => {
  return (
    <div className="py-4">
      <div className="p-4 rounded-3xl w-full h-content bg-sky-300 shadow-xl flex justify-center items-center">
        <div>
          <div>
            <h2 className="text-center text-2xl py-2 font-bold">
              STAY IN THE LOOP
            </h2>
          </div>

          <div className="flex justify-center">
            <p className="text-center px-4 md:w-1/2 py-2">
              Be the first to hear about special offers, exciting new stuff
              we've been working on and in general all good things Chromag!
            </p>
          </div>
          <div className="flex justify-center">
            <div className="p-4 rounded-3xl w-54 md:w-96 bg-base-100 shadow-xl my-3">
              <div className="card-body">
                <div className="flex justify-center">
                  <img
                    className="w-28"
                    src="https://i.ibb.co/VNLWQvr/Mail-box.png"
                    alt=""
                  />
                </div>
                <p className="text-center">Subscribe to our newsletter</p>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="card-actions justify-center">
                  <button className="btn bg-sky-300">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
