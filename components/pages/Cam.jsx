//import liraries
import { Camera, CameraType } from "expo-camera";
import React, { Component, useEffect, useRef, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import {UtilisateurContext} from '../../App'

const Cam = () => {
  const [cameraSens, setCameraSens] = useState(CameraType.back);

  const toggleCamera = () => {
    setCameraSens(
      cameraSens == CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const camer = async () => {
    const resultat = await ImagePicker.launchImageLibraryAsync();
    userInfo.setUtilisateur({
      ...userInfo.utilisateur,
      avatar: resultat.assets[0],
    });
  };

  const size = useWindowDimensions();
  const [permission, demanderPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef();

  console.log(permission);

  useEffect(() => {
    if (permission && permission.status == "undetermined") {
      demanderPermission();
    }
  });

  const objet = useContext(UtilisateurContext);

  const prendrePhoto = async () => {
    // acceder au composant Camera pour utiliser takePictureAsync

    const resultat = await cameraRef.current.takePictureAsync();
    objet.setUtilisateur({ ...objet.utilisateur, avatar: resultat});
    props.navigation.goBack();
  

    // Exercice:
    // Utiliser le contexte pour modifier l'avat r de l'utilisateur avec l'image
    // Utiliser la navigation pour revenir en arriere
  };

  if (permission && permission.granted == false) {
    return <Text> Vous n'avez pas accepté l'utilisation de la camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        ratio="16:9"
        style={{ width: size.width, height: (size.width * 16) / 9 }}
        type={cameraSens}
      >
        <View style={styles.buttons}>
          <Pressable onPress={toggleCamera}>
            <Ionicons name="camera-reverse-sharp" size={42} color="black" />
          </Pressable>
          <Pressable onPress={prendrePhoto}>
            <MaterialCommunityIcons
              name="square-rounded"
              size={42}
              color="black"
            />
          </Pressable>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    margin: "auto",
    bottom: 100,
    alignSelf: "center",
    gap: 50,
  },
});

export default Cam;
