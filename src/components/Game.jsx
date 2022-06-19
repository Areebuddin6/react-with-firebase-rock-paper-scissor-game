import React from "react";
import Header from "./Header";
import Choice from "./Choice";
import Score from "./Score";
import ChoiceSelection from "./ChoiceSelection";

const Game = () => {
	return (
		<div className="bg-light" style={{ height: "100vh" }}>
			<Header />
			<Choice />
			<Score />
			<ChoiceSelection />
		</div>
	);
};

export default Game;
