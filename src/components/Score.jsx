import React, { useContext } from "react";
import { Context } from "./GameContext";
import { displayMessage } from "./functions";

const Score = () => {
	const { result, computerScore, userScore } = useContext(Context);
	return (
		<div>
			<div className="d-flex flex-row justify-content-center">
				{Array(2)
					.fill(1)
					.map((value, index) => {
						return (
							<div
								style={{
									margin: "0 1rem",
									display: "grid",
									placeItems: "center",
								}}
								key={index}
							>
								<div>{index === 0 ? "Computer" : "User"}</div>

								<div>{index === 0 ? computerScore : userScore}</div>
							</div>
						);
					})}
			</div>
			<div className="text-center" style={{ userSelect: "none" }}>
				{result && displayMessage(result)}
			</div>
		</div>
	);
};

export default Score;
