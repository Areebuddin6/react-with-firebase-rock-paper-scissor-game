import React, { createContext, useState } from "react";

export const Context = createContext("");
const GameContext = (props) => {
	const [result, setResult] = useState(null);
	const [userScore, setUserScore] = useState(0);
	const [computerScore, setComputerScore] = useState(0);
	const [randomNumber, setRandomNumber] = useState(0);
	const [userInputNumber, setUserInputNumber] = useState(0);
	const [loginSuccess, setLoginSuccess] = useState();
	const [signupSuccess, setSignupSuccess] = useState();
	return (
		<Context.Provider
			value={{
				userScore,
				setUserScore,
				computerScore,
				setComputerScore,
				result,
				setResult,
				randomNumber,
				setRandomNumber,
				userInputNumber,
				setUserInputNumber,
				loginSuccess,
				setLoginSuccess,
				signupSuccess,
				setSignupSuccess,
			}}
		>
			{props.children}
		</Context.Provider>
	);
};

export default GameContext;
