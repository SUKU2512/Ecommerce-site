import React from "react";

export default function Trail() {
  return (
    <div>
      <h4>CALCULATIONS</h4>
      <div style={{ display: "flex" }}>
        <input type="text" />
        <input type="text" />
      </div>
      <div style={{ display: "flex" }}>
        <button>ADDITION</button>
        <button>SUBTRACTION</button>
        <button>MULTIPLICATION</button>
        <button>DIVISION</button>
      </div>
    </div>
  );
}
