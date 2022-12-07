import { useEffect, useState } from "react";

const useSingleProduct = (id) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `https://alpha-climb-server.onrender.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);
  return [product, setProduct];
};

export default useSingleProduct;
