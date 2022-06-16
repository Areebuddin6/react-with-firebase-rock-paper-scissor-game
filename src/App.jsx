import React from "react";
import Header from "./components/Header";
import Choice from "./components/Choice";
import Score from "./components/Score";
import ChoiceSelection from "./components/ChoiceSelection";

function App() {
	return (
		<div className="bg-light" style={{ height: "100vh" }}>
			<Header />
			<Choice />
			<Score />
			<ChoiceSelection />
		</div>
	);
}

export default App;
