import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../libs/variables";

// create a component
const Card = ({ title, content, children }) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.content}>{content}</Text>
			</View>
			<View style={styles.children}>{children}</View>
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		width: "100%",
    maxWidth:'400px',
    margin:"auto"
  },
	header: {
		backgroundColor: colors.primary_2,
		width: "100%",
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
	},
  title:{
    color: colors.light_4,
    fontSize: 30,
     textAlign:'center'
    },
    content:{
      color: colors.light_4,
      textAlign:'center'
  },
  children:{
    backgroundColor: colors.light_4,
    padding: 10,
  }
});

//make this component available to the app
export default Card;
