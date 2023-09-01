import {createStackNavigator} from "@react-navigation/stack";
import Profil from "../pages/Profil";
import Cam from "../pages/Cam";
import { colors } from "../../libs/variables";
import Editinfos from "../pages/Editinfos";
import Contact from "../pages/Contact";
import Carte from "../pages/Carte";

const Stack = createStackNavigator();

export default function ProfilStack(){
    return (
    <Stack.Navigator
    screenOptions={{
        headerStyle:{
            backgroundColor:colors.primary_1,
        },
        headerTitleStyle:{
            color:colors.secondary_2,
        },
        headerTintColor:colors.secondary_2,
    }}
    >

        <Stack.Screen 
        name="profil" 
        component={Profil}
        options={{
            title:"Page de profil",
        }}
        />
        <Stack.Screen 
        name="camera" 
        component={Cam}
        options={{
            title:"Prenez une photo",
        }}
        />

        
        <Stack.Screen 
        name="edit" 
        component={Editinfos}
        options={{
            title:"Modifier vos informations",
        }}
        />

        <Stack.Screen 
        name="contact" 
        component={Contact}
        options={{
            title:"Page de contact",
        }}
        />

        <Stack.Screen 
        name="map" 
        component={Carte}
        options={{
            title:"Ou habitez vous?",
        }}
        />
    </Stack.Navigator>
)}

