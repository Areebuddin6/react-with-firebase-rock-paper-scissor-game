import React, { useContext, useState, useRef } from "react";
import {
	FaRegHandPaper,
	FaRegHandRock,
	FaRegHandScissors,
} from "react-icons/fa";
import findWinner, { generateRandomNumber } from "./functions";
import { Context } from "./GameContext";

export const icons = [
	<FaRegHandPaper />,
	<FaRegHandRock />,
	<FaRegHandScissors />,
];

const ChoiceSelection = () => {
	const {
		result,
		setResult,
		userScore,
		setUserScore,
		computerScore,
		setComputerScore,
		randomNumber,
		setRandomNumber,
		userInputNumber,
		setUserInputNumber,
	} = useContext(Context);
	const paperRef = useRef();
	const stoneRef = useRef();
	const scissorRef = useRef();
	const refs = [paperRef, stoneRef, scissorRef];

	function handleClick(userInput) {
		setRandomNumber(generateRandomNumber());
		setUserInputNumber(userInput);
		setResult(findWinner(userInput, randomNumber));

		if (result === "win") setUserScore((prevScore) => prevScore + 1);
		if (result === "lose") setComputerScore((prevScore) => prevScore + 1);
	}
	return (
		<div className="d-flex flex-row justify-content-center mt-5">
			{refs.map((ref, index) => {
				return (
					<div className="m-2" key={index}>
						<button
							type="button"
							className="bg-dark btn-light display-4 bg border-none rounded-circle p-3 d-flex align-items-center text-primary border border-dark"
							ref={ref}
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
