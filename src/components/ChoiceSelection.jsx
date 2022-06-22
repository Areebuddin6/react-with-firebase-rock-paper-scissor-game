import React, { useContext, useRef, useState } from "react";
import {
	FaRegHandPaper,
	FaRegHandRock,
	FaRegHandScissors,
} from "react-icons/fa";
import findWinner, { generateRandomNumber } from "./functions";
import { Context } from "./GameContext";
import "./choiceSelection.css";
import { useEffect } from "react";
import usePrevious from "./hooks/usePrevious";

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
		userInput,
		setUserInput,
		setMessage,
	} = useContext(Context);
	const [matchesPlayed, setMatchesPlayed] = useState(0);

	// Previous value of mathesPlayed i.e. before updating it
	const previousValue = usePrevious(matchesPlayed);

	// Number of times of rendering the component
	// const render = useRender();
	// console.log("Number of times of rendering", render);

	function handleClick(userInput) {
		setMatchesPlayed(matchesPlayed + 1);
		setUserInput(userInput);
		setRandomNumber(generateRandomNumber());
	}

	useEffect(() => {
		setResult(findWinner(userInput, randomNumber));
	}, [matchesPlayed]);

	useEffect(() => {
		if (matchesPlayed != previousValue - 1) {
			if (result === "win") {
				setUserScore((prevScore) => prevScore + 1);
				setMessage("win");
			}
			if (result === "lose") {
				setComputerScore((prevScore) => prevScore + 1);
				setMessage("lose");
			}
			if (result === "draw") {
				setMessage("draw");
			}
			if (result !== "") setResult("");
		}
	}, [result]);

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
