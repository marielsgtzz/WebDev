import React from "react";
import "./Counter.css";
import { useState } from "react";
import Button from "./Button";
import styled from "@emotion/styled";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const Succes = styled.span`
    color: lime;
  `;

  const Error = styled.span`
    color: tomato;
  `;

  return (
    <div className="Counter-container">
      <h2>
        Counter:{" "}
        {counter < 0 ? <Error>{counter}</Error> : <Succes>{counter}</Succes>}
      </h2>
      <Button onClick={() => setCounter(counter + 1)} text="+1" />
      <Button onClick={() => setCounter(counter - 1)} text="-1" />
    </div>
  );
};

export default Counter;
