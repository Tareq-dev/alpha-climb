import React from "react";
import Swal from "sweetalert2";
import useOrders from "../../Hooks/useOrder";

const ManageOrder = () => {
  const [orders] = useOrders([]);

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const deleteOrders = (id) => {
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
            .then((data) => {});
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
    <div class="overflow-x-auto">
      <h2 className="text-2xl text-center py-2">Manage Products</h2>
      <table class="table w-full">
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Price</th>
            <th>Order Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order._id} order={order}>
              <th>{index + 1}</th>
              <td>{order.name}</td>
              <td>{order.price}</td>
              <td>{order.orderQuantity}</td>
              <td>
                <button
                  onClick={() => deleteOrders(order._id)}
                  className="btn btn-sm bg-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrder;
