import React from "react";

const AllUser = () => {
  return (
    <div className="px-10">
      <div class="card w-full bg-base-300 shadow-xl">
        <div class="flex p-2 items-center mt-2">
          <div class="flex-none w-24">
            <div class="avatar">
              <div class="w-20 rounded-full">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="flex-initial w-32 ...">
            <h2>Tarequl Islam</h2>
          </div>
          <div class="flex-initial w-32 ...">Email</div>
          <div class="flex-initial w-32 ...">
            <button className="btn btn-sm">Make Admin</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
