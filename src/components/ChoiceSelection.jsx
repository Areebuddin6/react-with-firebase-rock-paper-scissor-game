import React, { useContext } from "react";
import {
	FaRegHandPaper,
	FaRegHandRock,
	FaRegHandScissors,
} from "react-icons/fa";
import findWinner, { generateRandomNumber } from "./functions";
import { Context } from "./GameContext";
import "./choiceSelection.css";

export const icons = [
	<FaRegHandPaper />,
	<FaRegHandRock />,
	<FaRegHandScissors />,
];

const ChoiceSelection = () => {
	const {
		result,
		setResult,
		setUserScore,
		setComputerScore,
		randomNumber,
		setRandomNumber,
		setUserInputNumber,
	} = useContext(Context);

	function handleClick(userInput) {
		const computerChoice = generateRandomNumber();
		setRandomNumber(computerChoice);
		setUserInputNumber(userInput);
		console.log("computer choice", computerChoice);
		setResult(findWinner(userInput, computerChoice));
		if (result === "win") setUserScore((prevScore) => prevScore + 1);
		if (result === "lose") setComputerScore((prevScore) => prevScore + 1);
	}
	return (
		<div className="d-flex flex-row justify-content-center mt-3">
			{Array(3)
				.fill(0)
				.map((_value, index) => {
					return (
						<div className="m-2" key={index}>
							<button
								type="button"
								className="choice__selection__btn bg-dark btn-light display-4 bg border-none rounded-circle p-3 d-flex align-items-center text-primary border border-dark"
								value={index}
								onClick={() => handleClick(index)}
							>
								{icons[index]}
							</button>
						</div>
					);
				})}
		</div>
	);
};

export default ChoiceSelection;
