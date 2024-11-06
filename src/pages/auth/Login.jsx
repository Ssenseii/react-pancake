import React from "react";
import { useState } from "react";

import illustration from "../../assets/images/auth/illustration.png";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("* This is an error message *");

	const handleLogin = (e) => {
		e.preventDefault();
		// Mock validation
		if (email === "" || password === "") {
			setErrorMessage("* Email and Password are required *");
		} else if (email !== "johndoe@artus.com" || password !== "password123") {
			setErrorMessage("* Password and Username Do Not Match *");
		} else {
			setErrorMessage("");
			// Handle successful login here
		}
	};

	return (
		<div className="login">
			<div className="login__text">
				<h1>
					PROJECT <span>EVA</span>
				</h1>

				<h3>Bienvenue dans le système EVA de test de conformité.</h3>

				<p>
					Veuillez entrer votre <span>Email</span> et <span>Mot de Passe</span> pour
					accéder à votre espace de EVA.
				</p>

				<form action="">
					<p className="error_message">{errorMessage}</p>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="johndoe@artus.com"
						// className={`text_input ${errorMessage ? "input_error" : ""}`}
						className={`text_input input_error`}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Mot de passe"
						className={`text_input input_valid`}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<input type="submit" value={"Se Connecter"} className="primary_button" />
				</form>

				<a className="forgot_password" href="/forgot_password">
					Mot de Passe Oublié?
				</a>
			</div>

			<div className="login__illustration">
				<img src={illustration} alt="login Illustration" />
			</div>
		</div>
	);
};

export default Login;
