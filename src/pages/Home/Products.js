import Product from "./Product";
import useProducts from "../../Hooks/useProducts";
import { Link } from "react-router-dom";

const Products = () => {
  const [products] = useProducts([]);
  return (
    <div className="px-3 bg-sky-200 py-7">
      <h2 className="text-4xl text-center text-primary py-10 font-semibold">
        Our Products
      </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.slice(0, 6).map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <button className="btn btn-sm btn-outline">
          <Link to="/products"> See All Products</Link>
        </button>
      </div>
    </div>
  );
};

export default Products;
