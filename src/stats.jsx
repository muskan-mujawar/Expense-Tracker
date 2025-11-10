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
  var balance = Income - Expense;

  return (
    <div className="d-flex mb-3 h-[15em ]s">
      <div className=" border p-0 m-2 rounded balance-box  ">
        Current Balance
        <br />
        <p className="flex m-0 p-[5em] text-center">{balance}</p>
      </div>
      <div className="border rounded p-0 m-2 income-box">
        Income <br />
        {Income}
      </div>
      <div className="border rounded p-0 m-2 expense-box  ">
        Expense <br />
        {Expense}
      </div>
    </div>
  );
}
