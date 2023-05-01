// Rendering Lists
// http://localhost:3000/isolated/exercise/07.js

import * as React from "react";
// Whenever an array of React element must be rendered, each one mus have a unique key prop.
// The key prop is used to help React keep track of elements between updates.
const allItems = [
  { id: "apple", value: "🍎 apple" },
  { id: "orange", value: "🍊 orange" },
  { id: "grape", value: "🍇 grape" },
  { id: "pear", value: "🍐 pear" },
];

function App() {
  const [items, setItems] = React.useState(allItems);

  function addItem() {
    const itemIds = items.map((i) => i.id);
    setItems([...items, allItems.find((i) => !itemIds.includes(i.id))]);
  }

  function removeItem(item) {
    setItems(items.filter((i) => i.id !== item.id));
  }

  return (
    <div className="keys">
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <button onClick={() => removeItem(item)}>remove</button>{" "}
            <label htmlFor={`${item.id}-input`}>{item.value}</label>{" "}
            <input id={`${item.id}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
