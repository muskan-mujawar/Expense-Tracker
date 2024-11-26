import React, { useState } from "react";

export default function Dropdown(sharedData) {
  const [item, setItems] = useState("Category");

  function handleItems(event) {
    setItems(event.target.textContent);
  }

  return (
    <div>
      <h5 className="mt-3">Category:</h5>
      <div className="dropdown">
        <button
          className="border border-black btn btn-outline-secondary dropdown-toggle "
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ width: "300px" }}
        >
          {item}
        </button>
        <ul className="dropdown-menu">
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={handleItems}
            >
              Rent
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={handleItems}
            >
              Groceries
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={handleItems}
            >
              Salary
            </button>
          </li>
        </ul>
      </div>
    </div>
  )n;
}
