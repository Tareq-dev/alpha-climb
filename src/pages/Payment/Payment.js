import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import CheckoutForm from "./CheckoutForm";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const stripePromise = loadStripe(
  "pk_test_51L2G4sBmhlq91OcmM28zWFxrGlcdSXj1zS8BeHVC6Wmb7hnNORKQ7MhJyVY6nDQCua0L1bhsFX3w2xB6lnp1iTGe00CFqEoh15"
);
const Payment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const url = `http://localhost:5000/products/${id}`;
  const { data: order, isLoading } = useQuery("orders", () =>
    fetch(url).then((res) => res.json())
  );
  const backBtn = () => {
    navigate(`/products/${id}`);
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="py-14 mx-auto w-3/4">
      <div class="card lg:card-side shadow-lg">
        <div className="md:w-48 flex justify-center items-center bg-black text-white py-8">
          <div>
            <div onClick={backBtn} className="flex justify-center mb-5">
                <FaArrowAltCircleLeft size="33" />
            </div>
            <div className="bg-primary p-2 mb-2 rounded-lg">
              <h2 className="text-md text-center">Order Number</h2>
              <p className="text-center">{id.slice(0, 5) + "33"}</p>
            </div>
            <div className="bg-primary p-2 mb-2 rounded-lg">
              <h2 className="text-md text-center">Price</h2>
              <p className="text-center">$ 345</p>
            </div>
          </div>
        </div>
        <div class="h-full w-full p-5 bg-blue-300">
          <div className="flex justify-between">
            <h2 class="card-title uppercase mb-1">Enter Card Info</h2>
            <img
              className="w-20"
              src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png"
              alt=""
            />
          </div>
          <hr />
          <h2 className="text-2xl text-center py-5">Pay for {order.name}</h2>
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
