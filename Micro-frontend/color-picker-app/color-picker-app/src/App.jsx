import React from "react";
import ReactDOM from "react-dom";
import ColorPicker from "colorPicker/ColorPicker";
import "./index.css";

const App = () => (
	<>
		<h1 className="text-center bg-dark text-white p-2">Color Picker</h1>
		<div className="container mt-4">
			<div className="row">
				<div className="col-12 col-md-6">Lista de colores</div>
				<div className="col-12 col-md-6">
					<ColorPicker />
				</div>
			</div>
		</div>
		{/* <ColorPicker /> */}
	</>
);
ReactDOM.render(<App />, document.getElementById("app"));
