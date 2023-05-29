import { Fragment, useState } from "react";
import { handleClick } from "../helpers/handleClick";

//rafc React arrow function component snippet
const Counter = () => {
  const [counter, setCounter] = useState(5);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(handleClick(counter, 1))}>Add</button>
      <button onClick={() => setCounter(handleClick(counter, -1))}>
        Diminish
      </button>
    </>
  ); //<>: Fragment. Evita agregar divs inecesarios al DOM
  //   return <h1>Counter: {counter}</h1>; //JSX = HTML dentro del .jsx
  //Un par de {} para meter variables de JavaScript en JSX
};

export default Counter;
