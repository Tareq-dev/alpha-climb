import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const AddProducts = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const onSubmit = (data, event) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl text-center py-8">Add Products</h2>
      <div className="flex justify-center">
        <form className="w-3/4" onSubmit={handleSubmit(onSubmit)}>
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
            type="number"
            placeholder="Price Per Unit"
            class="input input-bordered input-sm w-full max-w-xs mt-4"
            {...register("price", { required: true })}
          />
          <br />
          <input
            type="number"
            placeholder="Available Quantity"
            class="input input-bordered input-sm w-full max-w-xs mt-4"
            {...register("availableQuantity", { required: true })}
          />
          <br />
          <textarea
            type="text"
            placeholder="Product Description"
            class="input input-bordered input-sm w-full max-w-xs h-32  mt-4"
            {...register("description")}
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

export default AddProducts;
