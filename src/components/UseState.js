import React, { useState } from "react";

function UseState() {
  const [number, setNumber] = useState({ count: 1, color: "cool" });

  function onIncrement() {
    setNumber((pr) => {
      return { ...pr, count: pr.count + 1 };
    });
  }

  function onDcrement() {
    setNumber((pr) => pr - 1);
  }

  return (
    <div>
      <button onClick={onDcrement}>-</button>
      <span>{number.count}</span>
      <span>{number.color}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}

export default UseState;
