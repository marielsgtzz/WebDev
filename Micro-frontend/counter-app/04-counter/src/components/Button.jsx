import React from "react";
import styled from "@emotion/styled";

const ButtonStyle = styled.button`
  font-family: "Oswald", sans-serif;
  font-size: 1rem;
  margin: 0 0.5rem;
`;

const Button = ({ text, onClick }) => {
  return <ButtonStyle onClick={onClick}>{text}</ButtonStyle>;
};

export default Button;
