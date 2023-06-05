import React, { useState } from "react";

const ColorPicker = () => {
	const [color, setColor] = useState("#000000");
	const handleChangeColor = (e) => {
		setColor(e.target.value);
	};
	return (
		<form>
			<input
				type="color"
				className="form-control"
				style={{ width: "100%", height: "200px" }}
				value={color}
				onChange={handleChangeColor}
			/>
			<div className="text-center">
				<h2 className="mt-3 fw-bolder">
					<div
						style={{
							width: "20px",
							height: "20px",
							background: color,
							display: "inline-block",
							margin: "0 1rem",
							borderRadius: "100%",
						}}
					></div>
					{color}
				</h2>
			</div>
		</form>
	);
};

export default ColorPicker;
