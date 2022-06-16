import React, { useContext, useEffect, useState } from "react";
import { Context } from "../GameContext";
import { signIn, signInWithOtherOptions } from "./firebaseAuth";
import { Snackbar, Alert } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

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
				<div className="form-group row justify-content-center pt-2">OR</div>
				<div className="form-group row justify-content-center p-0 m-0">
					<button
						className="btn rounded-circle border border-primary"
						style={{
							fontSize: "2rem",
							width: "3rem",
							height: "3rem",
							display: "grid",
							placeItems: "center",
							padding: "0",
							// paddingRight: "2.3rem",
							// paddingBottom: "0.3rem",
						}}
						onClick={() => signInWithOtherOptions("google")}
					>
						<FcGoogle />
					</button>
				</div>
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
