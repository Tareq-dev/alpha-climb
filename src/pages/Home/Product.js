import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const navigateToPurchasePage = (id) => {
    navigate(`/products/${id}`);
  };
  const { _id, name, img, description, price, availableQuantity } = product;
  return (
    <div className="bg-base-100 p-2 rounded-lg h-max">
      <div className="flex justify-center items-center">
      <img className="w-[200px] h-[150px] object-contain" src={img} alt="pd" />
      </div>
      <div className="card-body pb-2">
        <h2 className="text-xl font-bold">{name}</h2>
        {/* <span className="px-2 py-1">{description.slice(0, 100) + "...."}</span> */}
        <span className="bg-sky-100 py-1 px-2 rounded-xl font-bold">
          Price : ${price}
        </span>
        <span className="bg-sky-100 py-1 px-2 rounded-xl">
          Available: {availableQuantity} Pcs
        </span>

        <div className="card-actions justify-center">
          <button
            onClick={() => navigateToPurchasePage(_id)}
            className="btn btn-sm btn-outline mt-4"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
