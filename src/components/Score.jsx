import React, { useContext } from "react";
import { Context } from "./GameContext";
import { displayMessage } from "./functions";
import "./score.css";

const Score = () => {
	const { username, computerScore, userScore, message } = useContext(Context);
	return (
		<div className="score">
			<div className="d-flex flex-row justify-content-center">
				{Array(2)
					.fill(1)
					.map((_value, index) => {
						return (
							<div
								style={{
									margin: "0 1rem",
									display: "grid",
									placeItems: "center",
									fontSize: "2rem",
								}}
								className="score__container"
								key={index}
							>
								<div className="score__title">
									{index === 0 ? "Computer" : username ? username : "User"}{" "}
									Score
								</div>

								<div>{index === 0 ? computerScore : userScore}</div>
							</div>
						);
					})}
			</div>
			<div
				elevation={10}
				className="score__message text-center display-4"
				style={{ userSelect: "none" }}
			>
				{message && displayMessage(message)}
			</div>
		</div>
	);
};

export default Score;
