import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://intense-beyond-53965.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const deleteProducts = (id) => {
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
          fetch(`https://intense-beyond-53965.herokuapp.com/products/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              const remaining = products.filter(
                (product) => product._id !== id
              );
              setProducts(remaining);
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
    <div className="overflow-x-auto">
      <h2 className="text-2xl text-center py-2">Manage Products</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Sl</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id} product={product}>
              <th>{index + 1}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.availableQuantity}</td>
              <td>
                <button
                  onClick={() => deleteProducts(product._id)}
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

export default ManageProducts;
