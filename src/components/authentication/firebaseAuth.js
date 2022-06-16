// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { useContext } from "react";
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

// Function to invoke when user sign up
export const signUp = (email, password, setSignupSuccess) => {
	// createUserWithEmailAndPassword()
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredentials) => {
			console.log("Successfully created a new account", userCredentials);
			setSignupSuccess(true);
		})
		.catch((error) => {
			console.log("Error in creating a new user", error);
			setSignupSuccess(false);
		});
};

// Function to invoke when user sign in
export const signIn = (email, password, setLoginSuccess) => {
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredentials) => {
			console.log("User signed in successfully");
			setLoginSuccess((prev) => (prev = true));
		})
		.catch((error) => {
			console.log("There was an error in siging in \n", error);
			setLoginSuccess((prev) => (prev = false));
		});
};
