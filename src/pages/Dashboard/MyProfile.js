import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user, isLoading] = useAuthState(auth);
  const [profile, setProfile] = useState([]);
  const { register, handleSubmit } = useForm();
  const email = user.email;

  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      });
  }, [email]);
  if (isLoading) {
    return <Loading />;
  }
  const onSubmit = (data, event) => {
    const updatedData = data;
    fetch(`http://localhost:5000/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        event.target.reset();
        setProfile(updatedData);
      });
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="mx-10 py-8">
        <div className="flex items-center w-full mb-3">
          <div class="avatar online">
            <div class="w-24 rounded-full shadow-2xl">
              <img src={profile.img || user.photoURL} alt={user.displayName} />
            </div>
          </div>
          <div className="mx-8">
            <h2 className="text-xl mt-1">
              {profile.name || user.displayName} ({profile?.role || "User"})
            </h2>
            <p className="text-sm text-gray-400 mt-1">{profile?.address}</p>
            <p className="text-sm text-gray-400 mt-1">{profile?.phone}</p>
            <p className="text-sm text-gray-400 mt-1">
              {profile.email || user?.email}
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-row">
          <a target="_blank" rel="noreferrer" href={profile?.facebook}>
            <FaFacebook size="25" className="text-blue-600 mx-5" />
          </a>
          <a target="_blank" rel="noreferrer" href={profile?.linkedIn}>
            <FaLinkedinIn size="25" className="text-blue-600" />
          </a>
        </div>
      </div>
      <div className="mx-10">
        <h2 className="text-xl">Update profile information ?</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            readOnly
            value={user?.email}
            class="input input-bordered w-full input-xs max-w-xs  mt-4"
            {...register("email", { required: true })}
          />
          <br />
          <input
            type="text"
            placeholder="Name"
            class="input input-bordered input-sm w-full max-w-xs  mt-4"
            {...register("name", { required: true })}
          />
          <br />
          <input
            type="text"
            placeholder="Address"
            class="input input-bordered input-sm w-full max-w-xs mt-4"
            {...register("address", { required: true })}
          />
          <br />
          <input
            type="text"
            placeholder="Phone Number"
            class="input input-bordered input-sm w-full max-w-xs  mt-4"
            {...register("phone")}
          />
          <br />
          <input
            type="text"
            placeholder="Facebook URL"
            class="input input-bordered input-sm w-full max-w-xs  mt-4"
            {...register("facebook")}
          />
          <br />
          <input
            type="text"
            placeholder="LinkedIn URL"
            class="input input-bordered input-sm w-full max-w-xs  mt-4"
            {...register("linkedIn")}
          />
          <br />
          <input
            type="text"
            placeholder="Img URL"
            class="input input-bordered input-sm w-full max-w-xs  mt-4"
            {...register("img")}
          />
          <br />
          <div className="">
            <input className="btn btn-sm mt-5" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
