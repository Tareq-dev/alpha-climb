import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://alpha-climb-server.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [products._id]);
  return [products];
};
export default useProducts;
