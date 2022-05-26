import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const url = `https://intense-beyond-53965.herokuapp.com/orders/${email}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
      });
  }, [email]);
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  const cancelOrder = (id) => {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "cancel!",
        reverseButtons: true,
      })

      .then((data) => {
        if (data.isConfirmed) {
          fetch(`https://intense-beyond-53965.herokuapp.com/orders/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              const remaining = order.filter((product) => product._id !== id);
              setOrder(remaining);
            });
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          data.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };
  const payment = (id) => {
    navigate(`/payment/${id}`);
  };
  return (
    <div>
      <h2 className="text-center text-2xl font-semibold mb-5">
        You Ordered : {order.length} times
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Product Name</th>
              <th>O. Quantity</th>
              <th>Total Price</th>
              <th>Payment</th>
              <th>Pay</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {order.map((o, i) => (
              <tr key={i} o={o}>
                <th>{i + 1}</th>
                <td>{o.name}</td>
                <td>{o.orderQuantity}</td>
                <td>{o.price}</td>
                <td>
                  {o?.paid === true ? (
                    <span className="px-2 bg-green-300">Paid</span>
                  ) : (
                    <span className="px-2 bg-red-400">UnPaid</span>
                  )}
                </td>
                <td>
                  {o?.paid === true ? (
                    <span className="block bg-pink-300 px-2">
                      TnxId : {o.transactionId.slice(0, 10)}
                    </span>
                  ) : (
                    <button
                      disabled={o.paid}
                      onClick={() => payment(o.productId)}
                      className="px-2 bg-orange-300"
                    >
                      Please Pay
                    </button>
                  )}
                </td>
                <td>
                  {o?.paid === true ? (
                    ""
                  ) : (
                    <button
                      onClick={() => cancelOrder(o._id)}
                      className="btn btn-xs"
                    >
                      Cancel Order
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
