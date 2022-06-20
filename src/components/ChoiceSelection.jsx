import React, { useContext, useState } from "react";
import {
	FaRegHandPaper,
	FaRegHandRock,
	FaRegHandScissors,
} from "react-icons/fa";
import findWinner, { generateRandomNumber } from "./functions";
import { Context } from "./GameContext";
import "./choiceSelection.css";
import { useEffect } from "react";
import { prodErrorMap } from "firebase/auth";

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
		userInputNumber,
		setUserInputNumber,
		setMessage,
	} = useContext(Context);
	const [matchesPlayed, setMatchesPlayed] = useState(0);

	function updateStateSync(setFunc, value = 1, replace = false) {
		return new Promise((resolve, reject) => {
			setFunc((prev) => {
				if (replace) prev = value;
				else prev += value;
				console.log(prev);
				resolve(prev);
				return prev;
			});
		});
	}
	function handleClick(userInput) {
		setMatchesPlayed(matchesPlayed + 1);
		// console.log("matches played before updating: ", matchesPlayed);
		// updateStateSync(setMatchesPlayed)
		// 	.then((prev) => console.log("matches played returned : ", prev))
		// 	.then(() => console.log("mathces played: ", matchesPlayed));
		setUserInputNumber(userInput);
		setRandomNumber(generateRandomNumber());
	}

	useEffect(() => {
		console.log("computer choice", randomNumber);
		console.log("matchesPlayed", matchesPlayed);
		setResult(findWinner(userInputNumber, randomNumber));
	}, [matchesPlayed]);

	useEffect(() => {
		console.log(result);
		if (result === "win") {
			setUserScore((prevScore) => prevScore + 1);
			setMessage("win");
		}
		if (result === "lose") {
			setComputerScore((prevScore) => prevScore + 1);
			setMessage("lose");
		}
		if (result === "draw") setMessage("draw");
		if (result !== "") setResult("");
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
