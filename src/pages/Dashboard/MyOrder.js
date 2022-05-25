import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/orders/${email}`;
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
          fetch(`http://localhost:5000/orders/${id}`, {
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
              <th>Payment</th>
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
