import React, { useContext, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView
} from "react-native";
import { UtilisateurContext } from "../../App";
import { colors } from "../../libs/variables";
import defaultAvatar from "../../assets/defaultAvatar.png";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Bouton from "../ui/Bouton";




export default function Profil(props) {
  const userInfo = useContext(UtilisateurContext);

  const prendreImage = async () => {
    const resultat = await ImagePicker.launchImageLibraryAsync();
    userInfo.setUtilisateur({
      ...userInfo.utilisateur,
      avatar: resultat.assets[0],
    });
  };



  const goToCamera = () => {
    props.navigation.push("camera");
  };

  const Editinfos = () => {
    props.navigation.push("edit");
  };

  const goToCarte = () => {
    props.navigation.push("map");
  };

  const size = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          style={{
            margin: "auto",
            width: size.width,
            height: size.height,
            maxWidth: 300,
            maxHeight: 300,
            borderRadius: 150,
          }}
          source={
            userInfo.utilisateur.avatar
              ? userInfo.utilisateur.avatar
              : defaultAvatar
          }
        ></Image>

        <View
          style={{
            margin: "auto",
            flexDirection: "row",
            gap: 80,
            marginVertical: 20,
          }}
        >
          <Pressable onPress={prendreImage}>
            <MaterialIcons
              name="photo-library"
              size={46}
              color={colors.primary_1}
            />
          </Pressable>
          <Pressable onPress={goToCamera}>
            <MaterialIcons
              name="photo-camera"
              size={50}
              color={colors.primary_1}
            />
          </Pressable>
        </View>

        <Text style={styles.label}>Email :</Text>

        <Text>{userInfo.utilisateur.email} </Text>
      </View>

      <View>
        <Text style={styles.label}>Pseudo: </Text>
        <Text> {userInfo.utilisateur.username}</Text>
      </View>

      <View>
        <Text style={styles.label}>Description :</Text>
        <Text>
          {userInfo.utilisateur.description
            ? ""
            : " Veuillez entrer une description"}
        </Text>
      </View>


      <View>
        <Pressable onPress={Editinfos}>
        <Bouton>
          <Text>Modifier info</Text>
        </Bouton>
        </Pressable>
      </View>
      <View>
        <Pressable onPress={goToCarte}>
        <Bouton>
          <Text>Ouvrez la carte</Text>
        </Bouton>
        </Pressable>
      </View>
    </ScrollView>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderTopWidth: 10,
    borderTopColor: colors.primary_2,
    borderBottomColor: colors.primary_2,
    borderBottomWidth: 2,
    padding: 10,
    backgroundColor: colors.light_3,
    margin: "auto",
  },
  label: {
    color: colors.primary_1,
    fontWeight: "bold",
  },
});
