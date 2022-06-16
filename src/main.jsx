import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";
import GameContext from "./components/GameContext";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GameContext>
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/game" element={<App />} />
				</Routes>
			</Router>
		</GameContext>
	</React.StrictMode>
);