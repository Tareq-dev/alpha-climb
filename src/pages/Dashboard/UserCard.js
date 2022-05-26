import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UserCard = ({ user }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://intense-beyond-53965.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.statusCode === 403) {
          toast.error("Made Admin Fail");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Made Admin Successfully");
        }
      });
  };

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const deleteUser = (email) => {
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
          fetch(`https://intense-beyond-53965.herokuapp.com/user/${email}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {});
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (data.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };
  return (
    <tr>
      <td>{user.email}</td>
      {role !== "admin" ? (
        <td>
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        </td>
      ) : (
        <td className="font-bold text-green-500">Admin</td>
      )}
      <th>
        <button
          onClick={() => deleteUser(email)}
          className="btn btn-xs bg-red-500"
        >
          Remove User
        </button>
      </th>
    </tr>
    // <div>

    //         {role !== "admin" && (
    //
    //         )}
    //       </div>
    //       <div className="flex-initial w-32">
    //
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default UserCard;
