import React, { useState } from "react";
import { resetPassword } from "./firebaseAuth";
import { useNavigate, Link } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	const [resetSuccess, setResetSuccess] = useState(false);
	const navigate = useNavigate();

	function changeValue(func, e) {
		func(e.target.value);
	}

	function handleClose() {
		setResetSuccess(false);
	}

	function delay() {
		return new Promise((resolve, reject) => {
			setTimeout(resolve, 5000);
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		resetPassword(email)
			.then(() => setResetSuccess(true))
			.then(() => delay().then(() => navigate("/")));
	}
	return (
		<div style={{ display: "grid", placeItems: "center" }} className="m-4">
			<form
				onSubmit={handleSubmit}
				className="col-xs-12 col-xl-4 col-md-6 col-sm-7 mt-5 border border-dark p-4"
			>
				<h3 className="mb-2 text-center">Forgot Password</h3>
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
				<button className="btn btn-primary col-12" type="submit">
					Update
				</button>
				<Link
					to="/"
					className="text-decoration-none row justify-content-center mt-3"
				>
					Back to LogIn
				</Link>
			</form>
			{resetSuccess && (
				<div style={{ position: "absolute", top: "5rem" }}>
					<Snackbar
						open={resetSuccess}
						autoHideDuration={3000}
						onClose={handleClose}
					>
						<Alert onClose={handleClose} severity="success">
							A password rest link has been to your email
							<div>
								<strong>Don't refresh it will automatically redirect</strong>
							</div>
						</Alert>
					</Snackbar>
					{console.log("It's running")}
					<Snackbar
						open={resetSuccess === false ? true : false}
						autoHideDuration={3000}
						onClose={handleClose}
					>
						<Alert onClose={handleClose} severity="error">
							There was an error in resetting your email
						</Alert>
					</Snackbar>
				</div>
			)}
		</div>
	);
};

export default ForgotPassword;
