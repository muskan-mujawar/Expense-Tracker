import React, { useState } from "react";
import Input from "./Input";
import List from "./List";
import Budget from "./Budget";
import Stats from "./stats.jsx";

export default function One() {
  const [data, setData] = useState([]);

  function handleAdd(newItem) {
    setData([...data, newItem]);
  }

  return (
    <div className="container d-flex justify-content-around mt-4">
      <div>
        <Stats sharedData={data} />
        <Input setSharedData={handleAdd} />
        <List sharedData={data} />
      </div>
      <Budget sharedData={data} />
    </div>
  );
}
