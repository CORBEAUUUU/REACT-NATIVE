import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { colors } from "../../libs/variables";
const InputWithError = ({ holder, valeur, action, errorMessage, type, isPassword }) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const togglePassword = () => setIsPasswordVisible(!isPasswordVisible);
	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					keyboardType={type}
					placeholder={holder}
					onChangeText={action}
					value={valeur}
					secureTextEntry={isPassword && !isPasswordVisible}
				/>
				{isPassword ? (
					<Feather
						onPress={togglePassword}
						name={isPasswordVisible ? "eye" : "eye-off"}
						size={20}
						color="black"
					/>
				) : null}
			</View>
			<Text style={styles.error}>{errorMessage}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	inputContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "white",
		margin: 10,
		padding: 10,
    borderRadius: 5,
    borderBottomColor: colors.primary_4,
    borderBottomWidth: 2
	},
  error:{
    color: 'red',
    margin: 10,
  }
});

export default InputWithError;
