import React, { useState } from "react";
import Dropdown from "./dropdown";

export default function Input(props) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  function handleChange() {
    props.setSharedData({ name, amount: Number(amount), category });
  }

  function handleNumInput(e) {
    const val = e.target.value;

    if (/^\-?[0-9]*$/.test(val)) {
      setAmount(val);
    }
  }

  return (
    <div className="m-2 p-4 border border-black rounded-2xl bg-white">
      <h5 className="mb-0 ">Name:</h5>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Transaction Name"
        className="ps-2 border border-black rounded-md w-[300px]"
      />
      <Dropdown onSelectCategory={(cat) => setCategory(cat)} />
      <h5 className="pt-3 pb-0 mb-0">Amount:</h5>
      <input
        value={amount}
        onChange={handleNumInput}
        placeholder="Enter Transaction Amount"
        className="ps-2 border border-black rounded-md w-[300px]"
      />

      <div className="pt-3">
        <button className=" btn btn-outline-secondary" onClick={handleChange}>
          Add
        </button>
      </div>
    </div>
  );
}
