import React from "react";
import { View, Text, Pressable } from "react-native";
import Bouton from "../ui/Bouton";

const Editinfos = (props) => {

    const Contact = () => {
        props.navigation.push("contact");
    }

    return (
        <View>
        <Pressable onPress={Contact}>
        <Bouton>
          <Text>Contact</Text>
        </Bouton>
        </Pressable>
      </View>
    
    );
};

export default Editinfos;
