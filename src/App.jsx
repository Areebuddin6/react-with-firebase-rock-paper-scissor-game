import React from "react";
import Login from "./components/authentication/Login";
import SignUp from "./components/authentication/SignUp";
import ForgotPassword from "./components/authentication/ForgotPassword";
import PrivateRoute from "./components/authentication/PrivateRoute";
import Game from "./components/Game";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useGameContext from "./components/hooks/useGameContext";

function App() {
	const { loginSuccess } = useGameContext();
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route exact path="/" element={<Login />} />
					<Route
						exact
						path="/game"
						element={
							<PrivateRoute user={loginSuccess}>
								<Game />
							</PrivateRoute>
						}
					/>
					<Route exact path="/signup" element={<SignUp />} />
					<Route exact path="/forgot-password" element={<ForgotPassword />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
