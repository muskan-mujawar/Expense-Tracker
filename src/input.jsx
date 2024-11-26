import React, { useState } from "react";
import Dropdown from "./dropdown";

export default function Input(props) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  function handleChange() {
    props.setSharedData({ name, amount: Number(amount) });
  }

  function handleNumInput(e) {
    const val = e.target.value;
    console.log(val, /^[0-9]*$/.test(val));
    if (/^\-?[0-9]*$/.test(val)) {
      setAmount(val);
    }
  }

  return (
    <div>
      <h5 className="mb-0">Name:</h5>
      <input
        style={{
          width: "300px",
        }}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Transaction Name"
      />
      <Dropdown />
      <h5 className="pt-3 pb-0 mb-0">Amount:</h5>
      <input
        style={{
          width: "300px",
        }}
        value={amount}
        onChange={handleNumInput}
        placeholder="Enter Transaction Amount"
      />

      <div className="pt-3 ">
        {" "}
        <button className="btn btn-outline-secondary" onClick={handleChange}>
          Add
        </button>
      </div>
    </div>
  );
}
