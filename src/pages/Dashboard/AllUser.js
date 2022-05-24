import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";

const AllUser = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  refetch();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="px-10">
      <p className="text-center text-xl py-4">Total User : {users.length}</p>
      {users.map((user) => (
        <div
          key={user._id}
          user={user}
          class="card w-full bg-base-200 shadow-xl mt-4"
        >
          <div class="flex justify-between p-2 items-center mt-2">
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
              <h2>{user?.name}</h2>
            </div>
            <div class="flex-initial w-32">{user.email}</div>
            <div class="flex-initial w-32">
              <button className="btn btn-sm">Make Admin</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllUser;
