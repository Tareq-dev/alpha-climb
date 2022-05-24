import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import UserCard from "./UserCard";

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
        <UserCard key={user._id} refetch={refetch} user={user} />
      ))}
    </div>
  );
};

export default AllUser;
