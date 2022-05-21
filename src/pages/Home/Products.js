import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h2 className="text-4xl text-center text-primary py-10 font-semibold">Our Products</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.slice(0, 6).map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
