import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
const CheckoutForm = ({ order }) => {
  const { id } = useParams();
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const { price, name, email } = order;
  useEffect(() => {
    if (price) {
      fetch(
        "https://intense-beyond-53965.herokuapp.com/create-payment-intent",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ price }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.clientSecret) {
            setClientSecret(data.clientSecret);
          }
        });
    }
  }, [price]);
  const handlePaymentSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setPaymentError(error?.message);
    setPaymentSuccess("");
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (intentError || paymentError) {
      Swal.fire({
        icon: "error",
        title: "sorry...",
        text: intentError?.message,
      });
      setPaymentError(intentError?.message);
    } else {
      setPaymentError("");
      setPaymentSuccess("Successfully Payment!!!");
      setTransactionId(paymentIntent.id);

      Swal.fire({
        icon: "success",
        title: "Successfully payment!!",
      });

      const payment = {
        paymentId: id,
        transactionId: paymentIntent.id,
      };
      fetch(`https://intense-beyond-53965.herokuapp.com/order/${email}/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {});
    }
  };

  return (
    <div>
      <form
        onSubmit={handlePaymentSubmit}
        className="bg-sky-100 py-4 px-4 rounded-xl"
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm mt-6"
          type="submit"
          disabled={!stripe || !clientSecret || paymentSuccess}
        >
          Pay
        </button>
      </form>

      {paymentSuccess && (
        <div className="text-green-700">
          <p>
            Your transaction ID :
            <span className="text-xl py-1 font-bold"> {transactionId}</span>{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
