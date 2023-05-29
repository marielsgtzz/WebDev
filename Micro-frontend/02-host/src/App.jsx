import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "navbar/Navbar";
import Counter from "counter/CounterReact";

import "./index.css";

const App = () => (
  <>
    <Navbar />
    <div className="Host-container">
      <Counter />
    </div>
  </>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
