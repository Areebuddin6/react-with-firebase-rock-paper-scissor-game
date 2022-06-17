import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { signInWithOtherOptions } from "./firebaseAuth";
import { Avatar, Button } from "@mui/material";
import { Context } from "../GameContext";
import { useNavigate } from "react-router-dom";

const SignInWithOtherOptions = () => {
	const navigate = useNavigate();
	const icons = [<FcGoogle />, <BsFacebook />];
	const { loginSuccess, setLoginSuccess } = useContext(Context);

	function handleSignIn(e, provider) {
		e.preventDefault();
		signInWithOtherOptions(provider, setLoginSuccess).then(() =>
			navigate("/game")
		);
	}
	return (
		<>
			<div className="form-group row justify-content-center mt-3">OR</div>
			<div
				className="form-group row justify-content-center p-0 mb-0"
				style={{ gap: "1rem" }}
			>
				{icons.map((icon, index) => {
					const provider = index ? "facebook" : "google";
					return (
						<Avatar
							key={index}
							className="btn"
							sx={{ width: 30, height: 30 }}
							style={{ background: "transparent" }}
							onClick={(e) => handleSignIn(e, provider)}
						>
							<Button style={{ fontSize: "2rem" }}>{icon}</Button>
						</Avatar>
					);
				})}
			</div>
		</>
	);
};

export default SignInWithOtherOptions;
