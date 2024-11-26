import React, { useState } from "react";
import Input from "./input";
import List from "./list";
import Stats from "./stats";

export default function One() {
  const [data, setData] = useState([]);

  return (
    <div className="container">
      <div className="left">
        <Stats sharedData={data} />
        <Input
          setSharedData={(newdata) => {
            setData([...data, newdata]);
          }}
        />
      </div>
      <div className="right">
        <List sharedData={data} />
      </div>
    </div>
  );
}
