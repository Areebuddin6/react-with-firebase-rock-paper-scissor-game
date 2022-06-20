import { useContext } from "react";
import { Context } from "./GameContext";

export default function findWinner(userInput, randomNumber) {
	if (userInput == randomNumber) {
		return "draw";
	} else if (userInput == 0 && randomNumber == 1) {
		return "win";
	} else if (userInput == 0 && randomNumber == 2) {
		return "lose";
	} else if (userInput == 1 && randomNumber == 0) {
		return "lose";
	} else if (userInput == 1 && randomNumber == 2) {
		return "win";
	} else if (userInput == 2 && randomNumber == 1) {
		return "lose";
	} else if (userInput == 2 && randomNumber == 0) {
		return "win";
	}
}

export const generateRandomNumber = () => {
	const random = Math.floor(Math.random() * 3);
	console.log("From function", random);
	return random;
};

export const displayMessage = (result) =>
	result === "draw" ? "Draw" : `You ${result}`;

export const useResult = () => {
	const { result } = useContext(Context);
	return result;
};

export const useScore = () => {
	const { score } = useContext(Context);
	return score;
};

export const useRandomNumber = () => {
	const { randomNumber } = useContext(Context);
	return randomNumber;
};

export const useUserInputNumber = () => {
	const { userInputNumber } = useContext(Context);
	return userInputNumber;
};
