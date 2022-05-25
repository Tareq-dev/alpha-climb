import React from "react";
import useProducts from "../../Hooks/useProducts";
import Footer from "../Home/Footer";
import Product from "../Home/Product";

const ProductsPage = () => {
  const [products] = useProducts([]);
  return (
    <div>
      <div className="px-4 bg-sky-100 py-2 pb-14">
        <h2 className="text-4xl text-center py-10 font-semibold">
          Our Products
        </h2>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
