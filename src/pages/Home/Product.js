import React from "react";

const Product = ({ product }) => {
  const {
    _id,
    name,
    description,
    img,
    price,
    minimumQuantity,
    availableQuantity,
  } = product;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-3">
        <h2 className="card-title">
          {name}
        </h2>
        <p>{description.slice(0, 30) + "...."}</p>
        <p className="bg-sky-100 py-1 px-2 rounded-xl font-bold">Price : ${price}</p>
        <span className="bg-sky-100 py-1 px-2 rounded-xl">Available: {availableQuantity} Pcs</span>
        <span className="bg-sky-100 py-1 px-2 rounded-xl">Minimum Order: {minimumQuantity} Pcs</span>
        
        <div className="card-actions justify-center">
          <button className="btn btn-sm btn-outline mt-2">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
