import { StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../libs/variables";
export default function Bouton({ action, children }) {
	return (
		<TouchableOpacity style={styles.button} onPress={action}>
			{children}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary_2,
    padding: 10,
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginHorizontal:"auto",
    marginVertical:15,
    gap:10,
    borderRadius:5,
  },

});
