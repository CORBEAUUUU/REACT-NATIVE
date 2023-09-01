import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Bouton from "../ui/Bouton";
import { AntDesign } from "@expo/vector-icons";
import InputWithError from "../ui/InputWithError";
import { colors } from "../../libs/variables";
const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const handleEmail = (text) => {
		setEmailError("");
		setEmail(text);
	};
	const handlePassword = (text) => {
		setPasswordError("");
		setPassword(text);
	};

	const submit = () => {
		if (email.includes("@") && password.length >= 6) {
			alert("Connexion");
			return;
		}
		setEmailError(!email.includes("@") ? "Email incorrect" : "");
		setPasswordError(password.length < 6 ? "Mot de passe trop court! (Minimum 6)" : "");
	};
	

	
	return (
		<View style={styles.container}>
			<InputWithError
				holder="Entrez votre email"
				valeur={email}
				action={handleEmail}
				type={"email-address"}
				errorMessage={emailError}
			/>

			<InputWithError
				holder="Entrez votre mot de passe"
				valeur={password}
				action={handlePassword}
				type={"default"}
				errorMessage={passwordError}
        isPassword={true}
			/>

			<Bouton action={submit}>
				<AntDesign name="login" size={20} color={colors.light_4} />
				<Text style={{color: colors.light_4}}>Se connecter</Text>
			</Bouton>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
});

export default LoginForm;
