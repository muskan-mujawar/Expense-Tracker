import React, { useState } from "react";

export default function Dropdown({ onSelectCategory }) {
  const [item, setItem] = useState("Select Category");
  const categories = ["Bills", "Groceries", "Travel", "Food", "Shopping"];

  function handleSelect(event) {
    const selected = event.target.textContent;
    setItem(selected);
    onSelectCategory(selected);
  }

  return (
    <div>
      <h5 className="mt-3 mb-1">Category:</h5>
      <div className="dropdown">
        <button
          className="border border-black btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          {item}
        </button>
        <ul className="dropdown-menu">
          {categories.map((cat) => (
            <li key={cat}>
              <a className="dropdown-item" onClick={handleSelect}>
                {cat}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
