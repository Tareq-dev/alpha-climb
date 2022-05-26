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
    <div className="overflow-x-auto w-full">
      <p className="text-center text-xl py-4">Total User : {users.length}</p>

      <table className="table w-full">
        <thead>
          <tr>
            <th>Email</th>
            <th>Admin / User</th>
            <th>Remove User</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserCard key={user._id} refetch={refetch} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
