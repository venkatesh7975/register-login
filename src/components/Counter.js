import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  let colorName;
  if (count > 0) {
    colorName = "text-success";
  } else if (count === 0) {
    colorName = "text-dark";
  } else {
    colorName = "text-danger";
  }

  return (
    <div className="text-center border-primary">
      <h2>Counter</h2>
      <h3>
        Count:<span className={colorName}> {count}</span>
      </h3>
      <button className="bg-success mr-3" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="bg-danger" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
