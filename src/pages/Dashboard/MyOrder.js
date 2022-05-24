import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/orders/${email}`;
    fetch(url,{
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
    })
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
      });
  }, [email]);

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold mb-5">
        You Ordered : {order.length} times
      </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Product Name</th>
              <th>O. Quantity</th>
              <th>Total Price</th>
              <th>Transaction Id</th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {order.map((o, i) => (
              <tr key={i} o={o}>
                <th>{i + 1}</th>
                <td>{o?.name}</td>
                <td>{o.orderQuantity}</td>
                <td>{o.price}</td>
                <td>Trx</td>
                <td>UnPaid</td>
                <td>Cancel</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
