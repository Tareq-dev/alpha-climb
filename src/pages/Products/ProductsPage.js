import React from "react";
import useProducts from "../../Hooks/useProducts";
import Product from "../Home/Product";

const ProductsPage = () => {
  const [products] = useProducts([]);
  return (
    <div className="px-12 bg-sky-200 py-7">
      <h2 className="text-4xl text-center text-primary py-10 font-semibold">
        Our Products
      </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
