// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from "react";
import "../box-styles.css";

//className = "" establishes a default value for the className if one is not given
function Box({ className = "", style, ...otherProps }) {
  return (
    <div
      className={`box ${className}`}
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
  <Box className="box--small" style={{ backgroundColor: "lightblue" }}>
    small lightblue box
  </Box>
);

const mediumBox = (
  <Box className="box box--medium" style={{ backgroundColor: "pink" }}>
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
