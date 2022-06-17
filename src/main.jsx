import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";
import GameContext from "./components/GameContext";
import Login from "./components/authentication/Login";
import SignUp from "./components/authentication/SignUp";
import ForgotPassword from "./components/authentication/ForgotPassword";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GameContext>
			<Router>
				<Routes>
					<Route exact path="/" element={<Login />} />
					<Route exact path="/game" element={<App />} />
					<Route exact path="/signup" element={<SignUp />} />
					<Route exact path="/forgot-password" element={<ForgotPassword />} />
				</Routes>
			</Router>
		</GameContext>
	</React.StrictMode>
);
