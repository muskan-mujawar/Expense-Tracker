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
    <div className="p-4 m-2 ms-0 ps-3 h-[10em] d-flex ">
      <div className="flex flex-col items-center justify-center border p-0 m-1 ms-0 rounded balance-box ">
        Current Balance
        <br />
        <h3 className=" m-0">₹{balance}</h3>
      </div>
      <div className="flex flex-col items-center justify-center border p-0 m-1 rounded income-box">
        Income <br />
        <h3 className=" m-0">₹{Income}</h3>
      </div>
      <div className="flex flex-col items-center m-1 justify-center border p-0 rounded expense-box">
        Expense <br />
        <h3 className=" m-0">₹{Expense} </h3>
      </div>
    </div>
  );
}
