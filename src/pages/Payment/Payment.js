import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate, useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const stripePromise = loadStripe(
  "pk_test_51L2G4sBmhlq91OcmM28zWFxrGlcdSXj1zS8BeHVC6Wmb7hnNORKQ7MhJyVY6nDQCua0L1bhsFX3w2xB6lnp1iTGe00CFqEoh15"
);
const Payment = () => {
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const navigate = useNavigate();
  const email = user?.email;
  useEffect(() => {
    const url = `https://intense-beyond-53965.herokuapp.com/orders/${email}/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
      });
  }, [email, id]);

  //Back to previous page

  const backBtn = () => {
    navigate(`/products/${id}`);
  };
  return (
    <div>
      {order.slice(-1).map((o) => (
        <div className="my-8 mx-auto w-3/4">
          <div o={o} key={o.productId}>
            <div className="md:w-full h-full justify-center items-center bg-black text-white py-8 rounded-t-3xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center p-5">
                <div onClick={backBtn} className="flex justify-center mb-5">
                  <FaArrowAltCircleLeft size="33" />
                </div>
                <div className="bg-sky-300 text-black px-5 py-3 mb-2 rounded-lg">
                  <h2 className="text-md text-center">Order Number</h2>
                  <p className="text-center">{o._id.slice(0, 8)}</p>
                </div>
                <div className="bg-sky-300 text-black px-5 py-3 mb-2 rounded-lg">
                  <h2 className="text-md text-center">Total Price</h2>
                  <p className="text-center">$ {o.price}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="h-full w-full p-5 bg-blue-300 rounded-b-3xl shadow-2xl">
            <div className="flex justify-between">
              <h2 className="text-2xl text-center py-2">
                Please Pay for{" "}
                <span className="font-bold text-orange-600">{o.name}</span>{" "}
              </h2>
              <img
                className="md:w-20 w-16 h-14"
                src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png"
                alt=""
              />
            </div>
            <hr />
            <p class="text-xl py-5 uppercase mb-1">Enter Card Info</p>
            <Elements stripe={stripePromise}>
              <CheckoutForm o={o} />
            </Elements>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Payment;
