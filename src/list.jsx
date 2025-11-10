import React from "react";

export default function List({ sharedData }) {
  return (
    <div>
      <h1 className="space-grotesk-font ">Transactions</h1>
      {sharedData.map((data) => {
        return (
          <div className="border border-secondary-subtle rounded-2 d-flex justify-content-between mb-3 p-2 ">
            <div>
              <h5 className="mb-1">{data.name}</h5>
              <p className="mb-0 text-muted">{new Date().toDateString()}</p>
            </div>
            <div>
              <h6 style={{ color: data.amount > 0 ? "green" : "red" }}>
                ₹{Math.abs(data.amount)}
              </h6>
              <h6>{data.item}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}
