// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	FacebookAuthProvider,
	updateProfile,
	sendPasswordResetEmail,
} from "firebase/auth";
import { toUnitless } from "@mui/material/styles/cssUtils";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBn7QpG5RiyYlpWjBlUC-q3jKEBdxwo9cQ",
	authDomain: "rock-paper-scissor-areebuddin.firebaseapp.com",
	projectId: "rock-paper-scissor-areebuddin",
	storageBucket: "rock-paper-scissor-areebuddin.appspot.com",
	messagingSenderId: "301314459452",
	appId: "1:301314459452:web:81bed7637d51f7eeaf8039",
	measurementId: "G-1QW6ZLHNTQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Function to invoke when user sign up with email and password
export const signUp = (email, password, setSignupSuccess, username) => {
	// createUserWithEmailAndPassword()
	return new Promise((resolve, reject) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredentials) => {
				console.log("Successfully created a new account", userCredentials);
				setSignupSuccess(true);
				updateProfile(auth.currentUser, { displayName: username });
				console.log(userCredentials.user.displayName);
				resolve();
			})
			.catch((error) => {
				console.log("Error in creating a new user", error);
				setSignupSuccess(false);
				reject();
			});
	});
};

// Function to invoke when user sign in with email and password
export const signIn = (email, password, setLoginSuccess) => {
	return new Promise((resolve, reject) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredentials) => {
				console.log("User signed in successfully", userCredentials);
				setLoginSuccess(true);
				console.log(userCredentials.user.displayName);
				resolve(true);
			})
			.catch((error) => {
				console.log("There was an error in siging in \n", error);
				setLoginSuccess(false);
				reject(error);
			});
	});
};

// Setup to login using third party apps
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Function to invoke when user sign in with other sign in options
export const signInWithOtherOptions = (type, setLoginSuccess) => {
	const auth = getAuth();
	switch (type) {
		case "google":
			return new Promise((resolve, reject) => {
				signInWithPopup(auth, googleProvider)
					.then((result) => {
						const credentials = GoogleAuthProvider.credentialFromResult(result);
						// console.log(result.message, credentials);
						console.log("Successfully login");
						setLoginSuccess(true);
						resolve();
					})
					.catch((error) => {
						const credentials = GoogleAuthProvider.credentialFromError(error);
						// console.log(error.message, credentials);
						console.log("There was an error");
						setLoginSuccess(false);
						reject();
					});
			});
		case "facebook":
			return new Promise((resolve, reject) => {
				signInWithPopup(auth, facebookProvider)
					.then((result) => {
						const credentials =
							FacebookAuthProvider.credentialFromResult(result);
						console.log(result.message, credentials);
						setLoginSuccess(true);
						resolve();
					})
					.catch((error) => {
						const credentials = FacebookAuthProvider.credentialFromError(error);
						console.log(error.message, credentials);
						setLoginSuccess(false);
						reject();
					});
			});
		default:
			console.log("This is developed by Areebuddin");
	}
};

export const resetPassword = (email) => {
	return new Promise((resolve, reject) => {
		sendPasswordResetEmail(auth, email)
			.then(() => {
				console.log("Password reset complete");
				resolve();
			})
			.catch(() => {
				console.log("There was an error in resetting the password");
				reject();
			});
	});
};