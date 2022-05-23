import React from "react";

const MyOrder = () => {
  return (
    <div>
      <h2 className="text-center text-2xl font-semibold mb-5">My Orders: {} times</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>O. Quantity</th>
              <th>Total Price</th>
              <th>Transaction Id</th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Phonix</td>
              <td>58</td>
              <td>5800</td>
              <td>1</td>
              <td>UnPaid</td>
              <td>Cancel</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
