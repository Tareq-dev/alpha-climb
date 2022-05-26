import Product from "./Product";
import useProducts from "../../Hooks/useProducts";
import { Link } from "react-router-dom";

const Products = () => {
  const [products] = useProducts([]);
  return (
    <div className="px-3 bg-sky-100 py-7">
      <h2 className="text-3xl text-center py-5 font-bold">
        Our Products
      </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.slice(-6).map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
      <div className="flex justify-center mt-14">
        <button className="btn btn-sm btn-outline">
          <Link to="/products"> See All Products</Link>
        </button>
      </div>
    </div>
  );
};

export default Products;
