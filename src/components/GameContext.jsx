import React, { createContext, useState } from "react";

export const Context = createContext("");
const GameContext = (props) => {
	const [result, setResult] = useState(null);
	const [userScore, setUserScore] = useState(0);
	const [computerScore, setComputerScore] = useState(0);
	const [randomNumber, setRandomNumber] = useState(0);
	const [userInput, setUserInput] = useState(0);
	const [loginSuccess, setLoginSuccess] = useState();
	const [signupSuccess, setSignupSuccess] = useState();
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const [username, setUsername] = useState("");
	return (
		<Context.Provider
			value={{
				userScore,
				setUserScore,
				computerScore,
				setComputerScore,
				result,
				setResult,
				password,
				setPassword,
				userInput,
				setUserInput,
				randomNumber,
				setRandomNumber,
				loginSuccess,
				setLoginSuccess,
				signupSuccess,
				setSignupSuccess,
				message,
				setMessage,
				username,
				setUsername,
			}}
		>
			{props.children}
		</Context.Provider>
	);
};

export default GameContext;
