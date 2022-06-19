import React, { useState } from "react";
import { checkIsLoggedIn } from "./firebaseAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ user, children }) => {
	return user ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
