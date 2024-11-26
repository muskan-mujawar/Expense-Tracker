import React from "react";
import { PiWallet } from "react-icons/pi";

export default function Navbar() {
  return (
    <div>
      {" "}
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
          <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span className="fs-4  space-grotesk-fontstyle ">
              <div style={{ color: "#317873" }}>
                {" "}
                <PiWallet size="2rem" className="me-2 b-2" />
                <strong>Expense Tracker</strong>
              </div>
            </span>
          </a>
        </header>
      </div>
    </div>
  );
}
