import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Link, useNavigate, useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const stripePromise = loadStripe(
  "pk_test_51L2G4sBmhlq91OcmM2QOya5XLmEQh8eyoFWymoxDlnpenrLYssxHwuAoDWjQ3aKFFAoFJ9wy4QTFSVKcvuZkXA1F00t7tniwdA"
);
const Payment = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const navigate = useNavigate();
  const email = user?.email;
  useEffect(() => {
    const url = `https://alpha-climb-server.onrender.com/orders/${email}/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [email, id]);

  //Back to previous page

  const backBtn = () => {
    navigate(`/products/${id}`);
  };
  return (
    <div>
      {orders.slice(-1).map((order) => (
        <div
          o={order}
          key={order._id}
          className="my-8 mx-4 md:mx-auto md:w-3/4"
        >
          <div>
            <div className="md:w-full h-full justify-center items-center bg-black text-white py-8 rounded-t-3xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center p-5">
                <div onClick={backBtn} className="flex justify-center mb-5">
                  <FaArrowAltCircleLeft size="33" />
                </div>
                <div className="bg-sky-300 text-black px-5 py-3 mb-2 rounded-lg">
                  <h2 className="text-md text-center">Order Number</h2>
                  <p className="text-center">{order._id.slice(0, 8)}</p>
                </div>
                <div className="bg-sky-300 text-black px-5 py-3 mb-2 rounded-lg">
                  <h2 className="text-md text-center">Total Price</h2>
                  <p className="text-center">$ {order.price}</p>
                </div>
                <div className="bg-sky-300 text-black text-center px-5 py-3 mb-2 rounded-lg">
                  <button className="text-md bg-orange-400 px-2 rounded-lg text-center">
                    <Link to="/dashboard/my-order">See your Order</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-full p-5 bg-blue-300 rounded-b-3xl shadow-2xl">
            <div className="flex justify-between">
              <h2 className="text-2xl text-center py-2">
                Please Pay for{" "}
                <span className="font-bold text-orange-600">{order.name}</span>{" "}
              </h2>
              <img
                className="md:w-20 w-16 h-14"
                src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png"
                alt=""
              />
            </div>
            <hr />
            <p className="text-xl py-5 uppercase mb-1">Enter Card Info</p>
            <Elements stripe={stripePromise}>
              <CheckoutForm key={order._id} order={order} />
            </Elements>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Payment;
