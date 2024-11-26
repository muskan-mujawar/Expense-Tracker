import React from "react";

export default function Stats({ sharedData }) {
  var Income = sharedData
    .filter((t) => t.amount > 0)
    .reduce((previous, current) => {
      return previous + current.amount;
    }, 0);
  var Expense = sharedData
    .filter((t) => t.amount < 0)
    .reduce((previous, current) => {
      return previous + Math.abs(current.amount);
    }, 0);

  return (
    <div className="d-flex mb-3 ">
      <p className="border rounded p-4 m-2 text-success income-box">{Income}</p>
      <p className="border rounded p-4 m-2 text-danger expense-box  ">
        {Expense}
      </p>
    </div>
  );
}
