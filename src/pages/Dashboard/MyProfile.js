import React, { useReducer, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedIn, setLinkedin] = useState("");
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const [user, isLoading] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const email = user.email;
  fetch(`http://localhost:5000/user/profile/${email}`)
    .then((res) => res.json())
    .then((data) => {
      const update = data.slice(-1);
      const updatedProfile = update[0];
      setName(updatedProfile.name);
      setAddress(updatedProfile.address);
      setPhone(updatedProfile.phone);
      setImg(updatedProfile.img);
      setFacebook(updatedProfile.facebook);
      setLinkedin(updatedProfile.linkedIn);
    });

  const onSubmit = (data, event) => {
    fetch("http://localhost:5000/user/profile", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    event.target.reset();
    forceUpdate();
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
              <img src={img || user.photoURL} alt={user.displayName} />
            </div>
          </div>
          <div className="mx-8">
            <h2 className="text-xl mt-1">{name || user.displayName}</h2>
            <p className="text-sm text-gray-400 mt-1">{address}</p>
            <p className="text-sm text-gray-400 mt-1">{phone}</p>
            <p className="text-sm text-gray-400 mt-1">{user?.email}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-row">
          <a target="_blank" rel="noreferrer" href={facebook}>
            <FaFacebook size="25" className="text-blue-600 mx-5" />
          </a>
          <a target="_blank" rel="noreferrer" href={linkedIn}>
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
