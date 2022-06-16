import React, { useContext, useState } from "react";
import { Context } from "../GameContext";
import { Snackbar, Alert } from "@mui/material";
import { signUp } from "./firebaseAuth";

const SignUp = () => {
	const { signupSuccess, setSignupSuccess } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [submit, setSubmit] = useState(false);

	function changeValue(func, e) {
		func(e.target.value);
	}

	function handleClose(event, reason) {
		setSubmit(false);
	}
	return (
		<div style={{ display: "grid", placeItems: "center" }} className="m-4">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setSubmit(true);
					signUp(email, password, setSignupSuccess);
				}}
				className="col-sm-6 col-lg-6 mt-5 border border-dark p-4"
			>
				<h3 className="mb-2">Signup</h3>
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
