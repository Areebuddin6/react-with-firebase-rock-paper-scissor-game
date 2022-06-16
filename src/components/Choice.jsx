import React, { useContext } from "react";
import { icons } from "./ChoiceSelection";
import { Context } from "./GameContext";

const Choice = () => {
	// const [result, setResult] = useResult();
	// const [score, setScore] = useScore();
	const { randomNumber, userInputNumber } = useContext(Context);
	const style = {
		fontSize: "4rem",
		padding: "0rem 1.2rem",
		// paddingRight: "1.2rem",
		paddingBottom: "0.5rem",
		display: "inline",
		borderRadius: "50%",
	};
	const bootstrapStyle = "border border-primary";
	// const icons = [icons[randomNumber], icons[userInputNumber]];
	return (
		<div className="row justify-content-center w-100">
			{Array(2)
				.fill(2)
				.map((icon, index) => {
					return (
						<div key={index} className="col justify-content-center">
							<div className="row justify-content-center">
								{index === 0 ? "Computer" : "User"} Choice{" "}
							</div>
							<div style={{ display: "grid", placeItems: "center" }}>
								<div style={style} className={bootstrapStyle}>
									{index === 0 ? icons[randomNumber] : icons[userInputNumber]}
								</div>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default Choice;
