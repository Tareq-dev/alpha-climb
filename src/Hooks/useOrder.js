import { useEffect, useState } from "react";

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [orders]);
  return [orders];
};
export default useOrders;
