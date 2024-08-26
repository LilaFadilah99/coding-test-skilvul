import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count++);
  };

  const decrement = () => {
    setCount(count--);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
