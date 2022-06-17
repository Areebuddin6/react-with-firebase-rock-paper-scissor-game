import React, { useContext, useState } from "react";
import { Context } from "../GameContext";
import { Snackbar, Alert } from "@mui/material";
import { signUp } from "./firebaseAuth";
import SignInWithOtherOptions from "./SignInWithOtherOptions";
import Password from "./Password";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
	const {
		signupSuccess,
		setSignupSuccess,
		username,
		setUsername,
		email,
		setEmail,
		password,
	} = useContext(Context);
	const [submit, setSubmit] = useState(false);
	const navigate = useNavigate();

	function changeValue(func, e) {
		func(e.target.value);
	}

	function handleClose(event, reason) {
		setSubmit(false);
	}

	function handleSignUp(e) {
		e.preventDefault();
		signUp(email, password, setSignupSuccess, username)
			.then(() => setSubmit(true))
			.then(() => navigate("/"));
	}
	return (
		<div style={{ display: "grid", placeItems: "center" }} className="m-4">
			<form
				onSubmit={handleSignUp}
				className="col-xs-12 col-xl-4 col-md-6 col-sm-7 mt-5 border border-dark p-4"
			>
				<h3 className="mb-2">Signup</h3>
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						placeholder="Username"
						className="form-control"
						onChange={(e) => changeValue(setUsername, e)}
					/>
				</div>
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
					Sign Up
				</button>
				<SignInWithOtherOptions />
				<div
					className="row justify-content-center mt-3"
					style={{ gap: "0.5rem" }}
				>
					Already have an account?{" "}
					<Link to="/" style={{ textDecoration: "none" }}>
						LOGIN
					</Link>
				</div>
			</form>
			{submit && (
				<div style={{ position: "absolute", top: "5rem" }}>
					<Snackbar
						open={signupSuccess}
						autoHideDuration={3000}
						onClose={handleClose}
					>
						<Alert onClose={handleClose} severity="success">
							Signup Success! Account created
						</Alert>
					</Snackbar>
					<Snackbar
						open={signupSuccess === false ? true : false}
						autoHideDuration={3000}
						onClose={handleClose}
					>
						<Alert onClose={handleClose} severity="error">
							There was an error in signing up
						</Alert>
					</Snackbar>
				</div>
			)}
		</div>
	);
};

export default SignUp;
