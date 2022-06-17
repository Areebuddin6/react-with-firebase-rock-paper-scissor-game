import React, { useContext, useState } from "react";
import { Context } from "../GameContext";
import { signIn } from "./firebaseAuth";
import { Snackbar, Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SignInWithOtherOptions from "./SignInWithOtherOptions";
import Password from "./Password";

const Login = () => {
	const {
		loginSuccess,
		setLoginSuccess,
		email,
		setEmail,
		password,
		setPassword,
	} = useContext(Context);
	const [submit, setSubmit] = useState(false);
	const navigate = useNavigate();

	function changeValue(func, e) {
		func(e.target.value);
	}

	function handleClose() {
		setSubmit(false);
	}

	function handleSignIn(e) {
		e.preventDefault();
		signIn(email, password, setLoginSuccess)
			.then(() => setSubmit(true))
			.then(() => navigate("/game"))
			.catch((error) => console.log("There was an error\n", error));
	}
	return (
		<div style={{ display: "grid", placeItems: "center" }} className="m-4">
			<form
				onSubmit={handleSignIn}
				className="col-xs-12 col-xl-4 col-md-6 col-sm-7 mt-5 border border-dark p-4"
			>
				<h3 className="mb-2 text-center m-2">LOGIN</h3>
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
				<Password />
				<button className="btn btn-primary col-12" type="submit">
					Login
				</button>
				<div className="row justify-content-end mr-1 text-muted">
					<Link to="/forgot-password" className="text-decoration-none">
						Forgot Password?
					</Link>
				</div>
				<SignInWithOtherOptions />
				<div
					className="row justify-content-center mt-3"
					style={{ gap: "0.5rem" }}
				>
					Need an account?{" "}
					<Link to="/signup" style={{ textDecoration: "none" }}>
						SIGN UP
					</Link>
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
