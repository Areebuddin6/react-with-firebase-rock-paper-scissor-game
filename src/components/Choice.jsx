import React, { useContext } from "react";
import { icons } from "./ChoiceSelection";
import { Context } from "./GameContext";
import { Paper } from "@mui/material";
import "./choice.css";

const Choice = () => {
	const { randomNumber, userInputNumber } = useContext(Context);
	const style = {
		fontSize: "4rem",
		padding: "0rem 1.2rem",
		paddingBottom: "0.5rem",
		display: "inline",
		borderRadius: "50%",
	};
	const bootstrapStyle = "border border-primary";
	return (
		<div
			className="container"
			style={{ display: "grid", placeItems: "center" }}
		>
			{Array(2)
				.fill(2)
				.map((_icon, index) => {
					return (
						<Paper
							key={index}
							className="choice__paper col col-md-6 col-lg-4 mb-3 py-2 justify-content-center"
						>
							<div
								className="choice__title row justify-content-center"
								style={{ fontSize: "2rem" }}
							>
								{index === 0 ? "Computer" : "User"} Choice
							</div>
							<div style={{ display: "grid", placeItems: "center" }}>
								<div style={style} className={bootstrapStyle}>
									{index === 0 ? icons[randomNumber] : icons[userInputNumber]}
								</div>
							</div>
						</Paper>
					);
				})}
		</div>
	);
};

export default Choice;
