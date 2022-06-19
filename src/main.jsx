import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";
import GameContext from "./components/GameContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GameContext>
			<App />
		</GameContext>
	</React.StrictMode>
);
