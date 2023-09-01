import { StyleSheet, Text, View } from "react-native";
import Card from "../containers/Card";
import { useState } from "react";
import SignupForm from "../containers/SignupForm";
import LoginForm from "../containers/LoginForm";
import { colors } from "../../libs/variables";

export default function Auth() {
	const [isLogin, setIsLogin] = useState(true);

	const toggleIsLogin = () => setIsLogin(!isLogin);

	return (
		<View style={{ width: "100%" }}>
			<Card title="Bienvenue!" content="Veuillez vous athentifier">
				{isLogin ? <LoginForm /> : <SignupForm />}
				<Text style={styles.link} onPress={toggleIsLogin}>
					{isLogin ? "Pas encore membre? inscrivez-vous" : "Deja membre? Connectez-vous"}
				</Text>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	link: {
		color: colors.primary_2,
		textDecorationLine: "underline",
		textDecorationStyle: "solid",
		textDecorationColor: "#000",
		fontWeight: "bold",
	},
});
