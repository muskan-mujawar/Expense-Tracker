import React from "react";

export default function List({ sharedData }) {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="m-2 p-4 border border-black rounded-2xl bg-white">
      <h1 className="space-grotesk-font ">Transactions</h1>
      {sharedData.map((data) => {
        return (
          <div className="border border-secondary-subtle rounded-2 d-flex justify-content-between mb-3 p-2 ">
            <div className="flex-container">
              <h5 className="item-center mb-1  ">{data.name}</h5>
            </div>
            <div>
              <h5 style={{ color: data.amount > 0 ? "green" : "red" }}>
                ₹{Math.abs(data.amount)}
              </h5>
              <h6 className="mb-0 text-muted">{formattedDate}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}
