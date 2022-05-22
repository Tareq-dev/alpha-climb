import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useSingleProduct from "../../Hooks/useSingleProduct";

const Purchase = () => {
  const { id } = useParams();
  const [product] = useSingleProduct(id);
  const [stock, setStock] = useState({ qty: "" });
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setStock(data));
  });

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-14 mx-auto">
        <div className="lg:w-full mx-auto flex flex-wrap">
          <div className="lg:w-1/2  lg:h-auto h-80">
            <img
              alt="ecommerce"
              className="w-full lg:h-auto h-80 object-cover object-center rounded"
              src="https://api.lorem.space/image/shoes?w=400&h=225"
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 mb-3 tracking-widest">
              Supplier: {product.supplier}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>

            <p className="leading-relaxed">{product.description}</p>
            <div className="mt-4 pb-5 border-b-2 border-gray-100 mb-5">
              <span className="title-font mb-6 block font-medium text-2xl text-gray-900">
                $ {product.price}
              </span>
              <div className="flex mb-4">
                <h2
                  className="text-xl text-sky-600 font-semibold"
                  name="number"
                >
                  Quantity in Stock : {stock.qty} Pcs
                </h2>
              </div>
              <div className="flex mt-5">
                {stock.qty === 0 ? (
                  <button className="flex text-white font-bold bg-red-500 border-0 py-1 px-3 h-8 rounded">
                    Sold out
                  </button>
                ) : (
                  <button className="flex text-white font-bold bg-sky-500 border-0 py-1 px-3 h-8 rounded">
                    Delivered One
                  </button>
                )}
                <form className="flex justify-center items-center">
                  <input
                    type="number"
                    name="qty"
                    min="0"
                    className="border-2 text-center mx-3 h-8 p-2 rounded w-16"
                    placeholder="Qty"
                  />
                  <input
                    className="flex mx-3 text-white font-semibold bg-sky-500 border-0 py-1 px-3 h-8 focus:outline-none rounded"
                    type="submit"
                    value="Re-Stock"
                  />
                </form>
              </div>
            </div>
            <div className="flex">
              <Link
                to="/inventory"
                className="flex mx-auto  text-black bg-sky-500 border-0 py-2 px-6 focus:outline-none rounded"
              >
                Go to Inventory
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
