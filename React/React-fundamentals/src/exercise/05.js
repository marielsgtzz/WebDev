// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from "react";
import "../box-styles.css";

//className = "" establishes a default value for the className if one is not given
function Box({ size, className = "", style, ...otherProps }) {
  const sizeClassName = size ? `box--${size}` : ""; // size ? means, what to do if size IS specified. : -> otherwise what to do
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{
        fontStyle: "italic",
        ...style,
      }}
      {...otherProps}
    />
  );
}

//Inline style, object style
const smallBox = (
  <Box size="small" style={{ backgroundColor: "lightblue" }}>
    small lightblue box
  </Box>
);

const mediumBox = (
  <Box size="medium" style={{ backgroundColor: "pink" }}>
    medium pink box
  </Box>
);

const largeBox = (
  <Box className="box box--large" style={{ backgroundColor: "orange" }}>
    large orange box
  </Box>
);

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  );
}

export default App;
