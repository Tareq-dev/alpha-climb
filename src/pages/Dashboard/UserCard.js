import React from "react";
import { toast } from "react-toastify";

const UserCard = ({ user }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://intense-beyond-53965.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.statusCode === 403) {
          toast.error("Made Admin Fail");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Made Admin Successfully");
        }
      });
  };
  return (
    <div>
      <div class="card w-full bg-base-200 shadow-xl mt-8">
        <div class="flex justify-between p-2 items-center mt-2">
          <div class="flex-initial w-32">
            <p>{user.email}</p>
          </div>
          <div class="flex-initial w-32">
            {role !== "admin" && (
              <button onClick={makeAdmin} className="btn btn-xs">
                Make Admin
              </button>
            )}
          </div>
          <div class="flex-initial w-32">
            <button className="btn btn-xs bg-red-500">Remove User</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
