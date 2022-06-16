import React, { useContext, useEffect, useState } from "react";
import { Context } from "../GameContext";
import { signIn } from "./firebaseAuth";
import { Snackbar, Alert } from "@mui/material";

const Login = () => {
	const { loginSuccess, setLoginSuccess } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [submit, setSubmit] = useState(false);

	function changeValue(func, e) {
		func(e.target.value);
	}

	function handleClose() {
		setSubmit(false);
	}

	// useEffect(() =>{
	// 	console.log(submit)
	// }, submit)
	return (
		<div style={{ display: "grid", placeItems: "center" }} className="m-4">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setSubmit(true);
					signIn(email, password, setLoginSuccess);
				}}
				className="col-sm-6 col-lg-6 mt-5 border border-dark p-4"
			>
				<h3 className="mb-2">Login</h3>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						placeholder="Your email address here"
						className="form-control"
						required
						onChange={(e) => changeValue(setEmail, e)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						className="form-control"
						placeholder="Enter your secret password"
						required
						onChange={(e) => changeValue(setPassword, e)}
					/>
				</div>
				<button className="btn btn-primary col-12" type="submit">
					Login
				</button>
			</form>
			{submit && (
				<div style={{ position: "absolute", top: "5rem" }}>
					<Snackbar
						open={loginSuccess}
						autoHideDuration={3000}
						onClose={handleClose}
					>
						<Alert onClose={handleClose} severity="success">
							Login Success
						</Alert>
					</Snackbar>
					<Snackbar
						open={loginSuccess === false ? true : false}
						autoHideDuration={3000}
						onClose={handleClose}
					>
						<Alert onClose={handleClose} severity="error">
							There was an error in signing in
						</Alert>
					</Snackbar>
				</div>
			)}
		</div>
	);
};

export default Login;
