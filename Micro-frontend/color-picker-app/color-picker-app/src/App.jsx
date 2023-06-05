import React from "react";
import ReactDOM from "react-dom";
import ColorPicker from "colorPicker/ColorPicker";
import "./index.css";

const App = () => (
	<div className="container">
		<ColorPicker />
	</div>
);
ReactDOM.render(<App />, document.getElementById("app"));
