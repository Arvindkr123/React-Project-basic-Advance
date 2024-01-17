import React from "react";
import "./details.css";
const Details = () => {
  return (
    <div>
      <h4>Details</h4>
      <table border={2}>
        <thead>
          <th>Sr No</th>
          <th>Item Code</th>
          <th>Item Name</th>
          <th>Qty</th>
          <th>Rate</th>
          <th>Amount</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Item 1</td>
            <td>Item Name</td>
            <td>1.00</td>
            <td>2.00</td>
            <td>3.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Details;
