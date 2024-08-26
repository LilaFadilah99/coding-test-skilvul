import { useState } from "react";

const ShoppingList = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    setList([...list, item]);
    setItem("");
  };

  return (
    <div>
      <input type="text" placeholder="Add an item" value={item} onChange={(e) => setItem(e.target.value)} />
      <button onClick={addItem}>Add</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
