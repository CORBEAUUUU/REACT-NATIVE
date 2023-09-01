import { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Bouton from "../ui/Bouton";
import { AntDesign } from "@expo/vector-icons";
import InputWithError from "../ui/InputWithError";
import { colors } from "../../libs/variables";
import { UtilisateurContext } from "../../App";

export default function SignupForm() {
	// Créer les variables
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [usernameError, setUsernameError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const objet = useContext(UtilisateurContext);


	// Créer les fonction qui s'executent quand l'utilisateur tape dans les champs
	const handleEmail = (text) => {
		setEmailError("");
		setEmail(text);
	};
	const handleUsername = (text) => {
		setUsernameError("");
		setUsername(text);
	};
	const handlePassword = (text) => {
		setPasswordError("");
		setPassword(text);
	};
	const handleConfirmPassword = (text) => {
		setConfirmPasswordError("");
		setConfirmPassword(text);
	};

	// Fonction qui s'execute quand l'utilisateur submit
	const submit = () => {
		if (
			email.includes("@") &&
			username.length >= 3 &&
			username.length < 12 &&
			password.length >= 6 &&
			password === confirmPassword
		) {
			// Envoyer une requete vers la backend
			objet.setUtilisateur({email: email, username: username})
			return;
		}
		setEmailError(!email.includes("@") ? "Email incorrect" : "");
		setUsernameError(
			username.length < 3 || username.length > 12
				? "username incorrect (Max. 12, min. 3)"
				: ""
		);
		setPasswordError(password.length < 6 ? "Mot de passe trop court" : "");

		setConfirmPasswordError(
			password !== confirmPassword ? "Les mots ne sont pas identiques" : ""
		);
	};

	return (
		<View style={styles.container}>
			<InputWithError
				valeur={email}
				action={handleEmail}
				type={"email-address"}
				holder={"Entrez un email"}
				errorMessage={emailError}
			/>
			<InputWithError
				valeur={username}
				action={handleUsername}
				type={"email-address"}
				holder={"Entrez un pseudo"}
				errorMessage={usernameError}
			/>
			<InputWithError
				valeur={password}
				action={handlePassword}
				type={"default"}
				holder={"Entrez un mot de passe"}
				errorMessage={passwordError}
				isPassword
			/>
			<InputWithError
				valeur={confirmPassword}
				action={handleConfirmPassword}
				type={"default"}
				holder={"Confirmez mot de passe"}
				errorMessage={confirmPasswordError}
				isPassword
			/>
			<Bouton action={submit}>
				<AntDesign name="login" size={24} color={colors.light_4} />
				<Text style={{color: colors.light_4}} >S'inscrire</Text>
			</Bouton>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
});
